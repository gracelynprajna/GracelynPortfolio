import React from "react";

import "./styles/navBar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <br />
      <Navbar className="justify-content-center" style={{ flex: 1}} bg="light" data-bs-theme="light">
        <Container className="nav-container">
          <Navbar.Brand href="/#home">Gracelyn Prajna</Navbar.Brand>
          <Nav className="nav-list">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

