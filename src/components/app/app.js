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

const stateToProps = createStructuredSelector({
  countriesInfo: countriesInfoSelector,
  graphList: countrieGraphsSelector
})

@connect(stateToProps)
class App extends Component {
  render() {
    const { countriesInfo, graphList } = this.props;
    
    return (
      <AirMap>
        {/* {
          countriesInfo.map((countrie, index) => (
            <MarkerCountrie key={index} { ...countrie } />
          ))
        } */}

        {
          stadiums.map((stadium, index) =>
            <MarkerStadium key={index} { ...stadium } />
          )
        }

        {/* {
          graphList.map((graphPath, index) => (
            <GraphMap key={index} graphs={graphPath} />
          ))
        } */}
      </AirMap>
    )
  }
}

export default App;
