import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function navbar() {
     return (
          <Navbar className="position-absolute top-0 start-0">
               <Container fluid>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#features">Features</Nav.Link>
                         <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
               </Container>
          </Navbar>
     );
}

export default navbar;
