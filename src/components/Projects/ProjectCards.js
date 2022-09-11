import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { Col, Container, Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        height="270px"
        width="350px"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Title>Tech Used</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.tech}
        </Card.Text>
        <Col>
          <Button
            className="project_buttons"
            variant="primary"
            href={props.gitlink}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp;
            {"Project"}
          </Button>
          <Button
            className="project_buttons"
            variant="primary"
            href={props.demolink}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp;
            {"Live"}
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
