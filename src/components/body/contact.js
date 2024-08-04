import React, { useState, useEffect } from "react";
import { Container, Form, Row, Button, Card } from "react-bootstrap";
import "../../styling/contact.scss";
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick";
import { IoIosQuote } from "react-icons/io";
import { BiSolidQuoteRight } from "react-icons/bi";

function Contact() {
     const [email, setEmail] = useState("");
     const [number, setNumber] = useState("");
     const [comment, setComment] = useState("");
     const [reviews, setReviews] = useState([]);

     const getActive = () => {
          const input = document.querySelectorAll(".input-form-wrapper");

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

     const sendComment = (e) => {
          e.preventDefault();

          fetch(`${process.env.REACT_APP_API_URL}/reviews`, {
               method: "POST",
               headers: { "Content-type": "application/json" },
               body: JSON.stringify({
                    email: email,
                    mobileNo: number,
                    comment: comment,
               }),
          })
               .then((res) => res.json())
               .then((result) => {
                    console.log(result);
                    if (result.message === "Successfully created a comment") {
                         toast.success("Thank you for leaving a message!");
                         fetchReviews();
                    } else {
                         toast.error("Something went wrong please try again");
                    }
               });
     };

     const fetchReviews = () => {
          fetch(`${process.env.REACT_APP_API_URL}/reviews`)
               .then((res) => res.json())
               .then((result) => {
                    if (result) {
                         setReviews(result.result);
                    }
               });
     };

     useEffect(() => {
          getActive();
          fetchReviews();
     }, []);

     return (
          <Container fluid className="contact-container" id="contact">
               <div className="contact-form">
                    <h2>CONTACT ME</h2>
                    <Form noValidate onSubmit={sendComment}>
                         <Row className="mb-3 input-email">
                              <Form.Group className="input-form-wrapper">
                                   <Form.Label className="form-label">Email</Form.Label>
                                   <Form.Control
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input-field"
                                   />
                                   <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                         </Row>
                         <Row className="mb-3 input-phone">
                              <Form.Group className="input-form-wrapper">
                                   <Form.Label className="form-label">Contact number</Form.Label>
                                   <Form.Control
                                        required
                                        type="number"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        className="input-field"
                                   />
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
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
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
               <div className="contact-messages "></div>

               <Toaster position="bottom-left" toastOptions={{ className: "popupToast", duration: 5000 }} />
          </Container>
     );
}

export default Contact;
