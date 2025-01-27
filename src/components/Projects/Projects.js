import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import learning from "../../Assets/Projects/learning.png";
import video from "../../Assets/Projects/video.png";
import puzzle from "../../Assets/Projects/puzzle.jpg";
import caa from "../../Assets/Projects/caa.png";
import drivo from "../../Assets/Projects/drivo.png";
import foodorderingsystem from "../../Assets/Projects/food.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caa}
              isBlog={false}
              title="Internship Management System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drivo}
              isBlog={false}
              title="Ride Hailing App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodorderingsystem}
              isBlog={false}
              title="Food Ordering Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learning}
              isBlog={false}
              title="Learning Management System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="8-Puzzle Solver using AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video Compression System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
