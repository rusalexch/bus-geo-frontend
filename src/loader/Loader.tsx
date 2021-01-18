import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Container fluid className="container_center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
  );
}

export default Loader;