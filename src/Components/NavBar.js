import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Assets/logoML_2.png";
import CartWigdet from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={50} heigth={50} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#promotions">Promociones</Nav.Link>
            <Nav.Link href="#tech">Tecnología</Nav.Link>
            <Nav.Link href="#clothes">Ropa</Nav.Link>
          </Nav>
          <CartWigdet color="primary" size="large" />
          {"0"}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
