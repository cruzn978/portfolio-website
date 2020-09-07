import React from "react";
import Container from "react-bootstrap/Container";
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
    duration: 700,
    properties: [
      {
        startValue: 500,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: -200,
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

const Projects = () => {
  return (
    <div>
      <Container fluid id="body">
        <Container fluid="lg">
          <Row>
            <Col>
              <motion.h1
                className="title"
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, stiffness: 0.1 }}
              >
                Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                to feast your eyes on
              </motion.p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <div className="spacer" />
        <div className="spacer" />
        <Row className="justify-content-md-center">
          <Col lg={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
            <a href="https://haicoo.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <motion.img
                className="wide-img"
                src={mediamodifier_image}
                alt="haicoo image"
                whileHover={{ scale: 1.1 }}
                />
                </a>
            </Plx>
          </Col>
          <HaicooText />
        </Row>

        <div className="spacer" />
        <div className="spacer" />

        <Row className="justify-content-md-center">
          <Col lg={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
            <a href="https://peachy-plants.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <motion.img
                className="wide-img"
                src={PeachyPlants}
                alt="peachy plants site image"
                whileHover={{ scale: 1.1 }}
                />
                </a>
            </Plx>
          </Col>
          <PeachyText />
        </Row>
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />

      </Container>
    </div>
  );
};

export default Projects;
