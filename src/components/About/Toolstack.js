import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiNginx } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiHeroku,
  SiNginx,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostMan">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NGINX">
        <SiNginx />
      </Col>
    </Row>
  );
}

export default Toolstack;
