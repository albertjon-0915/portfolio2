import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Waypoint } from "react-waypoint";

import "../../styling/about.scss";
import me from "../../media/me.jpg";
import mycode from "../../media/mycode.PNG";

function Body() {
     const [visible1, setVisible1] = useState(false);
     const [visible2, setVisible2] = useState(false);

     const onEnterViewport1 = () => {
          setVisible1(true);
     };

     const onExitViewport1 = () => {
          setVisible1(false);
     };

     const onEnterViewport2 = () => {
          setVisible2(true);
     };

     const onExitViewport2 = () => {
          setVisible2(false);
     };

     return (
          <Container fluid className="about-container">
               <Waypoint onEnter={onEnterViewport1} onLeave={onExitViewport1} topOffset={"10%"} bottomOffset={"70%"}>
                    <div id="img-coding">
                         <img src={mycode} alt="img" id="img1" />
                         <img src={me} alt="img" id="img2" className={`img2 ${visible1 ? "img2-in-out" : ""}`} />
                    </div>
               </Waypoint>
               <Waypoint onEnter={onEnterViewport2} onLeave={onExitViewport2} topOffset={"30%"} bottomOffset={"30%"}>
                    <div className={`content-wrapper ${visible2 ? "content-in-out" : ""}`}>
                         <div className="text-wrapper" style={{ width: "500px" }}>
                              <h3>ABOUT ME</h3>
                              <p className="me-lg-5 ">Hello there!</p>
                              <p className="me-lg-5 ">
                                   I'm a passionate web developer skilled in both frontend and backend technologies,
                                   using React.js and JavaScript for engaging user interfaces. On the backend, I develop
                                   server-side applications and RESTful APIs with Node.js, Express.js, and MongoDB. I
                                   craft clean HTML, style it with CSS, and use SASS for maintainable code. I'm
                                   committed to continuous learning and delivering high-quality web solutions.
                              </p>
                              <button className="about-btn py-2 mt-5">Contact Me</button>
                         </div>
                    </div>
               </Waypoint>
          </Container>
     );
}

export default Body;
