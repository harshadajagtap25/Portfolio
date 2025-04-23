import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import experienceImg from "../../Assets/experience.png";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "start",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Worked as a <br />
              <strong className="purple">
                Software Development Engineer
              </strong>{" "}
              <br />
              at <strong className="purple">YourDOST</strong>.
            </h1>
            <div>from Dec 2022 to Feb 2025</div>
            <br /> <br />
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    At YourDOST, I focused on building and enhancing
                    user-centric web and mobile experiences to support mental
                    health and well-being. My work spanned across Angular,
                    React, and Flutter, where I:
                    <ul>
                      <li>
                        Revamped core platform modules like the Home and Experts
                        pages, improving navigation and user engagement by 25%.
                      </li>
                      <li>
                        Developed and maintained real-time chat features for
                        counselor-client interaction using Firebase.
                      </li>
                      <li>
                        Integrated RESTful APIs and implemented comprehensive
                        Amplitude tracking to improve onboarding and retention
                        (from 60% to 75%).
                      </li>
                      <li>
                        Optimized performance and responsiveness across
                        platforms, contributing to faster load times and
                        improved UX.
                      </li>
                      <li>
                        Collaborated closely with designers and backend teams to
                        deliver scalable, accessible, and impactful digital
                        experiences.
                      </li>
                    </ul>
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={experienceImg}
              alt="experienceImg"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
