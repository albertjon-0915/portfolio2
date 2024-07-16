import React from "react";
import "../../styling/tools.scss";
import { Container } from "react-bootstrap";
import { FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaSass, FaBootstrap, FaGitAlt } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";

function TechTools() {
     const icons = [
          <FaJs />,
          <FaHtml5 />,
          <FaCss3Alt />,
          <FaNodeJs />,
          <FaReact />,
          <FaSass />,
          <FaBootstrap />,
          <DiMongodb />,
          <FaGitAlt />,
          <SiPostman />,
     ];

     return (
          <Container fluid className="tools-section">
               <div className="tools-container">
                    {icons.map((item, index) => (
                         <div key={index}>{item}</div>
                    ))}
               </div>
               <ul className="list-unstyled mt-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Mongoose</li>
                    <li>ReactJS</li>
                    <li>Postman</li>
                    <li>Git</li>
               </ul>
          </Container>
     );
}

export default TechTools;
