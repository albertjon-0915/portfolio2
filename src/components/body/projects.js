import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styling/projects.scss";
import { Button, Container } from "react-bootstrap";
import videoRender from "../../media/video-coding.mp4";

function Projects() {
     const navigate = useNavigate();
     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);

     // fetch projects data from mongodb
     const fetchProj = () => {
          fetch(`${process.env.REACT_APP_API_URL}/stack/`)
               .then((res) => res.json())
               .then(async (data) => {
                    const receivedData = await data.result.projects;
                    setFrontend([...receivedData.frontend]);
                    setBackend([...receivedData.backend]);
                    setFullStack([...receivedData.fullstack]);
               });
     };

     const handlePageJump = (url) => {
          window.location.href = url;
     };

     useEffect(() => {
          fetchProj();
     }, []);

     const renderProject = (stack) => {
          if (stack.length > 0) {
               return (
                    <div>
                         <img src={stack[0].imageString} alt="img" />
                         <div className="content-container">
                              <h3 className="text-center">{stack[0].title}</h3>
                              <h5 className="text-center">{stack[0].subtitle}</h5>
                              <div id="btn-container">
                                   <button onClick={(e) => handlePageJump(stack[0].gitlink)}>code</button>
                                   <button onClick={(e) => handlePageJump(stack[0].link)}>live demo</button>
                              </div>
                         </div>
                    </div>
               );
          }
     };

     return (
          <Container fluid className="parent-project-container">
               <div className="project-wrapper m-sm-2">
                    <div className="item" id="item1">
                         <h1>PROJECT</h1>
                    </div>
                    <div className="item" id="item2">
                         {renderProject(full)}
                    </div>
                    <div className="item" id="item3">
                         {renderProject(back)}
                    </div>
                    <div className="item" id="item4">
                         {renderProject(front)}
                    </div>
                    <div className="item" id="item5">
                         <div className="item5-content d-flex">
                              <div className="text-content">
                                   <div className="div1">
                                        <h3>
                                             <span>What</span>
                                             <span>do i</span>
                                             <span>offer</span>
                                        </h3>
                                   </div>
                                   <div className="div2">
                                        <div>Front end (HTML, CSS, JS & etc.)</div>
                                        <div>Back end (API's & etc.)</div>
                                        <div>Full stack (MERN Stack)</div>
                                   </div>
                              </div>
                              <div className="img-content"></div>
                         </div>
                    </div>
                    <div className="item" id="item6">
                         <div>
                              <div className="vid-container">
                                   <video src={videoRender} loop autoPlay preload="auto" muted></video>
                              </div>
                              <div className="item6-content-container">
                                   <div className="item6-text-container">
                                        <p>
                                             want to see <span>MORE</span> projects?
                                        </p>
                                        <p>
                                             Here are some projects i build <span>personally</span> and projects during
                                             my coding <span>bootcamp</span>
                                        </p>
                                   </div>
                                   <div className="btn-container">
                                        <Button className="button-seemore" onClick={() => navigate("/works")}>
                                             See more
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Projects;
