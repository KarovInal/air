import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AirMap from 'Components/air-map';
import MarkerCountrie from 'Components/marker-countrie';
import Countries from 'Data/countries';
import { countriesInfoSelector } from 'Ducks/map';
const stateToProps = createStructuredSelector({
  countriesInfo: countriesInfoSelector
})

@connect(stateToProps)
class App extends Component {
  render() {
    const { countriesInfo } = this.props;

    return (
      <AirMap>
        {
          countriesInfo.map((countrie, index) => (
            <MarkerCountrie key={index} { ...countrie } />
          ))
        }
      </AirMap>
    )
  }
}

export default App;
