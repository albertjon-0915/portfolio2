import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "../styling/hero.scss";
import { Container } from "react-bootstrap";
import space from "../media/space.jpg";
import astronaut from "../media/astonaut.webp";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import something from "../media/Albert Jon Inciong.pdf";

function Hero() {
     // const [animateOut, setAnimationOut] = useState(false);
     // // function for window resize
     // // astronaut image animation out function
     // const windowResize = () => {
     //      window.addEventListener("resize", () => {
     //           const width = window.innerWidth;
     //           if (width < 1400) {
     //                setAnimationOut(true);
     //           } else {
     //                setAnimationOut(false);
     //           }
     //      });
     // };
     // useEffect(() => {
     //      windowResize();
     // }, []);
     // return (
     //      <Container fluid id="hero-container">
     //           <div className="div1 p-md-5 p-sm-2">
     //                <h1>ALBERT INCIONG</h1>
     //                <p className="mb-5">"An aspiring future web developer"</p>
     //                <div className="d-inline">
     //                     <a href={something} download="Albert Jon Inciong.pdf" className="resume-download">
     //                          Resume
     //                     </a>
     //                     <a className="contact-button">Contact me</a>
     //                </div>
     //                <ul className="list-unstyled d-flex">
     //                     <li>
     //                          <a href="">
     //                               <BsFacebook />
     //                          </a>
     //                     </li>
     //                     <li>
     //                          <a href="">
     //                               <BsGithub />
     //                          </a>
     //                     </li>
     //                     <li>
     //                          <a href="">
     //                               <BsLinkedin />
     //                          </a>
     //                     </li>
     //                </ul>
     //           </div>
     //           <div className="div2">
     //                <img id="img-bg" src={space} alt="img" />
     //                <img
     //                     id="img-astro"
     //                     className={animateOut ? "animate-in" : "animate-out"}
     //                     src={astronaut}
     //                     alt="img"
     //                />
     //           </div>
     //      </Container>
     // );
     const color = ["#00f7ff", "#ff5100", "#c51e00", "#ff0b0b", "#dd0081"];

     const [currentIndex, setCurrentIndex] = useState(0);

     const textspan = [
          <h1 className="h1-content">
               <span>Web </span>
               <span style={{ color: color[0], textShadow: `0 0 25px ${color[0]}` }}>Developer</span>
          </h1>,
          <h1 className="h1-content">
               <span>Web </span>
               <span style={{ color: color[1], textShadow: `0 0 25px ${color[1]}` }}>Designer</span>
          </h1>,
          <h1 className="h1-content">
               <span>"</span>
               <span style={{ color: color[2], textShadow: `0 0 25px ${color[2]}` }}>Think</span>
               <span>"</span>
          </h1>,
          <h1 className="h1-content">
               <span>"</span>
               <span style={{ color: color[3], textShadow: `0 0 25px ${color[3]}` }}>Create</span>
               <span>"</span>
          </h1>,
          <h1 className="h1-content">
               <span>"</span>
               <span style={{ color: color[4], textShadow: `0 0 25px ${color[4]}` }}>Innovate</span>
               <span>"</span>
          </h1>,
     ];

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % textspan.length);
          }, 1500);

          return () => clearInterval(interval);
     }, [textspan.length]);

     return (
          <Container fluid className="hero-container">
               <div className="content-wrapper">
                    <div className="text-wrapper1">
                         <h1 className="h1-content">
                              Albert <span className="text-danger">Inciong</span>
                         </h1>
                         <div className="border-UI"></div>
                    </div>
                    <div className="text-wrapper2">{textspan[currentIndex]}</div>
               </div>
               <p></p>
          </Container>
     );
}

export default Hero;
