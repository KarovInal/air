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
import aneks from 'Data/anek_parse.json';
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

@withStyles(styles)
class AnekPage extends Component {

  render() {
    const { countriesInfo, graphList, classes } = this.props;
    return (
      <div className={classes.content}>
        {
          aneks.map((anek, anekIndex) => 
            <Paper key={anekIndex} component="span" style={{ display: 'inline-block', margin: '5px', padding: '2px' }}>
              <Typography><h2>{ `#${anekIndex + 1}` }</h2></Typography>
              <Typography>{ anek }</Typography>
            </Paper> 
          )
        }
      </div>
    )
  }
}

export default AnekPage;
