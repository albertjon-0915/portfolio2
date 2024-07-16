import React from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import "../styling/navbar.scss";

function navbar() {
     return (
          // <Navbar className="position-absolute top-0 start-0 p-md-5">
          //      <Container fluid id="navbar">
          //           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          //           <Nav className="me-auto">
          //                <Nav.Link href="#home">Home</Nav.Link>
          //                <Nav.Link href="#features">Projects</Nav.Link>
          //                <Nav.Link href="#features">Services</Nav.Link>
          //                <Nav.Link href="#pricing">About me</Nav.Link>
          //                <Nav.Link href="#pricing">Sign up</Nav.Link>
          //           </Nav>
          //      </Container>
          // </Navbar>

          <Navbar expand={"md"} className="position-absolute top-0 start-0 p-md-5 p-3">
               <Container fluid id="navbar">
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} id="btn-offcanvas-toggle" />
                    <Navbar.Offcanvas
                         id={`offcanvasNavbar-expand-md`}
                         aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                         placement="end"
                    >
                         <Offcanvas.Header closeButton>
                              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Menu</Offcanvas.Title>
                         </Offcanvas.Header>
                         <Offcanvas.Body>
                              <Nav className="justify-content-end flex-grow-1 pe-3">
                                   <Nav.Link href="#home">Home</Nav.Link>
                                   <Nav.Link href="#features">Projects</Nav.Link>
                                   <Nav.Link href="#features">Services</Nav.Link>
                                   <Nav.Link href="#pricing">About me</Nav.Link>
                                   <Nav.Link href="#pricing">Sign up</Nav.Link>
                              </Nav>
                         </Offcanvas.Body>
                    </Navbar.Offcanvas>
               </Container>
          </Navbar>
     );
}

export default navbar;
