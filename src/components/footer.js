import React from "react";
import "../styling/footer.scss";
import { Container } from "react-bootstrap";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
     const language = ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "ReactJS", "Mongoose", "RESTful API's"];
     const tools = ["MongoDB", "Postman", "Git", "Chrome Dev Tools", "Subl", "Visual Studio Code"];
     const icons = [<BsFacebook />, <BsGithub />, <BsLinkedin />];
     return (
          <Container fluid className="footer">
               <div className="div1 mx-md-5 mx-sm-2">
                    <div>
                         <ul className="list-unstyled">
                              {language.map((item) => (
                                   <li>{item}</li>
                              ))}
                         </ul>
                    </div>
                    <div>
                         <ul className="list-unstyled">
                              {tools.map((item) => (
                                   <li>{item}</li>
                              ))}
                         </ul>
                    </div>
                    <div className="d-flex flex-column">
                         <a href="">sign up</a>
                         <a href="">contact</a>
                         <a href="">resume</a>
                    </div>
               </div>
               <div className="div2 mt-5">
                    <ul className="list-unstyled d-flex">
                         {icons.map((item) => (
                              <li>{item}</li>
                         ))}
                         <li>2024</li>
                         <li>All rights reserve &copy;</li>
                    </ul>
               </div>
          </Container>
     );
}

export default Footer;
