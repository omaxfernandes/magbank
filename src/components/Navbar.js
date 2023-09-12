import React from "react";
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Navgation = ({ handleClick }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Magbank logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#cartao">Cart</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar Minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/login">Pessoa Física</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link>Pessoa Jurídica</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleClick}>
            Abra sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navgation;
