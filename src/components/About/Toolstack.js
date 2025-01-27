import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWebstorm,
  SiPostman,
  SiVercel,
  SiFigma,
  SiGithub,
  SiJira,
  SiCanva,
} from "react-icons/si";
import photoshopImage from "../../Assets/photoshop.png";
import illustratorImage from "../../Assets/illustrator.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Code Editors */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>

      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Project Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={photoshopImage}
          alt="Photoshop"
          style={{ width: "80px", height: "80px" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={illustratorImage}
          alt="Illustrator"
          style={{ width: "80px", height: "80px" }}
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
