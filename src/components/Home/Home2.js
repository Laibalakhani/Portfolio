import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I'm Laiba, a creative Designer and Developer. I love creating beautiful, user-friendly interfaces and bringing ideas to life through code and design.
              <br />
              <br />
              I’m fluent in technologies like
              <i>
                <b className="purple"> JavaScript, HTML, CSS, React.js, and React Native</b>.
              </i>
              <br />
              <br />
              My interests lie in designing intuitive and visually appealing user experiences while building responsive, performant websites. I love blending **UI/UX design** with frontend development to create seamless, interactive web experiences.
              <br />
              <br />
              In addition to my frontend skills, I’m passionate about graphic design and creating modern designs that are both functional and aesthetic. I use tools like **Figma**, **Adobe XD**, and **Photoshop** to craft designs that not only look great but also provide a smooth user experience.
              <br />
              <br />
              I enjoy working on projects that involve both development and design, bringing together the best of both worlds to create something amazing.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
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
