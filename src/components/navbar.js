import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/navbar.scss";

function Navigationbar() {
     const [navSettingOnScroll, setNavSettingOnScroll] = useState(false);

     const onScroll = () => {
          window.addEventListener("scroll", async (e) => {
               const scrollValue = await window.scrollY;

               if (scrollValue >= 300) {
                    setNavSettingOnScroll(true);
               } else {
                    setNavSettingOnScroll(false);
               }
          });
     };

     useEffect(() => {
          onScroll();

          return () => {
               window.removeEventListener("scroll", onScroll);
          };
     }, []);

     return (
          <Navbar
               expand={"md"}
               className={`${
                    !navSettingOnScroll
                         ? "position-absolute top-0 start-0 p-md-5 p-3 "
                         : "position-fixed fixed-top p-md-3 p-3 nav-bg nav-animate-in"
               }`}
               id="nav-container"
          >
               <Container fluid id="navbar">
                    <Navbar.Brand as={Link} to={"/"}>
                         Aj
                    </Navbar.Brand>
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
                                   <Nav.Link as={Link} to={"/#hero"} href="#hero">
                                        Home
                                   </Nav.Link>
                                   <Nav.Link as={Link} to={"/works"}>
                                        Projects
                                   </Nav.Link>
                                   <Nav.Link as={Link} to={"/register"}>
                                        Sign up
                                   </Nav.Link>
                                   <Nav.Link as={Link} to={"/login"}>
                                        Login
                                   </Nav.Link>
                              </Nav>
                         </Offcanvas.Body>
                    </Navbar.Offcanvas>
               </Container>
          </Navbar>
     );
}

export default Navigationbar;
