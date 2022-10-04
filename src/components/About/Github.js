import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Col } from "react-bootstrap";

import { Row } from "react-bootstrap";

function Github() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Git <strong className="purple">Stats</strong>
        </h1>
        <Col align="center">
          <img
            style={{ width: "45%" }}
            alt="Harshada Jagtap's streak"
            src="https://streak-stats.demolab.com?user=harshadajagtap25&theme=material-palenight&hide_border=true"
          />

          <img
            style={{ width: "45%" }}
            alt="Harshada Jagtap's Top Languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshadajagtap25&langs_count=8&count_private=true&layout=compact&theme=material-palenight&hide_border=true&bg_color=#c084f5"
          />
        </Col>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <div style={{ width: "90%" }}>
          <GitHubCalendar
            username="harshadajagtap25"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </Row>
      <br />
    </Container>
  );
}

export default Github;
