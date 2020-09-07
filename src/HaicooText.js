import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 350,
    properties: [
      {
        startValue: -300,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: 200,
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


const HaicooText = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <h2 className="project-name">Haicoo</h2>
          <hr />
          <p>
            A Progressive Web Application that uses a pretrained TensorFlow
            Model (MobileNet) for image classification and a word-finding query
            engine to create a haiku based on a user provided photo.
          </p>
        </Plx>
      </Col>
    </React.Fragment>
  );
};

export default HaicooText;
