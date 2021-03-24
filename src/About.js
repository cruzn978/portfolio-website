import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"
import {AboutText} from "./AboutText"

const About = () => {
  return (
    <div>
      <Container fluid id="body">
        <Container lg>
          <Row>
            <Col>
              <motion.h1
                className="title"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, stiffness: 2 }}
              >
                About
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
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
          <AboutText/>
        <div className="spacer"/>
        <div className="spacer"/>
      </Container>
    </div>
  );
};

export default About;
