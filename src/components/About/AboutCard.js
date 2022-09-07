import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshada Jagtap </span>
            from <span className="purple"> Maharashtra, India.</span> I'm a
            computer Engineer. I was always excited to build a career in coding,
            I try to learn programming languages. Worked through 1000+ hours of
            Bootcamp structure learning various programming languages.
            <br />
            <br />
            Apart from coding, my leisure interests include !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jewelry Making
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Mandala
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
