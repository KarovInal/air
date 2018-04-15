import React, { Component } from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { isEmpty } from 'lodash';
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import MarkerBar from 'Components/marker-bar';
import { DEFAULT_CENTER } from 'Const/coordinates';
import { MAP_URL, DEFAULT_ZOOM } from 'Const/settings';
import bars from 'Data/bars';

@withProps({
  center: DEFAULT_CENTER,
  googleMapURL: MAP_URL,
  loadingElement: <div style={{ height: `100vh` }} />,
  containerElement: <div style={{ height: `600px` }} />,
  mapElement: <div style={{ height: `100vh` }} />
})
@withScriptjs
@withGoogleMap
class AirMap extends Component {
  state = {
    zoomLevel: DEFAULT_ZOOM,
    center: DEFAULT_CENTER,
    isDisplayBars: false
  }

  handleZoomChange = () => {
    const ZOOM = this.refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.zoom;

    (ZOOM >= 10)
      ? this.setState({ isDisplayBars: true })
      : this.setState({ isDisplayBars: false })
  }

  render() {
    const { isDisplayBars } = this.state;

    return (
      <GoogleMap
        ref='map'
        zoom={this.state.zoomLevel}
        center={this.state.center}
        onZoomChanged={this.handleZoomChange}
      >
        {this.props.children}
        {
          isDisplayBars && bars.map((bar, barIndex) =>
            <MarkerBar {...bar} key={barIndex} />
          )
        }
      </GoogleMap>
    );
  }
}

export default AirMap;
