import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"
import Plx from "react-plx";
import GH from "/GraceHopper"
import GraceHopper from "./GraceHopper";
import Music from "/Music"

const parallaxData = [
  {
    start: 'self',
    duration: 400,
    properties: [
      {
        startValue: 200,
        endValue: -150,
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

const About = () => {

  return (
    <div>
      <Container fluid id="body">
        <Container lg>
          <Row>
            <Col>
              <motion.h1
                className="title"
                initial={{ x: -250, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, stiffness: 0.1 }}
              >
                About
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                a love story in the making
              </motion.p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container lg>
        <div className="spacer"/>
        <div className="spacer"/>


          <Row>
            <Col lg={4}>
              <Music />
            </Col>
            <Col lg={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
                I created my first website in middle school as a part of my
                first computer science class. At the time, music was my creative
                outlet and passion. I found myself meticulously creating new
                music, organizing practice routines and constantly practicing. I
                decided to pursue music professionally and applied to music
                conservatories for college. I was accepted into the jazz guitar
                program at The New School for Jazz and Contemporary Music and
                graduated with a BA in Fine Arts.
              </p>
              </Plx>
            </Col>
          </Row>
          <div className="spacer"/>
          <Row>
            <Col lg>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
              During my time at college, I was reintroduced to technology through the opportunity to work at an IT computer lab. I began dabbling in web development again and made a portfolio website for my freelance music business. I ultimately ended up buried in YouTube and Lynda videos courses attempting to learn web development on my own. When I started delving into more dynamic web designs, I decided that it was time to take the plunge into a more intensive educational experience and found the Grace Hopper Program at Full Stack Academy.
              </p>
              </Plx>
            </Col>
            {/* <Col lg={3}>circle image</Col> */}
          </Row>
          <div className="spacer"/>
          <Row>
            <Col lg={8}>
            <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
              <p>
              My Grace Hopper experience was absolutely incredible. It was such an honor to both learn from and work alongside such talented women. Since then, I’m working on projects I’ve put on the back burner but with a new perspective. I intend to continue broadening my web development, penetration testing and overall engineering capabilities.
              </p>
              </Plx>
            </Col>
            <Col lg={4}>
              <GraceHopper />
            </Col>
          </Row>
          <div className="spacer"/>
          <div className="spacer"/>
      </Container>
    </div>
  );
};

export default About;
