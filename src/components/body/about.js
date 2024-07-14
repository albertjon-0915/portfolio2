import React from "react";
import "../../App.scss";
import { Container, Col } from "react-bootstrap";
import me from "../../img/me.jpg";

function Body() {
     return (
          <Container fluid className="about-container">
               <div className="about-content d-lg-flex">
                    <Col lg={6} md={12} className="first">
                         <div>
                              <h1 className="py-4">About me</h1>
                              <img src={me} alt="img" />
                         </div>
                    </Col>
                    <Col lg={6} md={12} className="last mt-5 pt-md-5 pe-lg-5 px-md-5 px-sm-4">
                         <p className="me-lg-5 ">
                              Hi there! I'm a passionate web developer with a robust skill set in both frontend and
                              backend technologies. I utilize React.js to build engaging and interactive user
                              interfaces, and enhance them with JavaScript for improved functionality and user
                              experience. I craft semantic HTML and style it with CSS, leveraging SASS for more
                              efficient and maintainable code.
                         </p>
                         <p className="me-lg-5 ">
                              On the backend, I develop server-side applications and RESTful APIs using Node.js and
                              Express.js, and implement MongoDB for robust and scalable database solutions. I am
                              committed to continuous learning and staying updated with the latest industry trends to
                              deliver high-quality and innovative web solutions. Feel free to explore my portfolio to
                              see my projects and get a better sense of my capabilities. Let's connect and bring your
                              ideas to life!
                         </p>
                    </Col>
               </div>
          </Container>
     );
}

export default Body;
