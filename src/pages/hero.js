import React from "react";
import "../App.scss";
import { Container } from "react-bootstrap";
import space from "../img/space.jpg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

function hero() {
     window.addEventListener("resize", () => {
          const imgContainer = document.querySelector(".img-container");
          const img = document.querySelector(".img");
          const width = window.innerWidth;

          // if (width > 1400) {
          //      img.classList.add("animate-img");
          //      img.classList.add("rotate-styling");
          //      // img.classList.remove("hero-img-covered");
          //      imgContainer.classList.add("border-styling");
          // } else if (width < 1400) {
          //      img.classList.remove("animate-img");
          //      img.classList.remove("rotate-styling");
          //      // img.classList.add("hero-img-covered");
          //      imgContainer.classList.remove("border-styling");
          // } else {
          //      imgContainer.classList.add("release-styling");
          // }
     });
     return (
          <Container fluid id="hero-container">
               <div className="div1 p-md-5 p-sm-2">
                    <h1 className="fs-3">Hi,</h1>
                    <h1>I'am Albert Inciong</h1>
                    <p>"An aspiring future web developer"</p>
                    <div className="d-inline">
                         <button>Explore</button>
                         <button>Contact me</button>
                    </div>
                    <ul className="list-unstyled d-flex">
                         <li>
                              <a href="">
                                   <BsFacebook />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <BsGithub />
                              </a>
                         </li>
                         <li>
                              <a href="">
                                   <BsLinkedin />
                              </a>
                         </li>
                    </ul>
               </div>
               <div className="div2">
                    <div className="img-container ">
                         <img className="img " src={space} alt="img" />
                    </div>
               </div>
          </Container>
     );
}

export default hero;
