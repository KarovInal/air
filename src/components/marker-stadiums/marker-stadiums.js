import React, { Component } from 'react';
import styled from "styled-components";
import { InfoWindow } from "react-google-maps";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import msToTime from 'Libs/msToTime';

const ANCHOR_STADIUM = { x: 40, y: 70 }

const CountryMarker = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  width: 80px;
  font-size: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin: 10px;
  padding: 0px;
  list-style: none;
`;

const CountryMarkerItem = styled.li`
  font-size: 14px;
  text-align: center;
`;

const CountryInfoText = styled.p`
  color: black;
  font-size: 14px;
`;

const PhotoStadium = styled.img`
  display: block;
  width: 250px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 6px 6px #999;
`;

class MarkerStadium extends Component {
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
      label,
      coordinates,
      capacity,
      img_outside,
      img_interior
    } = this.props;

    return (
      <MarkerWithLabel
        icon="none"
        labelAnchor={ANCHOR_STADIUM}
        onClick={this.toggleInfo}
        position={coordinates}
      >
        <CountryMarker>
          <CountryMarkerItem>{ label }</CountryMarkerItem>
          <CountryMarkerItem>🏟</CountryMarkerItem>
          { this.state.isShowInfo &&
            <InfoWindow
              position={ coordinates }
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
              onCloseClick={this.toggleInfo}
            >
              <div>
                <h2>{ label }</h2>
                <CountryInfoText>Вместительность: { capacity }</CountryInfoText>
                <CountryInfoText>Фото снаружи:</CountryInfoText>
                <PhotoStadium src={img_outside} />
                <CountryInfoText>Фото внутри:</CountryInfoText>
                <PhotoStadium src={img_interior} />
              </div>
            </InfoWindow>
          }
        </CountryMarker>
      </MarkerWithLabel>
    )
  }
}

export default MarkerStadium;
