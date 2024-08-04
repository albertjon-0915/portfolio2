import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";

import "../styling/hero.scss";
import { Container } from "react-bootstrap";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import resume from "../media/Albert Jon Inciong.pdf";

function Hero() {
     const navigate = useNavigate();
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
          }, 2000);

          return () => clearInterval(interval);
     }, [textspan.length]);

     return (
          <Container fluid className="hero-container" id="hero">
               <div className="main-content-wrapper">
                    <div className="text-wrapper1">
                         <h1 className="h1-content">
                              Albert <span className="text-danger">Inciong</span>
                         </h1>
                         <div className="border-UI"></div>
                    </div>
                    <div className="text-wrapper2">{textspan[currentIndex]}</div>
               </div>
               <div className="content-wrapper1">
                    <p className="lowerleft">
                         Empowering your vision with seamless front-end experiences and robust back-end solutions. From
                         design to deployment, I bring your ideas to life with precision and creativity.
                    </p>
                    <a href={resume} download="Albert Jon Inciong.pdf" className="resume-download">
                         resume
                         <span className="ms-3">
                              <HiDownload />
                         </span>
                    </a>
               </div>

               <div className="content-wrapper2">
                    <p className="topright">
                         As an aspiring developer, I am passionately honing my front-end and back-end skills to
                         transform ideas into impactful digital solutions. My journey is driven by continuous learning
                         and innovation.
                    </p>
                    <a href="#contact">
                         contact me
                         <span className="ms-3">
                              <GrContact />
                         </span>
                    </a>
               </div>

               <ul className="socials-container1 list-unstyled d-flex">
                    <li className="item1">
                         <a href="https://www.facebook.com/alaric.0915" target="_blank">
                              <BsFacebook />
                         </a>
                    </li>
                    <li className="item2">
                         <a href="https://github.com/albertjon-0915" target="_blank">
                              <BsGithub />
                         </a>
                    </li>
                    <li className="item3">
                         <a href="https://www.linkedin.com/in/albert-jon-7a8957288/" target="_blank">
                              <BsLinkedin />
                         </a>
                    </li>
                    <div className="item4">
                         <a href="#contact">Let's talk</a>
                    </div>
               </ul>

               <ul className="socials-container2 list-unstyled d-flex">
                    <li className="item1">
                         <a href="https://www.facebook.com/alaric.0915" target="_blank">
                              <BsFacebook />
                         </a>
                    </li>
                    <li className="item2">
                         <a href="https://github.com/albertjon-0915" target="_blank">
                              <BsGithub />
                         </a>
                    </li>
                    <li className="item3">
                         <a href="https://www.linkedin.com/in/albert-jon-7a8957288/" target="_blank">
                              <BsLinkedin />
                         </a>
                    </li>
                    <div className="item4">
                         <a href="#contact">Let's talk</a>
                    </div>
               </ul>
          </Container>
     );
}

export default Hero;
