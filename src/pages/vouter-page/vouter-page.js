import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleSize, shuffle } from 'lodash';
import { createStructuredSelector } from 'reselect';
import AirMap from 'Components/air-map';
import MarkerCountrie from 'Components/marker-countrie';
import GraphMap from 'Components/graph-map';
import MarkerStadium from 'Components/marker-stadiums';
import Countries from 'Data/countries';
import Paper from 'material-ui/Paper';
import { countriesInfoSelector, countrieGraphsSelector } from 'Ducks/map';
import stadiums from 'Data/stadiums';
import { withStyles } from 'material-ui/styles';
import { Drawer, AppBar, Toolbar, Button, Grid } from 'material-ui';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import MarkerBar from 'Components/marker-bar';
import playersVoutes from 'Data/player-voutes.json';
import teams from 'Data/teams.json';
import Typography from 'material-ui/Typography';

const teamsList = Object.keys(teams);

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: '240px',
    paddingTop: '80px',
    height: '100vh',
    minWidth: 0,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

@withStyles(styles)
class VouterPage extends Component {
  state = {
    voteList: playersVoutes,
    success: 0,
    failed: 0,
    count: 0
  }

  voteChecker = vote => {
    if(this.state.voteList[this.state.count].ans === vote) {
      this.setState({
        count: this.state.count + 1,
        success: this.state.success + 1
      })
    } else {
      this.setState({
        count: this.state.count + 1,
        failed: this.state.failed + 1
      })
    }
  }

  renderCard = img => {
    const { classes } = this.props;
    return <CardMedia
      className={classes.media}
      image={img}
      title="Contemplative Reptile"
    />
  }

  renderVotes = votes => (
    <Grid style={{ width: '100%'}}>
      {votes.map((vote, voteIndex) => {
          return (
            <Button variant="raised" fullWidth color="primary" style={{ margin: '5px', textAlign: 'center', cursor: "pointer" }}
              key={voteIndex}
              onClick={() => { console.log(vote); this.voteChecker(vote) }}
            >
              { vote }
            </Button>
          )
        }
      )}
    </Grid>
  )

  renderStatics = () => {
    return <Grid item style={{ width: '300px', textAlign: 'center'}}>
      <Typography>
        Верно: {this.state.success + '/'}
        Не верно: {this.state.failed}
      </Typography>
    </Grid>
  }

  render() {
    const { countriesInfo, graphList, classes } = this.props;
    if(this.state.count >= this.state.voteList.length) {
      return <div className={classes.content}>
        <Grid container alignContent="center" justify="center">
          <Grid>
            {
              this.state.success > this.state.failed
                ? 'YOU WON!'
                : 'YOU LOOSE!'
            }
          </Grid>
        </Grid>
      </div>
    }

    return (
      <div className={classes.content}>
        <Grid container alignContent="center" justify="center">
          <Card className={classes.card}>
            { this.renderStatics() }
            { this.renderCard(this.state.voteList[this.state.count].img) }
            <CardActions>
              { this.renderVotes(shuffle( [this.state.voteList[this.state.count].ans, ...sampleSize(teamsList, 3)] ))}
            </CardActions>
          </Card>
          <Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default VouterPage;
