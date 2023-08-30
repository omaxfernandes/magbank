import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

const CenteredButton = ({ children }) => (
  <Container>
    <Col className="d-flex justify-content-center">
      <Row>
        <Button className="my-5 px-5 py3" variant="success" size="lg">
          {children}
        </Button>
      </Row>
    </Col>
  </Container>
);

export default CenteredButton;
