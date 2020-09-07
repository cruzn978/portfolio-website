import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 500,
    properties: [
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


const PlantTitle = () => {
  return (
    <React.Fragment>
      <Col lg>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <h3>Plants</h3>
        </Plx>
      </Col>
    </React.Fragment>
  );
};

export default PlantTitle;
