import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8", fontSize: "1.1rem" }}>
            As a&nbsp;
            <span className="purple" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
             Computer Science graduate
            </span>, 
            I bring a strong foundation in coding, problem-solving, and software development. My journey in technology has been fueled by a passion for innovation and creativity, leading me to specialize in 
            <span className="purple"> Front-End Development</span>, 
            <span className="purple"> UI/UX Design</span>, and 
            <span className="purple"> Graphic Design</span>.
            <br />
            <br />
            I excel at crafting <span className="purple">responsive</span>, 
            <span className="purple"> visually appealing</span>, and 
            <span className="purple"> user-centric</span> digital experiences. By blending design principles with technical expertise, I aim to deliver interfaces that are not only functional but also engaging and intuitive.
            <br />
            <br />
            My work reflects a commitment to continuous learning and staying ahead of emerging trends in the tech and design world. Whether it’s exploring new tools, experimenting with design ideas, or optimizing user experiences, I’m always looking to push the boundaries of creativity.
          </p>
          <hr style={{ border: "1px solid rgb(155 126 172)", margin: "2rem 0" }} />
          <div style={{ paddingLeft: "1.5rem" }}>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "2rem", color: "rgb(155 126 172)" }}>
              Beyond work, here’s what keeps me inspired:
            </p>
            <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "1rem" }}>
              <li className="about-activity" style={{ marginBottom: "0.8rem" }}>
                <ImPointRight style={{ color: "rgb(155 126 172)", marginRight: "0.5rem" }} />
                <span>Content creation and social media management</span>
              </li>
              <li className="about-activity" style={{ marginBottom: "0.8rem" }}>
                <ImPointRight style={{ color: "rgb(155 126 172)", marginRight: "0.5rem" }} />
                <span>Video editing and crafting engaging visual content</span>
              </li>
              <li className="about-activity" style={{ marginBottom: "0.8rem" }}>
                <ImPointRight style={{ color: "rgb(155 126 172)", marginRight: "0.5rem" }} />
                <span>Exploring design trends and experimenting with creative tools</span>
              </li>
              <li className="about-activity">
                <ImPointRight style={{ color: "rgb(155 126 172)", marginRight: "0.5rem" }} />
                <span>Traveling and capturing inspiring moments through photography</span>
              </li>
            </ul>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
