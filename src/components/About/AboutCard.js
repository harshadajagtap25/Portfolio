import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone. I am <span className="purple">Harshada Jagtap </span>
            <span className="purple"> Maharashtra, India</span>. I have pursued
            computer engineering. I was always excited about building a career
            in coding, so I always tried to learn programming languages. During
            my journey at Masai School, I worked through 1000+ hours on the
            Bootcamp structure, learning various programming languages and
            creating different projects.
            <br />
            <br />
            Apart from coding, my leisure interests include 
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
