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
            from <span className="purple"> Maharashtra, India.</span>
             {" "} I am a computer Engineer pursed engineering from SPPU, Pune, Maharashtra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafting
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
