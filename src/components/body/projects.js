import React, { useEffect, useState } from "react";
import "../../styling/projects.scss";
import { Container } from "react-bootstrap";
import City from "../../img/city.png";

function Projects() {
     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);

     // fetch projects data from mongodb
     const fetchProj = () => {
          fetch(`http://localhost:4000/stack/`)
               .then((res) => res.json())
               .then(async (data) => {
                    const receivedData = await data.result.projects;
                    setFrontend([...receivedData.frontend]);
                    setBackend([...receivedData.backend]);
                    setFullStack([...receivedData.fullstack]);
               });
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
                                   <button>code</button>
                                   <button>live demo</button>
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
                              <h3>See more projects</h3>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Projects;
