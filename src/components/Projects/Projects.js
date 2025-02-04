import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Zoom } from "react-awesome-reveal";
import Slider from "react-slick";

// Import images
import azaadi from "../../Assets/Projects/azaadi.jpg";
import eid from "../../Assets/Projects/eid.jpg";
import drama from "../../Assets/Projects/drama.jpg";
import amtf from "../../Assets/Projects/amtf.jpg";
import blood from "../../Assets/Projects/blood.jpg";
import ke from "../../Assets/Projects/ke.jpg";
import kashmir from "../../Assets/Projects/kshmir.jpg";
import resq from "../../Assets/Projects/resq.jpg";
import iftar from "../../Assets/Projects/iftar.jpg";
import labour from "../../Assets/Projects/labour.jpg";
import fish from "../../Assets/Projects/fish.jpg";
import caa from "../../Assets/Projects/caa.png";
import drivo from "../../Assets/Projects/drivo.png";
import usmanis from "../../Assets/Projects/usmanis.png";
import csp from "../../Assets/Projects/csp.png";
import pdp from "../../Assets/Projects/pdp.png";

// Social Media Posts: Auto-sliding settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 3000,
  pauseOnHover: false, 
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

function Projects() {
  return (
    <Container fluid style={{ backgroundColor: "#121212", padding: "60px 0" }}>
      <Particle />
      <Container>
        {/* Page Heading */}
        <br />
        <h1 style={{ textAlign: "center", color: "#fff", fontSize: "40px", fontWeight: "bold", marginBottom: "50px" }}>
          My Recent <strong style={{ color: "#c770f0" }}>Work</strong>
        </h1>

        {/* Social Media Posts Section */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ textAlign: "center", color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            📢 Social Media Posts
          </h2>
          <Slider {...sliderSettings}>
            {[eid, drama, azaadi, resq, amtf, ke, kashmir, blood, iftar, labour, fish].map((img, index) => (
              <div key={index} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                <ProjectCard imgPath={img} isBlog={false} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile App Designs Section */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ textAlign: "center", color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            📱 Mobile App Designs
          </h2>
          <Zoom cascade damping={0.2} duration={800}>
            <Row 
              style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "30px", /* Added spacing to prevent overlap */
                flexWrap: "wrap", /* Ensures proper alignment on small screens */
                margin: "0 auto",
                maxWidth: "1000px" /* Wider space to fit both images */
              }}
            >
              {[caa, drivo].map((img, index) => (
                <Col 
                  key={index} 
                  md={6} /* Ensures side-by-side alignment */
                  sm={12} /* On smaller screens, they stack properly */
                  style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    padding: "10px",
                    position: "relative",
                    transition: "transform 0.3s ease-in-out"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} /* Slight zoom on hover */
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} /* Reset on hover out */
                >
                  <ProjectCard 
                    imgPath={img} 
                    isBlog={false} 
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} 
                  />
                </Col>
              ))}
            </Row>
          </Zoom>
        </div>

        {/* Social Media Management Section */}
        <br />
        <br />
        <br />
        <div>
          <h2 style={{ textAlign: "center", color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            📊 Social Media Management
          </h2>
          <br />
          <Row style={{ display: "flex", justifyContent: "center" }}>
            {[usmanis, csp, pdp].map((img, index) => (
              <Col 
                key={index} 
                md={4} 
                style={{ display: "flex", justifyContent: "center", position: "relative", transition: "transform 0.3s ease-in-out" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <ProjectCard imgPath={img} isBlog={false} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
