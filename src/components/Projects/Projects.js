import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pepperfry from "../../Assets/Projects/PepperfryHeader.png";
import orbitz from "../../Assets/Projects/OrbitzHeader.png";
import lumen from "../../Assets/Projects/Lumen5Homepage.png";
import timecamp from "../../Assets/Projects/TimecampHomepage.png";
import clockify from "../../Assets/Projects/ClockifyHomepage.png";
import yd from "../../Assets/Projects/YourDostSC.png";
import weatherApp from "../../Assets/Projects/weather-app-web.png";

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
              imgPath={yd}
              isBlog={false}
              isGit={false}
              title="YourDOST"
              description="Built and optimized front-end and mobile applications, driving usability improvements and feature development for key projects."
              tech="Angular, React, JavaScript, Flutter"
              gitlink=""
              demolink="https://yourdost.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clockify}
              isBlog={true}
              isGit={true}
              title="Clockify Clone"
              description="The most popular free time tracker for teams. 
              Time tracking software used by millions. Clockify is a time tracker and timesheet app 
              that lets you track work hours across projects. Unlimited users, free forever."
              tech="ReactJS, JS6, JavaScript, Chakra UI, CSS3, React-Router-Dom, MongoDB, NodeJs, ExpressJs, "
              gitlink="https://github.com/harshadajagtap25/Clockify-Clone"
              demolink="https://clockify-clone-masai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timecamp}
              isBlog={true}
              isGit={true}
              title="Timecamp Clone"
              description="It is a time tracking software to invoice the employees's 
              work based on an hourly rate, measuring the work effectiveness and project management."
              tech="ReactJS, JS6, JavaScript, Chakra UI, CSS3, React-Router-Dom"
              gitlink="https://github.com/harshadajagtap25/Timecamp-Clone"
              demolink="https://clone-of-timecamp.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lumen}
              isBlog={true}
              isGit={true}
              title="Lumen5 Clone"
              description="A web application to convert blog, text to video. 
              It has powerful A.I. to help you create professional video content in minutes."
              tech="ReactJS, HTML5, JS6, JavaScript, Chakra UI, CSS3"
              gitlink="https://github.com/harshadajagtap25/Lumen5-Clone"
              demolink="https://lumen5clone8888.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pepperfry}
              isBlog={true}
              isGit={true}
              title="Pepper Fry Clone"
              description="A web application to buy furniture and home decor. It has 
              functionalities like logging in, registering, searching for home decor, and placing order for a particular item."
              tech="HTML5, CSS3, JavaScript, JS6, Local Storage"
              gitlink="https://github.com/harshadajagtap25/Pepper-Fry-Clone"
              demolink="https://pepper-fry-clone.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orbitz}
              isBlog={true}
              isGit={true}
              title="Orbitz Clone"
              description="A web application to book your trips where you can also rent a car, choose a mode of travel, and reserve your stay in advance."
              tech="HTML5, CSS3, JavaScript"
              gitlink="https://github.com/harshadajagtap25/Orbitz"
              demolink="https://orbitz-clone-1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              isGit={true}
              title="Weather App"
              description="A simple, responsive weather dashboard built with React.js that fetches real-time weather data from OpenWeather API."
              tech="React, JavaScript, Redux, HTML, CSS"
              gitlink="https://github.com/harshadajagtap25/weather-dashboard"
              demolink="https://weather-dashboard-self-beta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
