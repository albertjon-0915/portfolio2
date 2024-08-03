import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../../styling/contact.scss";
import astronaut from "../../media/UFO.png";

function contact() {
     return (
          <Container fluid className="contact-container d-flex justify-content-center" id="contact">
               <Container className="form-container">
                    <h1 className="m-md-5 m-4 text-center">CONTACT ME</h1>
                    <Form noValidate>
                         <Row className="mb-3">
                              <Form.Group as={Col} md="4" controlId="validationCustom01">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control required type="email" placeholder="albert@mail.com" />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Row className="mb-3">
                              <Form.Group as={Col} md="4" controlId="validationCustom01">
                                   <Form.Label>Contact number</Form.Label>
                                   <Form.Control required type="text" placeholder="09154018912" />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Row className="mb-3">
                              <Form.Group as={Col} md="8" controlId="validationCustom01">
                                   <Form.Label>Comments</Form.Label>
                                   <Form.Control
                                        required
                                        type="text"
                                        as="textarea"
                                        placeholder="Comments on my work?"
                                   />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Button type="submit" className="mt-5">
                              Submit
                         </Button>
                         <img src={astronaut} alt="img" />
                    </Form>
               </Container>
          </Container>
     );
}

export default contact;
