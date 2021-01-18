import React from 'react'
import { Col, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IState } from '../store/types';


function Footer() {
  const countPoints = useSelector(({pointData}: IState) => pointData?.countPoints);
  const maxSpeed = useSelector(({pointData}: IState) => pointData?.maxSpeed);
  const distance = useSelector(({pointData}: IState) => pointData?.distance);

  if (!countPoints || !maxSpeed || !distance) {
    return (
      <Container className="container_center">
        Необходимо выбрать автобус и дату
      </Container>
    )
  }

  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Количество точек</Form.Label>
            <Form.Control              
              readOnly
              value={countPoints}
            />
          </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>Максимальная скорость</Form.Label>
            <Form.Control
              readOnly             
              value={maxSpeed}
            />
          </Form.Group>
        </Col>
        <Col>
        <Form.Group>
            <Form.Label>Расстояние</Form.Label>
            <Form.Control              
              readOnly
              value={distance}
            />
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default Footer;