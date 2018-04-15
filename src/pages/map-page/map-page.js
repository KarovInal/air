import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AirMap from 'Components/air-map';
import MarkerCountrie from 'Components/marker-countrie';
import GraphMap from 'Components/graph-map';
import MarkerStadium from 'Components/marker-stadiums';
import Countries from 'Data/countries';
import { countriesInfoSelector, countrieGraphsSelector } from 'Ducks/map';
import stadiums from 'Data/stadiums';
import { withStyles } from 'material-ui/styles';
import { Drawer, AppBar, Typography, Toolbar, Button } from 'material-ui';
import MarkerBar from 'Components/marker-bar';
import bars from 'Data/bars';

const drawerWidth = 240;

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
class MapPage extends Component {
  render() {
    const { countriesInfo, graphList, classes } = this.props;
    return (
      <div className={classes.content}>
        <AirMap>
          {
            stadiums.map((stadium, index) =>
              <MarkerStadium key={index} { ...stadium } />
            )
          }
        </AirMap>
      </div>
    )
  }
}

export default MapPage;
