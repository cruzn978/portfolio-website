import React from "react";
import Plx from "react-plx";
import musicPic from "./img/Alaska1.jpg"

const parallaxData = [
  {
    start: "self",
    duration: 500,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
      {
        startValue: 10,
        endValue: -160,
        property: "translateY",
      },
    ],
  },
];

function Music() {
  return (
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
      <img src={musicPic} alt="gig"/>
    </Plx>
  );
}

export default Music;
