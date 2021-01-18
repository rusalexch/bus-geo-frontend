import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { YMaps, Map, Polyline } from 'react-yandex-maps';
import Footer from '../footer/Footer';
import HeaderForm from '../headerForm/HeaderForm';
import { IState } from '../store/types';
import './map.css';

function MapContainer () {
  const pointData = useSelector(({pointData}: IState) => pointData);

  function renderMap() {
    if (!pointData) {
      return null;
    }
    const points = pointData.points.map((point) => {
      return [point.lat, point.lon];
    })
    return (
      <YMaps>
        <Map
          defaultState={{ 
            bounds: [
              [pointData.bounds.minLat, pointData.bounds.minLng],
              [pointData.bounds.maxLat, pointData.bounds.maxLng],
            ],
          } }
          width="100%"
          height="800px"
        >
          <Polyline
            geometry={points}
            options={{
              balloonCloseButton: true,
              strokeColor: '#000',
              strokeWidth: 4,
              strokeOpacity: 0.5,
            }}
          />
        </Map>
      </YMaps>
    )
  }

  return (
    <Card className="map">
      <Card.Header>
        <HeaderForm/>
      </Card.Header>
      <Card.Body>
        {renderMap()}
      </Card.Body>
      <Card.Footer>
        <Footer />
      </Card.Footer>
    </Card>
  )
}

export default MapContainer;