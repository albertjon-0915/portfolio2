import React, { useEffect, useState } from "react";
import { Card, Button, Container, Col } from "react-bootstrap";

function TechAndTools() {
     const [cardArr, setCardArr] = useState([]);

     const cardcounter = [
          {
               title: "Static/ Front end",
               img: "https://programs.austincc.edu/wp-content/uploads/2023/12/GettyImages-9053011381.jpg",
               text: "HTML, CSS, Bootstrap, JavaScript",
          },
          {
               title: "API / Back end",
               img: "https://cdn.feedingtrends.com/article-images/Gabriel_Heinzer_de5d928bc0",
               text: "NodeJS, ExpressJS, Mongoose, MongoDB",
          },
          {
               title: "API / Back end",
               img: "https://cdn.feedingtrends.com/article-images/Gabriel_Heinzer_de5d928bc0",
               text: "NodeJS, ExpressJS, Mongoose, MongoDB",
          },
          {
               title: "API / Back end",
               img: "https://cdn.feedingtrends.com/article-images/Gabriel_Heinzer_de5d928bc0",
               text: "NodeJS, ExpressJS, Mongoose, MongoDB",
          },
          {
               title: "MERN Stack / Full stack",
               img: "https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt",
               text: "MERN Stack, Restful API's, Postman, ReactJS",
          },
          {
               title: "MERN Stack / Full stack",
               img: "https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt",
               text: "MERN Stack, Restful API's, Postman, ReactJS",
          },
          {
               title: "MERN Stack / Full stack",
               img: "https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt",
               text: "MERN Stack, Restful API's, Postman, ReactJS",
          },
          {
               title: "MERN Stack / Full stack",
               img: "https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt",
               text: "MERN Stack, Restful API's, Postman, ReactJS",
          },
          {
               title: "MERN Stack / Full stack",
               img: "https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt",
               text: "MERN Stack, Restful API's, Postman, ReactJS",
          },
     ];

     const moreBtn = () => {
          const btn = document.getElementById("btnMore");
          const cardContainer = document.querySelector(".card-container");
          const more = document.querySelector(".more");

          btn.addEventListener("click", () => {
               cardContainer.style.maxHeight = "unset";
               more.style.display = "none";
          });
     };
     useEffect(() => {
          setCardArr(cardcounter);
          moreBtn();
     }, []);

     return (
          <Container fluid className="tech-tool-container d-flex justify-content-center flex-column">
               <h1 className="text-center mb-5">Project</h1>
               <div className="card-container">
                    <div className="more">
                         <button id="btnMore">More</button>
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
                                     <Card.Img variant="top" src={item.img} />
                                     <Card.Body>
                                          <Card.Title>{item.title}</Card.Title>
                                          <Card.Text>{item.text}</Card.Text>
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
