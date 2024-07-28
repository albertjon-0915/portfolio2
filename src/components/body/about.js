import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Waypoint } from "react-waypoint";

import "../../styling/about.scss";
import me from "../../media/me.jpg";
import mycode from "../../media/mycode.PNG";

function Body() {
     const [visible1, setVisible1] = useState(false);
     const [visible2, setVisible2] = useState(false);
     const [visible3, setVisible3] = useState(false);

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

     const onEnterViewport3 = () => {
          setVisible3(true);
     };

     const onExitViewport3 = () => {
          setVisible3(false);
     };

     return (
          <Container fluid className="about-container">
               <div id="img-coding">
                    <Waypoint
                         onEnter={onEnterViewport1}
                         onLeave={onExitViewport1}
                         topOffset={"5%"}
                         bottomOffset={"10%"}
                    >
                         <img src={mycode} alt="img" className={`img1 ${visible1 ? "img1-in-out" : ""}`} />
                    </Waypoint>
                    <Waypoint
                         onEnter={onEnterViewport2}
                         onLeave={onExitViewport2}
                         topOffset={"20%"}
                         bottomOffset={"10%"}
                    >
                         <img src={me} alt="img" id="img2" className={`img2 ${visible2 ? "img2-in-out" : ""}`} />
                    </Waypoint>
               </div>

               <Waypoint onEnter={onEnterViewport3} onLeave={onExitViewport3} topOffset={"30%"} bottomOffset={"30%"}>
                    <div className={`content-wrapper ${visible3 ? "content-in-out" : ""}`}>
                         <div className="text-wrapper" style={{ width: "500px" }}>
                              <h3>ABOUT ME</h3>
                              <p className="me-lg-5 ">Hello there!</p>
                              <p className="me-lg-5 ">
                                   I'm a passionate web developer skilled in both frontend and backend technologies,
                                   using <span className="text-danger">React.js</span> and
                                   <span className="text-danger"> JavaScript</span> for engaging user interfaces. On the
                                   backend, I develop server-side applications and
                                   <span className="text-danger"> RESTful APIs</span> with
                                   <span className="text-danger"> Node.js</span>,
                                   <span className="text-danger"> Express.js</span>, and
                                   <span className="text-danger"> MongoDB</span>. I craft clean
                                   <span className="text-danger"> HTML</span>, style it with
                                   <span className="text-danger"> CSS</span>, and use
                                   <span className="text-danger"> SASS</span> for maintainable code. I'm committed to
                                   continuous learning and delivering high-quality web solutions.
                              </p>
                              <button className="about-btn py-2 mt-5">Contact Me</button>
                         </div>
                    </div>
               </Waypoint>
          </Container>
     );
}

export default Body;
