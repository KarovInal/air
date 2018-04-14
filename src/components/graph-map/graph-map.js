import React, { Component } from 'react';
import { Polyline } from "react-google-maps";
import AirPlaneIcon from 'Data/air-plane-icon';

class GraphMap extends Component {
  render() {
    const { graphs } = this.props;

    return (
      <Polyline
        zIndex={999}
        path={ graphs }
        options={{
          offset: "0%",
          fillColor: "#000",
          strokeColor: "#65AC28",
          strokeOpacity: 0.7,
          strokeWeight: 2
        }}
      />
    )
  }
}

export default GraphMap;
