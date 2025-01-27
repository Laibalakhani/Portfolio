import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillBehanceCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [activeBox, setActiveBox] = useState("");

  const descriptions = {
    develop: "Started building websites with JavaScript, React, and mobile applications using React Native, TypeScript, and a bit of magic!",
    design: "I started designing as my hobby, but it slowly crept into my career - now it's a part of me!",
    management: "Started managing social media platforms and creating content, ensuring impactful and creative results.",
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* WHAT I DO Section */}
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h1 className="what-i-do-heading">
              WHAT<br /> <span className="purple">I DO</span>
            </h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="what-i-do-right d-flex justify-content-center flex-wrap gap-4">
            {["develop", "design", "management"].map((box) => (
              <div
                className={`home-box ${
                  activeBox === box ? "active-box" : ""
                }`}
                onMouseEnter={() => setActiveBox(box)}
                onMouseLeave={() => setActiveBox("")}
                key={box}
              >
                <h2 className="box-title">{box.toUpperCase()}</h2>
                <p
                  className={`box-description ${
                    activeBox === box ? "show-description" : ""
                  }`}
                >
                  {descriptions[box]}
                </p>
              </div>
            ))}
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row className="mt-5">
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LaibaLakhani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/laiba-lakhani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/laibalakhani1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
