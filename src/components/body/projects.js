import React, { useEffect, useState } from "react";
import "../../styling/projects.scss";
import { Card, Button, Container, Col } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa6";

function TechAndTools() {
     const [cardArr, setCardArr] = useState([]);

     // fetch projects data from mongodb
     const fetchProj = () => {
          fetch(`http://localhost:4000/stack/`)
               .then((res) => res.json())
               .then((data) => {
                    const receivedData = data.result.projects;

                    setCardArr([...receivedData.fullstack, ...receivedData.backend, ...receivedData.frontend]);

                    console.log(cardArr);
               });
     };

     useEffect(() => {
          fetchProj();
          moreBtn();
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

     return (
          <Container
               // fluid
               className="project-container d-flex justify-content-center flex-column"
               style={{ "--bs-gutter-x": "0rem" }}
          >
               <h1 className="text-center mb-5">Project</h1>
               <div className="card-container">
                    <div className="more">
                         <button id="btnMore">
                              more
                              <FaCaretDown />
                         </button>
                    </div>
                    {cardArr && cardArr.length > 0
                         ? cardArr.map((item, index) => (
                                <Card
                                     style={{ maxWidth: "25em", minWidth: "18em" }}
                                     as={Col}
                                     md={4}
                                     sm={12}
                                     key={index}
                                >
                                     <Card.Img variant="top" src={item.imageString} />
                                     <Card.Body>
                                          <Card.Title>{item.title}</Card.Title>
                                          <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                                          <Card.Text>{item.description}</Card.Text>
                                          <Button className="btn-card">Go somewhere</Button>
                                     </Card.Body>
                                </Card>
                           ))
                         : null}
               </div>
          </Container>
     );
}

export default TechAndTools;
