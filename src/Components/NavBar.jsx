import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logoML_2.png";
import CartWigdet from "./CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function NavBar() {
  return (
    <Fragment>
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
            <NavDropdown.Item>
              <LinkContainer to={`/domain_id/${"MCO-CELLPHONES"}`}>
                <Nav.Link>Celulares</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>
              <LinkContainer to={`/domain_id/${"MCO-NOTEBOOKS"}`}>
                <Nav.Link>Computadores</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item>
              <LinkContainer to={`/domain_id/${"MCO-HEADPHONES"}`}>
                <Nav.Link>Audifonos</Nav.Link>
              </LinkContainer>
            </NavDropdown.Item>
          </NavDropdown>

          <CartWigdet color="primary" size="large" />
          {"0"}
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default NavBar;
