import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi everyone. I am <span className="purple">Harshada Jagtap </span>
            <span className="purple"> Maharashtra, India</span>. I have pursued
            computer engineering. I was always excited about building a career
            in coding, so I always tried to learn programming languages. During
            my journey at Masai School, I worked through 1000+ hours on the
            Bootcamp structure, learning various programming languages and
            creating different projects. */}
            Hi everyone! I am <span className="purple">Harshada Jagtap</span>{" "}
            from Maharashtra, India. I hold a degree in Computer Engineering and
            have over two years of professional experience as a Software
            Development Engineer. My passion for coding has driven me to
            specialize in front-end and mobile development, with expertise in
            frameworks like{" "}
            <span className="purple">Angular, React, and Flutter</span>.
            <br />
            <br />
            At YourDOST, I have contributed to core projects, including
            enhancing user-facing platforms and developing mobile applications,
            which empower individuals to take control of their mental health. My
            journey includes building impactful solutions, collaborating with
            cross-functional teams, and continuously learning to stay at the
            forefront of technology.
            <br />
            <br />
            I look forward to contributing further to innovative software
            solutions.
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
