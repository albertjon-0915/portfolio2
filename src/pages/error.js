import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styling/error.scss";

function error() {
     return (
          <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
               <div
                    className="border d-flex justify-content-center align-items-center flex-column"
                    style={{ height: "50%", width: "50%" }}
               >
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
