import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styling/error.scss";

function error() {
     return (
          <Container className="error-container">
               <div className="error-wrapper border">
                    <h1>404 Not found</h1>
                    <p>Error: Page not found | error loading page</p>
                    <Button id="back-home-btn" as={Link} to={"/"}>
                         Home
                    </Button>
               </div>
          </Container>
     );
}

export default error;
