import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import astronaut from "../../img/UFO.png";

function contact() {
     return (
          <Container className="form-container">
               <h1 className="m-md-5 m-4">Contact me</h1>
               <Form noValidate>
                    <Row className="mb-3">
                         <Form.Group as={Col} md="4" controlId="validationCustom01">
                              <Form.Label>First name</Form.Label>
                              <Form.Control required type="text" placeholder="First name" />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                         </Form.Group>
                         <Form.Group as={Col} md="4" controlId="validationCustom02">
                              <Form.Label>Last name</Form.Label>
                              <Form.Control required type="text" placeholder="Last name" />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                         </Form.Group>
                    </Row>
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
                              <Form.Control required type="text" as="textarea" placeholder="Comments on my work?" />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                         </Form.Group>
                    </Row>
                    <Button type="submit" className="mt-5">
                         Submit
                    </Button>
                    <img src={astronaut} alt="img" />
               </Form>
          </Container>
     );
}

export default contact;
