import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

import "../../styling/services.scss";
import { Container } from "react-bootstrap";
import { MdDynamicFeed, MdOutlineDesignServices, MdScreenshotMonitor } from "react-icons/md";
import { FaStopwatch } from "react-icons/fa";

function Services() {
     const [visible, setVisible] = useState(false);

     const onEnterViewport = () => {
          setVisible(true);
     };

     const onExitViewport = () => {
          setVisible(false);
     };

     return (
          <Waypoint onEnter={onEnterViewport} onLeave={onExitViewport} topOffset={"20%"} bottomOffset={"20%"}>
               <Container fluid>
                    <div className="services-container">
                         <div className="services-item1">
                              <div className={`service ${visible ? "services-in-out1" : ""}`} id="item1">
                                   <MdScreenshotMonitor />
                                   <div>
                                        <h4>Responsiveness</h4>
                                        <p>
                                             Ensures websites adapt fluidly to different devices and screen sizes,
                                             providing an optimal viewing experience across all platforms.
                                        </p>
                                   </div>
                              </div>
                              <div className={`service ${visible ? "services-in-out2" : ""}`} id="item2">
                                   <MdDynamicFeed />
                                   <div>
                                        <h4>Dynamic</h4>
                                        <p>
                                             Creates interactive and responsive web applications that engage users with
                                             real-time updates and responsive features.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="services-item2">
                              <div className={`service ${visible ? "services-in-out3" : ""}`} id="item3">
                                   <MdOutlineDesignServices />
                                   <div>
                                        <h4>Creative</h4>
                                        <p>
                                             Combines aesthetics with functionality to craft visually appealing
                                             interfaces that enhance user experience.
                                        </p>
                                   </div>
                              </div>
                              <div className={`service ${visible ? "services-in-out4" : ""}`} id="item4">
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
          </Waypoint>
     );
}

export default Services;
