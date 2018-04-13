import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { DEFAULT_CENTER } from 'Const/coordinates';
import { MAP_URL, DEFAULT_ZOOM } from 'Const/settings';

@withProps({
  center: DEFAULT_CENTER,
  googleMapURL: MAP_URL,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
})
@withScriptjs
@withGoogleMap
class AirMap extends Component {
  render() {
    return (
      <GoogleMap
        zoom={DEFAULT_ZOOM}
        defaultCenter={{ lat: 26.56738, lng: 29.884477 }}
        ref="map"
      >
        { this.props.children }
      </GoogleMap>
    );
  }
}

export default AirMap;
