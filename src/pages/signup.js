import React, { useEffect } from "react";
import "../styling/signup.scss";
import { Container, Form, Button } from "react-bootstrap";

function Signup() {
     const getActive = () => {
          const input = document.querySelectorAll(".input-field-container");

          input.forEach((inp) => {
               const inputValue = inp.querySelector(".input-field");
               const inputLabel = inp.querySelector(".form-label");

               inputValue.addEventListener("focus", () => inputLabel.classList.add("active"));
               inputValue.addEventListener("blur", () => {
                    if (inputValue.value !== "") return;
                    inputLabel.classList.remove("active");
               });
          });
     };

     const loginUser = () => {
          fetch(`${process.env.REACT_APP_API_URL}/users/login`, { method: "POST" })
               .then((res) => res.json())
               .then((result) => {
                    console.log(result);
               });
     };

     useEffect(() => {
          getActive();
     }, []);
     return (
          <Container fluid className="signup-container">
               <div className="form-wrapper1">
                    <h1 className="text-center">Login</h1>
                    <Form className="login">
                         <Form.Group className="input-field-container">
                              <Form.Label className="form-label">Email</Form.Label>
                              <Form.Control className="input-field"></Form.Control>
                         </Form.Group>
                         <Form.Group className="input-field-container">
                              <Form.Label className="form-label">Password</Form.Label>
                              <Form.Control className="input-field"></Form.Control>
                         </Form.Group>
                         {/* <Form.Group className="input-field-container">
                              <Form.Label className="form-label">Confirm password</Form.Label>
                              <Form.Control className="input-field"></Form.Control>
                         </Form.Group> */}
                         <Button type="submit" className="submit-button-wrapper1 ms-3">
                              Login
                         </Button>
                    </Form>
                    <p>
                         Do not have an account yet?{" "}
                         <span>
                              <a href="">Register </a>
                         </span>
                         here!
                    </p>
                    {/* <Form className="register">
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
                    </Form> */}
               </div>
          </Container>
     );
}

export default Signup;
