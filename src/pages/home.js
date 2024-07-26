import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import "../App.scss";
import Hero from "../components/hero";
import About from "../components/body/about";
import Projects from "../components/body/projects";
import TechAndTools from "../components/body/tech-tools";
import Services from "../components/body/services";
import Footer from "../components/footer";
import Contact from "../components/body/contact";

function HeroPage() {
     const [visible, setVisible] = useState(false);

     const onEnterViewport = () => {
          setVisible(true);
     };

     const onExitViewport = () => {
          setVisible(false);
     };

     return (
          <>
               <Hero />
               <About />
               <Services />
               <Waypoint onEnter={onEnterViewport} onLeave={onExitViewport} bottomOffset={"10%"} topOffset={"15%"}>
                    <Container fluid className={`home ${visible ? "bg-in-out" : ""}`}>
                         <TechAndTools />
                         <Projects />
                    </Container>
               </Waypoint>
               <Contact />
               <Footer />
          </>
     );
}

export default HeroPage;
