import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
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
    </Container>
  );
}

export default Footer;
