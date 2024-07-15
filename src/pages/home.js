import React from "react";
import { Container } from "react-bootstrap";
import "../App.scss";
import Hero from "../components/hero";
import About from "../components/body/about";
import Projects from "../components/body/projects";
import TechAndTools from "../components/body/tech-tools";
import Services from "../components/body/services";
import Footer from "../components/footer";
import Contact from "../components/body/contact";

function HeroPage() {
     return (
          <>
               <Hero />
               <About />
               <Services />
               <TechAndTools />
               <Projects />
               <Contact />
               <Footer />
          </>
     );
}

export default HeroPage;
