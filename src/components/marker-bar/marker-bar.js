import React, { Component } from 'react';
import styled from "styled-components";
import { InfoWindow } from "react-google-maps";
import { Marker } from 'react-google-maps';
import msToTime from 'Libs/msToTime';
import { MARKER_ANCHOR } from 'Const/coordinates';
import barIcon from 'Data/bar_icon.png';

const CountryMarker = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  width: 60px;
  font-size: 15px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin: 10px;
  padding: 0px;
  list-style: none;
`;

const CountryMarkerItem = styled.li`
  text-align: center;
`;

const CountryInfoText = styled.p`
  color: black;
  font-size: 16px;
`;

class MarkerBar extends Component {
  state = {
    isShowInfo: false
  }

  toggleInfo = () => {
    this.setState({
      isShowInfo: !this.state.isShowInfo
    })
  }

  render() {
    const {
      id,
      lat,
      lng,
      name
    } = this.props;

    const coordinates = {
      lat,
      lng
    };

    return (
      <Marker
        zIndex={123}
        icon={{
          url: barIcon
        }}
        labelAnchor={MARKER_ANCHOR}
        onClick={this.toggleInfo}
        position={coordinates}
        defaultAnimation={google.maps.Animation.DROP}
      />
    )
  }
}

export default MarkerBar;
