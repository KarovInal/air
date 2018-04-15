import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { Drawer, AppBar, Toolbar, Button } from 'material-ui';
import MarkerBar from 'Components/marker-bar';
import teams from 'Data/teams.json';
import flags from 'Data/flags.json';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: '240px',
    paddingTop: '55px',
    minWidth: 0,
  }
});

console.log(teams)

@withStyles(styles)
class TeamPage extends Component {
  renderTeam = (team, teamKey) => {
    return (
      <Paper style={{ margin: '20px', padding: '20px' }}>
        <Typography>
          <h1 style={{ textAlign: 'center' }}>
            { teamKey } <img src={flags[teamKey]} />
          </h1>
        </Typography>
        {
          team.map(player => <Paper component="span" style={{ display: 'inline-block', margin: '5px', padding: '2px' }}>
            <Typography>{ player }</Typography>
          </Paper>)
        }
      </Paper>
    )
  };

  render() {
    const { countriesInfo, graphList, classes } = this.props;
    return (
      <div className={classes.content}>
        {
          Object.keys(teams).map(teamKey => {
            return this.renderTeam(teams[teamKey], teamKey)
          })
        }
      </div>
    )
  }
}

export default TeamPage;
