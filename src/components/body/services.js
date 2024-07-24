import React from "react";
import "../../styling/services.scss";
import { Container } from "react-bootstrap";
import working from "../../media/working.png";
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
                                   <p>
                                        Ensures websites adapt fluidly to different devices and screen sizes, providing
                                        an optimal viewing experience across all platforms.
                                   </p>
                              </div>
                         </div>
                         <div style={{ "--i": 2 }} id="service">
                              <MdDynamicFeed />
                              <div>
                                   <h4>Dynamic</h4>
                                   <p>
                                        Creates interactive and responsive web applications that engage users with
                                        real-time updates and responsive features.
                                   </p>
                              </div>
                         </div>
                         <div style={{ "--i": 3 }} id="service">
                              <MdOutlineDesignServices />
                              <div>
                                   <h4>Creative</h4>
                                   <p>
                                        Combines aesthetics with functionality to craft visually appealing interfaces
                                        that enhance user experience.
                                   </p>
                              </div>
                         </div>
                         <div style={{ "--i": 4 }} id="service">
                              <FaStopwatch />
                              <div>
                                   <h4>Fast</h4>
                                   <p>
                                        Delivers high-quality web development solutions quickly and efficiently,
                                        optimizing both speed and performance.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Services;
