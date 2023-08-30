import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-left">
          <Image src={logo} />
        </Col>
        <Col className="d-none d-lg-block " xs={12} lg={4}>
          <Image src={applestore} />
          <Image src={googleplay} style={{ marginLeft: "15px" }} />
        </Col>
        <Col className="d-lg-none mb-5 mt-5" xs={12} lg={4}>
          <Image src={applestore} />
          <Image src={googleplay} style={{ marginLeft: "15px" }} />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7c7c7c"
              size="2x"
            />
          </a>
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#7c7c7c"
              size="2x"
              style={{ marginLeft: "20px" }}
            />
          </a>
          <a
            href="http://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#7c7c7c"
              size="2x"
              style={{ marginLeft: "20px" }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
