import React from "react";
import Col from "react-bootstrap/Col";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 500,
    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: "translateY",
      },

      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];


const MatchaTitle = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <h3>Matcha</h3>
        </Plx>
      </Col>
    </React.Fragment>
  );
};

export default MatchaTitle;
