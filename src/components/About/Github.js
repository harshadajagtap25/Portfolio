import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Col } from "react-bootstrap";

import { Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from 'react-icons/fa';
function Github() {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="harshadajagtap25"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
    <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/harshadajagtap25"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/harshada-jagtap-88334a192/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/_harshu.jagtap/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://medium.com/@harshadajagtap199725"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaMedium />
          </a>
        </li>
      </ul>
    </Col>
  </Row>
  </Container>
    
  );
}

export default Github;
