import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Full Stack Web developer with ability to learn and collaborate in
              rapidly changing environments and compositions.
              <br />
              Developed <b className="purple"> 10+</b> websites from scratch at
              Masai School using{" "}
              <b className="purple">
                Javascript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3
              </b>{" "}
              .
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img  src={myImg} className="img-fluid avatarImg" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
