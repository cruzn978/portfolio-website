import React from "react";
import Plx from "react-plx";
import { motion } from "framer-motion";

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
      {
        startValue: 0,
        endValue: 10,
        property: "translateX",
      },
    ],
  },

  {
    start: "85%",
    end: "100%",
    properties: [
      {
        startValue: 10,
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

function Twitter() {
  return (
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>

    </Plx>
  );
}

export default Twitter;
