import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../styling/sign-in-up.scss";

import { Container, Form, Button } from "react-bootstrap";

function Login() {
     const navigate = useNavigate();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [failedLogin, setFailedLogin] = useState(false);

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

     const loginUser = (e) => {
          e.preventDefault();

          fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
               method: "POST",
               headers: { "Content-type": "application/json" },
               body: JSON.stringify({ email: email, password: password }),
          })
               .then((res) => res.json())
               .then((result) => {
                    console.log(result);
                    if (result.message === "Login successfully") {
                         localStorage.setItem("token", result.access);
                         console.log(localStorage.getItem("token"));
                         navigate("/");
                    } else {
                         toast.error(result.message || result.error);
                    }
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

                         <Form className="login" onSubmit={(e) => loginUser(e)}>
                              <Form.Group className="input-field-container">
                                   <Form.Label className="form-label">Email</Form.Label>
                                   <Form.Control
                                        className="input-field"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                   ></Form.Control>
                              </Form.Group>
                              <Form.Group className="input-field-container">
                                   <Form.Label className="form-label">Password</Form.Label>
                                   <Form.Control
                                        className="input-field"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                   ></Form.Control>
                              </Form.Group>

                              <Button type="submit" className="submit-button-wrapper ms-3">
                                   Login
                              </Button>
                         </Form>
                         <p>
                              Do not have an account yet?{" "}
                              <span>
                                   <a className="text-danger" onClick={(e) => navigate("/register")}>
                                        Register{" "}
                                   </a>
                              </span>
                              here!
                         </p>
                    </div>
               </div>

               <Toaster position="bottom-left" toastOptions={{ className: "popupToast", duration: 5000 }} />
          </Container>
     );
}

export default Login;
