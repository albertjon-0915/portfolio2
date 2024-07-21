import React, { useEffect, useState } from "react";
import "../../styling/projects.scss";
import { Card, Button, Container, Col } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa6";
import { BsCardChecklist } from "react-icons/bs";

function TechAndTools() {
     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);
     const [render, setRenderItem] = useState({});

     // fetch projects data from mongodb
     const fetchProj = () => {
          fetch(`http://localhost:4000/stack/`)
               .then((res) => res.json())
               .then(async (data) => {
                    const receivedData = await data.result.projects;
                    console.log(receivedData);

                    // setProjects([...receivedData.fullstack, ...receivedData.backend, ...receivedData.frontend]);

                    await setFrontend([...receivedData.frontend]);
                    await setBackend([...receivedData.backend]);
                    await setFullStack([...receivedData.fullstack]);

                    await console.log(full);
               });
     };

     useEffect(() => {
          fetchProj();
          // moreBtn();
     }, []);

     const moreBtn = () => {
          const btn = document.getElementById("btnMore");
          const cardContainer = document.querySelector(".card-container");
          const more = document.querySelector(".more");

          btn.addEventListener("click", () => {
               cardContainer.style.maxHeight = "unset";
               more.style.display = "none";
          });
     };

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

     // return (
     //      // <Container
     //      //      className="project-container d-flex justify-content-center flex-column"
     //      //      style={{ "--bs-gutter-x": "0rem" }}
     //      // >
     //      //      <h1 className="text-center mb-5">Project</h1>
     //      //      <div className="card-container">
     //      //           <div className="more">
     //      //                <button id="btnMore">
     //      //                     more
     //      //                     <FaCaretDown />
     //      //                </button>
     //      //           </div>
     //      //           {cardArr && cardArr.length > 0
     //      //                ? cardArr.map((item, index) => (
     //      //                       <Card
     //      //                            style={{ maxWidth: "25em", minWidth: "18em" }}
     //      //                            as={Col}
     //      //                            md={4}
     //      //                            sm={12}
     //      //                            key={index}
     //      //                       >
     //      //                            <Card.Img variant="top" src={item.imageString} />
     //      //                            <Card.Body>
     //      //                                 <Card.Title>{item.title}</Card.Title>
     //      //                                 <Card.Subtitle>{item.subtitle}</Card.Subtitle>
     //      //                                 <Card.Text>{item.description}</Card.Text>
     //      //                                 <Button className="btn-card">Go somewhere</Button>
     //      //                            </Card.Body>
     //      //                       </Card>
     //      //                  ))
     //      //                : null}
     //      //      </div>
     //      // </Container>
     // );

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
                         <div className="d-flex">
                              <div className="div1">
                                   <h3 className="text-wrap">What do i offer</h3>
                              </div>
                              <div className="div2">
                                   <div className="text-wrap">front end</div>
                                   <div className="text-wrap">back end</div>
                                   <div className="text-wrap">full stack</div>
                              </div>
                         </div>
                         <div>
                              <BsCardChecklist />
                         </div>
                    </div>
                    <div className="item" id="item6">
                         <div>
                              <h3>See more project</h3>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default TechAndTools;
