import React, { useEffect, useState } from "react";
import "../styling/sign-in-up.scss";
import { Container, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
     const navigate = useNavigate();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPass, setConfirmPass] = useState("");

     console.log(email, password, confirmPass);

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

     const registerUser = (e) => {
          e.preventDefault();

          if (!email.includes("@") && confirmPass !== "" && password !== "" && password === confirmPass) {
               toast.error("Invalid, please check credentials");
          } else {
               fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                         email: email,
                         password: password,
                    }),
               })
                    .then((res) => res.json())
                    .then((result) => {
                         console.log(result);

                         if (result.message === "Registered successsfully") {
                              navigate("/login");
                         } else {
                              toast.error(result.message || result.error || result.err);
                         }
                    });
          }
     };

     useEffect(() => {
          getActive();
     }, []);
     return (
          <Container fluid className="signup-container">
               <div className="form-wrapper">
                    <div className="enclosure">
                         <h1 className="text-center">Register</h1>
                         <Form className="register" onSubmit={registerUser}>
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
                              <Form.Group className="input-field-container">
                                   <Form.Label className="form-label">Confirm password</Form.Label>
                                   <Form.Control
                                        className="input-field"
                                        type="password"
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                        required
                                   ></Form.Control>
                              </Form.Group>

                              <Button type="submit" className="submit-button-wrapper ms-3">
                                   Submit
                              </Button>
                         </Form>
                         <p>
                              Already have an account?{" "}
                              <span>
                                   <a className="text-danger" onClick={(e) => navigate("/login")}>
                                        Login{" "}
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

export default Register;
