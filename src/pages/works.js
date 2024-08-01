import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styling/works.scss";
import Footer from "../components/footer";
import { LuCode2 } from "react-icons/lu";
import { GrView } from "react-icons/gr";

function Works() {
     const location = useLocation();

     const [front, setFrontend] = useState([]);
     const [back, setBackend] = useState([]);
     const [full, setFullStack] = useState([]);

     console.log(front);

     const carouselText = ["StartCoding", "WorkHard", "BeMotivated"];

     const fetchProj = () => {
          fetch(`${process.env.REACT_APP_API_URL}/stack/`)
               .then((res) => res.json())
               .then(async (data) => {
                    const receivedData = await data.result.projects;
                    setFrontend([...receivedData.frontend]);
                    setBackend([...receivedData.backend]);
                    setFullStack([...receivedData.fullstack]);
               });
     };

     const scrollWindowFunc = () => {
          const tracer = document.querySelector(".tracer");
          const glow = document.querySelector(".glow");

          const startColor = { r: 58, g: 58, b: 58 }; // Dark Gray
          const endColor = { r: 220, g: 53, b: 69 }; // Red

          window.addEventListener("scroll", async (e) => {
               const scrollvalue = await window.scrollY;

               const scrollPercentage = (await window.scrollY) / (document.body.scrollHeight - window.innerHeight);

               const currentColor = {
                    r: Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage),
                    g: Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage),
                    b: Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage),
               };

               tracer.style.height = `${scrollvalue}px`;
               tracer.style.background = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;

               let widthDimension = window.innerWidth;
               console.log("scrollY: ", scrollvalue);

               if (scrollvalue >= 2300 || (widthDimension <= 1300 && scrollvalue >= 2000)) {
                    glow.classList.add("glow-active");
               } else {
                    glow.classList.remove("glow-active");
               }
          });
     };

     const handlePageJump = (url) => {
          window.location.href = url;
     };

     useEffect(() => {
          scrollWindowFunc();
          fetchProj();

          return () => {
               window.removeEventListener("scroll", scrollWindowFunc);
          };
     }, []);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [location]);

     const responsive = {
          largerDesktop: {
               breakpoint: {
                    max: 3000,
                    min: 1600,
               },
               items: 2.5,
               partialVisibilityGutter: 40,
          },
          desktop: {
               breakpoint: {
                    max: 1600,
                    min: 800,
               },
               items: 2,
               partialVisibilityGutter: 40,
          },
          mobile: {
               breakpoint: {
                    max: 464,
                    min: 0,
               },
               items: 1,
               partialVisibilityGutter: 30,
          },
          tablet: {
               breakpoint: {
                    max: 800,
                    min: 464,
               },
               items: 1.5,
               partialVisibilityGutter: 30,
          },
     };

     const renderProj = (stack) => {
          return (
               <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    responsive={responsive}
               >
                    {stack.map((item) => (
                         <Card className="carousel-works-item" key={item.title}>
                              <Card.Img variant="top" src={item.imageString} />
                              <Card.Body>
                                   <Card.Title>{item.title}</Card.Title>
                                   <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                                   <Card.Text>{item.description}</Card.Text>
                                   <Button className="works-card-btn">
                                        code <LuCode2 className="ms-1" />
                                   </Button>
                                   <Button onClick={(e) => handlePageJump(item.link)} className="works-card-btn">
                                        live demo
                                        <GrView className="ms-2" />
                                   </Button>
                              </Card.Body>
                         </Card>
                    ))}
               </Carousel>
          );
     };

     return (
          <Container fluid className="works p-0">
               <div className="carousel-container">
                    {carouselText.map((item, index) => (
                         <h1 id={`carousel-item${index}`} key={index}>{`${item}`}</h1>
                    ))}
               </div>

               <div className="content-container">
                    <div className="tracer-container">
                         <div className="tracer">
                              <div className="glow"></div>
                         </div>
                    </div>
                    <div className="works-container">
                         <h1>FULL STACK</h1>
                         {renderProj(full)}

                         <h1>FRONT END</h1>
                         {renderProj(front)}

                         <h1>BACK END</h1>
                         {renderProj(back)}
                    </div>
               </div>
               <Footer />
          </Container>
     );
}

export default Works;
