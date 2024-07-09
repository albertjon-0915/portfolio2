import React from "react";
import "../App.scss";
import { Container } from "react-bootstrap";
import space from "../img/space.jpg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function hero() {
     return (
          <Container fluid id="hero-container">
               <div className="div1">
                    <h1 className="fs-3">Hi,</h1>
                    <h1>I'am Albert Inciong</h1>
                    <p>"An aspiring future web developer"</p>
                    <button>Explore</button>
                    <button>Contact me</button>
                    <ul className="list-unstyled d-flex">
                         <li>
                              <a href="">
                                   <BsFacebook />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <BsGithub />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <BsLinkedin />
                              </a>
                         </li>
                    </ul>
               </div>
               <div className="div2">
                    <div className="img-container">
                         <img className="img" src={space} alt="img" />
                    </div>
               </div>
          </Container>
     );
}

export default hero;
