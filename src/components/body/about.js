import React from "react";
import "../../styling/about.scss";
import { Container, Col } from "react-bootstrap";
import me from "../../img/me.jpg";

function Body() {
     return (
          <Container fluid className="about-container">
               <div className="about-content d-lg-flex">
                    <Col lg={6} md={12} className="first">
                         <div>
                              <h1 className="py-4">About me</h1>
                              <div className="img-container">
                                   <img src={me} alt="img" />
                              </div>
                         </div>
                    </Col>
                    <Col lg={6} md={12} className="last mt-5 pt-md-5 pe-lg-5 px-md-5 px-sm-4 px-4">
                         <p className="me-lg-5 ">Hello there!</p>
                         <p className="me-lg-5 ">
                              I'm a passionate web developer skilled in both frontend and backend technologies, using
                              React.js and JavaScript for engaging user interfaces. On the backend, I develop
                              server-side applications and RESTful APIs with Node.js, Express.js, and MongoDB. I craft
                              clean HTML, style it with CSS, and use SASS for maintainable code. I'm committed to
                              continuous learning and delivering high-quality web solutions.
                         </p>
                         <button className="about-btn py-2 mt-5" style={{ maxWidth: "12rem" }}>
                              Contact
                         </button>
                    </Col>
               </div>
          </Container>
     );
}

export default Body;
