import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MapContainer from '../map/Map';
import './app.css';

function App() { 

  return (
    <div className="app">
      <Container>
        <Row>
          <Col>
            <h3 className="header">
              Добро пожаловать!
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <MapContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
