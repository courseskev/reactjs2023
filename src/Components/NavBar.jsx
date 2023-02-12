import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logoML_2.png";
import CartWigdet from "./CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer, Link } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} width={50} heigth={50} alt="logo" />
            </Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Tecnología" id="nav-dropdown">
            <NavDropdown.Item tag={Link} to={`/category/${"celulares"}`}>
              Celulares
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item tag={Link} to={`/category/${"computadores"}`}>
              Computadores
            </NavDropdown.Item>
          </NavDropdown>

          <CartWigdet color="primary" size="large" />
          {"0"}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
