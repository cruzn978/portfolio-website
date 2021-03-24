import React from "react";
import Col from "react-bootstrap/Col";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 100,
    properties: [
      {
        startValue: -15,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: 15,
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
