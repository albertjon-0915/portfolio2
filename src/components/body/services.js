import React from "react";
import "../../styling/services.scss";
import { Container } from "react-bootstrap";
import working from "../../img/working.png";
import { MdDynamicFeed, MdOutlineDesignServices, MdScreenshotMonitor } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";

function Services() {
     return (
          <Container fluid>
               <div className="services-container">
                    <div className="service-item">
                         <div style={{ "--i": 1 }} id="service">
                              <MdScreenshotMonitor />
                              <div>
                                   <h4>Responsiveness</h4>
                                   <p>ensures that websites adapt fluidly to different devices and screen sizes </p>
                              </div>
                         </div>
                         <div style={{ "--i": 2 }} id="service">
                              <MdDynamicFeed />
                              <div>
                                   <h4>Dynamic</h4>
                                   <p>creating interactive and responsive web applications</p>
                              </div>
                         </div>
                         <div style={{ "--i": 3 }} id="service">
                              <MdOutlineDesignServices />
                              <div>
                                   <h4>Creative</h4>
                                   <p>combining aesthetics with functionality to captivate users</p>
                              </div>
                         </div>
                         <div style={{ "--i": 4 }} id="service">
                              <FaStopwatch />
                              <div>
                                   <h4>Fast</h4>
                                   <p>fast web development</p>
                              </div>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Services;
