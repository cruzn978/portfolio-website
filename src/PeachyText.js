import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 300,
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
          <h2 className="project-name">Peachy Plants</h2>
          <hr />
          <p>
            An e-commerce site that provides a seamless shopping experience.
          </p>
          <p>Frontend: React, Redux</p>
          <p>Backend: Node, Express, Sequelize</p>
        </Plx>
      </Col>
    </React.Fragment>
  );
};

export default HaicooText;
