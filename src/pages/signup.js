import React from "react";
import { Container, Form, Row } from "react-bootstrap";

function signup() {
     return (
          <Container fluid className="signup-container">
               <div className="form-wrapper d-flex">
                    <Form className="login">
                         <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control></Form.Control>
                         </Form.Group>
                         <Form.Group>
                              <Form.Label>Confirm password</Form.Label>
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
