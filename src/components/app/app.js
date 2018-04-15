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
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 50,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: '60px',
    paddingTop: '55px',
    minWidth: 0,
  }
});

const stateToProps = createStructuredSelector({
  countriesInfo: countriesInfoSelector,
  graphList: countrieGraphsSelector
})

@withStyles(styles)
@connect(stateToProps)
class App extends Component {
  render() {
    const { countriesInfo, graphList, classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              FOOTBALL APP
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Button>HOME</Button>
        </Drawer>
        <div className={classes.content}>
          <AirMap>
            {
              stadiums.map((stadium, index) =>
                <MarkerStadium key={index} { ...stadium } />
              )
            }
          </AirMap>
        </div>
      </div>
    )
  }
}

export default App;
