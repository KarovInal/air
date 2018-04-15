import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleSize } from 'lodash';
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
    minWidth: 0,
  }
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

  renderCard(img) {
    return <Grid item style={{ width: '300px'}}>
      <Paper>
        <img src={img} width="100%"/>
      </Paper>
    </Grid>
  }

  renderVotes = votes => (
    <Grid item style={{ width: '300px'}}>
      {votes.map((vote, voteIndex) => {
        return (
          <Paper style={{ margin: '2px', padding: '2px', cursor: "pointer" }}
            key={voteIndex}
            onClick={() => { console.log(vote); this.voteChecker(vote) }}
          >
            { vote }
          </Paper>
        )
      }
      )}
    </Grid>
  )

  renderStatics = () => {
    return <Grid item style={{ width: '300px'}}>
      <p>Верно: {this.state.success}</p>
      <p>Не верно: {this.state.failed}</p>
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
          <Grid>
            { this.renderStatics() }
            { this.renderCard(this.state.voteList[this.state.count].img) }
            { this.renderVotes([this.state.voteList[this.state.count].ans, ...sampleSize(teamsList, 3)]) }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default VouterPage;
