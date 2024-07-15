import React from "react";
import { Container } from "react-bootstrap";
import "../App.scss";
import Hero from "../components/hero";
import About from "../components/body/about";
import Projects from "../components/body/projects";
import TechAndTools from "../components/body/tech-tools";
import Services from "../components/body/services";

function HeroPage() {
     return (
          <>
               <Hero />
               <About />
               <Services />
               <TechAndTools />
               <Projects />
          </>
     );
}

export default HeroPage;
