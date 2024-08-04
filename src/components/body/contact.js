import React, { useState, useEffect } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import "../../styling/contact.scss";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
     const [email, setEmail] = useState("");
     const [number, setNumber] = useState("");

     const getActive = () => {
          const input = document.querySelectorAll(".input-form-wrapper");
          console.log(input);

          input.forEach((inp) => {
               const inputValue = inp.querySelector(".input-field");
               const inputLabel = inp.querySelector(".form-label");

               console.log(inputLabel, inputValue);

               inputValue.addEventListener("focus", () => inputLabel.classList.add("active"));
               inputValue.addEventListener("blur", () => {
                    if (inputValue.value !== "") return;
                    inputLabel.classList.remove("active");
               });
          });
     };

     useEffect(() => {
          getActive();
     }, []);

     return (
          <Container fluid className="contact-container" id="contact">
               <div className="contact-form">
                    <h2>CONTACT ME</h2>
                    <Form noValidate>
                         <Row className="mb-3 input-email">
                              <Form.Group className="input-form-wrapper">
                                   <Form.Label className="form-label">Email</Form.Label>
                                   <Form.Control required type="email" className="input-field" />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Row className="mb-3 input-phone">
                              <Form.Group className="input-form-wrapper">
                                   <Form.Label className="form-label">Contact number</Form.Label>
                                   <Form.Control required type="number" className="input-field" />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Row className="p-0 mb-3 input-comment">
                              <Form.Group className="p-0">
                                   <Form.Label>Comment: </Form.Label>
                                   <Form.Control
                                        required
                                        type="text"
                                        as="textarea"
                                        placeholder="leave a message"
                                        className="input-field-comment"
                                   />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Button type="submit" className="contact-btn-form mt-5">
                              Submit
                         </Button>
                    </Form>
               </div>
               <div className="contact-messages">
                    <div>
                         <div></div>
                    </div>
               </div>
          </Container>
     );
}

export default Contact;
