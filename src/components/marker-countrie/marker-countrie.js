import React, { Component } from 'react';
import styled from "styled-components";
import { InfoWindow } from "react-google-maps";
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import { MARKER_ANCHOR } from 'Const/coordinates';

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

class MarkerCountrie extends Component {
  state = {
    isShowInfo: false
  }

  toggleInfo = () => {
    this.setState({
      isShowInfo: !this.state.isShowInfo
    })
  }

  render() {
    const { coordinates, id, flag = '-' } = this.props;

    console.log(this.props);
    return (
      <MarkerWithLabel
        icon="none"
        labelAnchor={MARKER_ANCHOR}
        onClick={this.toggleInfo}
        position={coordinates}>
        <div>
          <CountryMarker>
            <CountryMarkerItem>{ id }</CountryMarkerItem>
            <CountryMarkerItem>{ flag }</CountryMarkerItem>
          </CountryMarker>
            { this.state.isShowInfo &&
              <InfoWindow
                position={ coordinates }
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
                onCloseClick={this.toggleInfo}
              >
                <div>
                  <CountryInfoText>Кол. пас.: 340</CountryInfoText>
                  <CountryInfoText>Время полета: 3ч. 32м.</CountryInfoText>
                  <CountryInfoText>Мощность сам.: 1000 л. с.</CountryInfoText>
                </div>
              </InfoWindow>
            }
        </div>
      </MarkerWithLabel>
    )
  }
}

export default MarkerCountrie;
