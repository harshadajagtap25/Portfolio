import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pepperfry from "../../Assets/Projects/PepperfryHeader.png";
import orbitz from "../../Assets/Projects/OrbitzHeader.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pepperfry}
              isBlog={false}
              title="Pepper Fry Clone"
              description="A web application to book your trips where you can also rent a car."
              link="https://github.com/harshadajagtap25/Pepper-Fry-Clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orbitz}
              isBlog={false}
              title="Orbitz Clone"
              description="A web application to buy furniture and home decor."
              link="https://github.com/harshadajagtap25/Orbitz"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
