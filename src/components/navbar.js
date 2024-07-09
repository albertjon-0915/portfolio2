import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function navbar() {
     return (
          <Navbar className="position-absolute top-0 start-0 p-md-5">
               <Container fluid>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#features">Projects</Nav.Link>
                         <Nav.Link href="#features">Skills</Nav.Link>
                         <Nav.Link href="#pricing">About me</Nav.Link>
                    </Nav>
               </Container>
          </Navbar>
     );
}

export default navbar;
