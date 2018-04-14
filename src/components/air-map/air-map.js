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
  containerElement: <div style={{ height: `900px` }} />,
  mapElement: <div style={{ height: `100%` }} />
})
@withScriptjs
@withGoogleMap
class AirMap extends Component {
  handleClick = () => {
    var request = {
      location: DEFAULT_CENTER,
      radius: '500',
      query: 'Пицца'
    };
    console.log(this.mapEl);
    let service = new google.maps.places.PlacesService(this.mapEl);
    service.textSearch(request, (req, res) => console.log(req, res));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>BARS!</button>
        <GoogleMap
          ref={mapEl => this.mapEl = mapEl}
          zoom={DEFAULT_ZOOM}
          defaultCenter={DEFAULT_CENTER}
        >
          { this.props.children }
        </GoogleMap>
      </div>
    );
  }
}

export default AirMap;
