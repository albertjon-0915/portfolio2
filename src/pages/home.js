import React from "react";
import { Container } from "react-bootstrap";
import "../App.scss";
import Hero from "../components/hero";
import About from "../components/body/about";
import TechAndTools from "../components/body/projects";

function HeroPage() {
     return (
          <>
               <Hero />
               <About />
               <TechAndTools />
          </>
     );
}

export default HeroPage;
