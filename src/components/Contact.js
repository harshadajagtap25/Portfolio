import React from "react";
import { Col, Container } from "react-bootstrap";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

function Contact() {
  return (
    <Container className="contact-container" fluid mt={"100px"} border={"1px solid white"}>
      <Col  md={12} className="home-about-social">
        <h1>Connect With Me </h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>Contact : +91 7517054621</li>
          <li>Email : harshadajagtap199725@gmail</li>
        </ul>
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
              href="mailto:harshadajagtap199725@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillMail />
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
    </Container>
  );
}

export default Contact;
