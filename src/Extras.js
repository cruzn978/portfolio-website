import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"
import Plx from "react-plx";
import MusicTitle from "/MusicTitle"
import PlantTitle from "/PlantTitle"
import MatchaTitle from "/MatchaTitle"

const parallaxData = [
  {
    start: 'self',
    duration: 400,
    properties: [
      {
        startValue: 200,
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

const Extras = () => {

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
                Extras
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                musician, plant mama, matcha lover
              </motion.p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container >
        <div className="spacer"/>
        <div className="spacer"/>
          <Row>
            <MusicTitle />
            <Col md={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
              I have studied music since I was thirteen years old. I graduated from The New School for Jazz and Contemporary Music. My passion lies in self discovery and emotional catharsis through composition. I feel that when I’m alone with my guitar, I can truly let all the stress go and work through my emotions when I compose. I’ve composed thirteen full songs and have released one with my band Broken Flight. We’ve been performing live for about four years now and we’re in the middle of producing a music video. I’ve also played freelance side gigs on jazz, pop, mexican cumbia/salsa and singer-songwriter gigs. Currently, I’m the newest member of the Iranian band.
              </p>
              </Plx>
            </Col>
          </Row>
          <div className="spacer"/>
          <Row>
            <MatchaTitle />
            <Col lg>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
              I study the Japanese Tea Ceremony with a Tea Master from the Tea School Dai Nihon Chado Gakkai. The Japanese Tea Ceremony, also known as the Way of Tea, is a formal, ritualistic ceremony that promotes the principles of harmony, respect, purity and tranquility through the preparation of matcha tea. I first fell in love with the taste of matcha when I discovered there were so many interesting and distinct differences among a variety of brands. My favorite matcha is definitely Yamenohana, which means “flower of Yame”. (Yame is a prefecture of Japan.) It is a wonderfully robust tea that has a full-bodied flavor similar to that of dark chocolate. Have I mentioned that I love matcha? I love matcha!
              </p>
              </Plx>
            </Col>
          </Row>
          <div className="spacer"/>
          <Row>
            <PlantTitle />
            <Col md={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
              I’m what they call a “plant mama.” I fall in love with plants and I just love taking care of them. The best part about plants is definitely when they give you babies or flowers! I feel my calmest when I’m at home surrounded by my green, purple and pink friends. My favorite part of the day is checking up on all of them to see if they need any water. They give me a deep, quiet joy when I observe them.
              </p>
              </Plx>
            </Col>
            {/* <Col sm={3}>circle image</Col> */}
          </Row>
          <div className="spacer"/>
          <div className="spacer"/>
      </Container>
    </div>
  );
};


export default Extras
