import React from "react";

function Statistics() {
  return (
    <div className="container container-res" style={{ width: "90%" }}>
      <h2>Skills</h2>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>JavaScript</div>
        <div className="progress progress-res " style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: "65%",
              backgroundColor: "#9667c0",
              backgroundColor: "#9667c0",
            }}
          >
            65%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>ReactJs</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "60%", backgroundColor: "#9667c0" }}
          >
            60%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>NodeJs</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "55%", backgroundColor: "#9667c0" }}
          >
            55%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>Communication</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "60%", backgroundColor: "#9667c0" }}
          >
            60%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>HTML</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "45%", backgroundColor: "#9667c0" }}
          >
            45%
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>Responsiveness</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "40%", backgroundColor: "#9667c0" }}
          >
            40%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>Github</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "55%", backgroundColor: "#9667c0" }}
          >
            55%
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>TypeScript</div>
        <div className="progress progress-res" style={{ width: "600px" }}>
          <div
            className="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "25%", backgroundColor: "#9667c0" }}
          >
            25%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
