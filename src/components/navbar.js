import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../styling/navbar.scss";

function navbar() {
     return (
          <Navbar className="position-absolute top-0 start-0 p-md-5">
               <Container fluid id="navbar">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#features">Projects</Nav.Link>
                         <Nav.Link href="#features">Services</Nav.Link>
                         <Nav.Link href="#pricing">About me</Nav.Link>
                         <Nav.Link href="#pricing">Sign up</Nav.Link>
                    </Nav>
               </Container>
          </Navbar>
     );
}

export default navbar;
