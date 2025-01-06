import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiAngularSimple,
  DiHtml5,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Angular">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <DiGithubBadge />
      </Col>
    </Row>
  );
}

export default Techstack;
