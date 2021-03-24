import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Plx from "react-plx";
import mediamodifier_image from "./img/mediamodifier_image.png";
import PeachyPlants from "./img/PeachyPlant1.png";
import HaicooText from "./HaicooText"
import PeachyText from "./PeachyText"

const parallaxData = [
  {
    start: "self",
    duration: 400,
    properties: [
      {
        startValue: 15,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: -15,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];
const projects = [
  {
    link: "https://haicoo.herokuapp.com/",
    src: mediamodifier_image,
    alt: "haicoo image",
    text: <HaicooText />
  },
  {
    link: "https://peachy-plants.herokuapp.com/",
    src: PeachyPlants,
    alt: "peachy plants site image",
    text: <PeachyText />
  }
]

const ProjectSections = () => {
  return (
      <>
        <div className="spacer" />
        <div className="spacer" />
        {projects.map((proj) => (
          <Row className="justify-content-md-center">
          <Col lg={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                className="wide-img"
                src={proj.src}
                alt={proj.alt}
                whileHover={{ scale: 1.05 }}
                />
                </a>
            </Plx>
          </Col>
          {proj.text}
        </Row>
        ))}

      </>
  );
};

export default ProjectSections;
