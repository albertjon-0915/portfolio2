import React from "react";
import "../../styling/about.scss";
import { Container } from "react-bootstrap";
import me from "../../media/me.jpg";
import mycode from "../../media/mycode.PNG";

function Body() {
     return (
          <Container fluid className="about-container">
               <div id="img-coding">
                    <img src={mycode} alt="img" id="img1" />
                    <img src={me} alt="img" id="img2" />
               </div>
               <div className="content-wrapper">
                    <div className="text-wrapper" style={{ width: "500px" }}>
                         <h3>ABOUT ME</h3>
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
                    </div>
               </div>
          </Container>
     );
}

export default Body;
