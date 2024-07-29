import React, { useEffect } from "react";
import "../styling/login.scss";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
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
               <div className="form-wrapper">
                    <div className="enclosure">
                         <h1 className="text-center">Login</h1>
                         <Form className="login">
                              <Form.Group className="input-field-container">
                                   <Form.Label className="form-label">Email</Form.Label>
                                   <Form.Control className="input-field" type="email" required></Form.Control>
                              </Form.Group>
                              <Form.Group className="input-field-container">
                                   <Form.Label className="form-label">Password</Form.Label>
                                   <Form.Control className="input-field" type="password" required></Form.Control>
                              </Form.Group>

                              <Button type="submit" className="submit-button-wrapper ms-3">
                                   Login
                              </Button>
                         </Form>
                         <p>
                              Do not have an account yet?{" "}
                              <span>
                                   <a href="" className="text-danger">
                                        Register{" "}
                                   </a>
                              </span>
                              here!
                         </p>
                    </div>
               </div>
          </Container>
     );
}

export default Login;
