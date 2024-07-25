import React from "react";
import { Container, Form, Row } from "react-bootstrap";

function signup() {
     return (
          <Container fluid>
               <div className="form-container d-flex">
                    <Form className="login">
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                    </Form>
                    <Form className="register">
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                    </Form>
               </div>
          </Container>
     );
}

export default signup;
