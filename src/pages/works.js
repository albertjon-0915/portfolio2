import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { useLocation } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "../styling/works.scss";
import Footer from "../components/footer";
import { LuCode2 } from "react-icons/lu";
import { GrView } from "react-icons/gr";

function Works() {
     const location = useLocation();

     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);

     console.log(front);

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

     const scrollWindowFunc = () => {
          const tracer = document.querySelector(".tracer");

          window.addEventListener("scroll", async (e) => {
               const scrollvalue = await window.scrollY;

               tracer.style.height = `${scrollvalue}px`;
          });
     };

     const handlePageJump = (url) => {
          window.location.href = url;
     };

     useEffect(() => {
          scrollWindowFunc();
          fetchProj();

          return () => {
               window.removeEventListener("scroll", scrollWindowFunc);
          };
     }, []);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [location]);

     const responsive = {
          0: { items: 1 },
          600: { items: 2 },
          1024: { items: 4 },
     };

     const renderProj = (stack) => {
          return stack.map((item) => (
               <li key={item.title}>
                    <Card>
                         <Card.Img variant="top" src={item.imageString} />
                         <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                              <Card.Text>{item.description}</Card.Text>
                              <Button className="works-card-btn">
                                   code <LuCode2 className="ms-1" />
                              </Button>
                              <Button onClick={(e) => handlePageJump(item.link)} className="works-card-btn">
                                   live demo
                                   <GrView className="ms-2" />
                              </Button>
                         </Card.Body>
                    </Card>
               </li>
          ));
     };

     return (
          <Container fluid className="works p-0">
               <div className="carousel-container">
                    {carouselText.map((item, index) => (
                         <h1 id={`carousel-item${index}`} key={index}>{`${item}`}</h1>
                    ))}
               </div>
               <div className="content-container">
                    <div className="tracer-container">
                         <div className="tracer"></div>
                    </div>
                    <div className="works-container">
                         <h1>FRONT END</h1>
                         <ul className="list-unstyled">{renderProj(front)}</ul>

                         <h1>BACK END</h1>
                         <ul className="list-unstyled">{renderProj(back)}</ul>

                         <h1>FULL STACK</h1>
                         <ul className="list-unstyled">
                              {renderProj(full)} {renderProj(full)}
                         </ul>
                    </div>
               </div>
               <Footer />
          </Container>
     );
}

export default Works;
