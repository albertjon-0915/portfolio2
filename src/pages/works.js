import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../styling/works.scss";
import Footer from "../components/footer";

function Works() {
     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);

     const carouselText = ["Start Coding", "Work Hard", "Learn Motivated"];
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

     useEffect(() => {
          fetchProj();
     }, []);

     return (
          <Container fluid className="p-0">
               <div className="carousel-container">
                    {carouselText.map((item, index) => (
                         <h1 id={`carousel-item${index}`} key={index}>{`${item}`}</h1>
                    ))}
               </div>
               <div className="works-container">
                    <h1>Front end</h1>
                    <ul className="list-unstyled">
                         {front.map((item) => (
                              <li key={item.title}>
                                   <Card>
                                        <Card.Img variant="top" src={item.imageString} />
                                        <Card.Body>
                                             <Card.Title>{item.title}</Card.Title>
                                             <Card.Text>{item.subtitle}</Card.Text>
                                             <Card.Text>{item.description}</Card.Text>
                                             <Button className="works-card-btn">code</Button>
                                             <Button className="works-card-btn">live demo</Button>
                                        </Card.Body>
                                   </Card>
                              </li>
                         ))}
                    </ul>

                    <h1>Back end</h1>
                    <ul className="list-unstyled">
                         {back.map((item) => (
                              <li key={item.title}>
                                   <Card>
                                        <Card.Img variant="top" src={item.imageString} />
                                        <Card.Body>
                                             <Card.Title>{item.title}</Card.Title>
                                             <Card.Text>{item.subtitle}</Card.Text>
                                             <Card.Text>{item.description}</Card.Text>
                                             <Button className="works-card-btn">code</Button>
                                             <Button className="works-card-btn">live demo</Button>
                                        </Card.Body>
                                   </Card>
                              </li>
                         ))}
                    </ul>

                    <h1>Back end</h1>
                    <ul className="list-unstyled">
                         {full.map((item) => (
                              <li key={item.title}>
                                   <Card>
                                        <Card.Img variant="top" src={item.imageString} />
                                        <Card.Body>
                                             <Card.Title>{item.title}</Card.Title>
                                             <Card.Text>{item.subtitle}</Card.Text>
                                             <Card.Text>{item.description}</Card.Text>
                                             <Button className="works-card-btn">code</Button>
                                             <Button className="works-card-btn">live demo</Button>
                                        </Card.Body>
                                   </Card>
                              </li>
                         ))}
                    </ul>
               </div>
               <Footer />
          </Container>
     );
}

export default Works;
