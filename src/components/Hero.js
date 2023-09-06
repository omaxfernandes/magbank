import React from "react";
import { Card, Col, Image, Row, Button } from "react-bootstrap";
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import "./Hero.scss";

const Hero = ({ handleCreateAcc }) => (
  <Card className="text-center text-light hero">
    <Row className="my-lg-5">
      <Col lg className="text-lg-end mt-5">
        <Image className="d-lg-none" src={logo} />
        <Image className="d-none d-lg-inline-block" src={logoDesktop} />
      </Col>
      <Col lg className="text-lg-start my-5">
        <p>Pague suas contas pelo nosso APP</p>
        <Button variant="outline-light" onClick={handleCreateAcc}>
          Abra sua conta
        </Button>
      </Col>
    </Row>
  </Card>
);

export default Hero;
