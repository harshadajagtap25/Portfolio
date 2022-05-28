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
              isBlog={true}
              title="Pepper Fry Clone"
              description="A web application to book your trips where you can also rent a car."
              gitlink="https://github.com/harshadajagtap25/Pepper-Fry-Clone"
              demolink="https://rainbow-crostata-a77d7d.netlify.app/"            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orbitz}
              isBlog={true}
              title="Orbitz Clone"
              description="A web application to buy furniture and home decor."
              gitlink="https://github.com/harshadajagtap25/Orbitz"
              demolink="https://elegant-agnesi-f6525b.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
