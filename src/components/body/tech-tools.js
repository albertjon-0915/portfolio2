import React, { useEffect, useState } from "react";
import { Card, Button, Container, Col } from "react-bootstrap";

function TechAndTools() {
     const [cardArr, setCardArr] = useState([]);

     const cardcounter = [
          {
               title: "a",
               img: "card",
               text: "this will be 1",
          },
          {
               title: "b",
               img: "card",
               text: "this will be 2",
          },
          {
               title: "c",
               img: "card",
               text: "this will be 3",
          },
          {
               title: "d",
               img: "card",
               text: "this will be 4",
          },
     ];

     useEffect(() => {
          setCardArr(cardcounter);
     }, []);

     return (
          <Container fluid className="tech-tool-container">
               {cardArr && cardArr.length > 0
                    ? cardArr.map((item, index) => (
                           <Card style={{ width: "18rem" }} as={Col} md={4} sm={12} key={index} className="me-3">
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                     <Card.Title>{item.title}</Card.Title>
                                     <Card.Text>{item.text}</Card.Text>
                                     <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                           </Card>
                      ))
                    : null}
          </Container>
     );
}

export default TechAndTools;
