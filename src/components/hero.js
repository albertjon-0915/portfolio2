import React, { useEffect, useState } from "react";
import "../styling/hero.scss";

import { Container } from "react-bootstrap";
import space from "../img/space.jpg";
import astronaut from "../img/astonaut.webp";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function Hero() {
     const [animateOut, setAnimationOut] = useState(false);

     // function for window resize
     // astronaut image animation out function
     const windowResize = () => {
          window.addEventListener("resize", () => {
               const width = window.innerWidth;

               if (width < 1400) {
                    setAnimationOut(true);
               } else {
                    setAnimationOut(false);
               }
          });
     };

     useEffect(() => {
          windowResize();
     }, []);

     return (
          <Container fluid id="hero-container">
               <div className="div1 p-md-5 p-sm-2">
                    {/* <h1 className="fs-3">Hi,</h1> */}
                    <h1>ALBERT INCIONG</h1>
                    <p>"An aspiring future web developer"</p>
                    <div className="d-inline">
                         <button>Resume</button>
                         <button className="my-2">Contact me</button>
                    </div>
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
                    <img id="img-bg" src={space} alt="img" />
                    <img
                         id="img-astro"
                         className={animateOut ? "animate-in" : "animate-out"}
                         src={astronaut}
                         alt="img"
                    />
               </div>
          </Container>
     );
}

export default Hero;
