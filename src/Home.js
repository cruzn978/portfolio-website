import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div>
      <Container fluid id="body">
        <Container fluid="lg">
        <Row id="title">
          <Col>
            <motion.h2
              initial={{x: 50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ duration: 1, stiffness: 2 }}>
                Nichole
                </motion.h2>
            <motion.h1
              initial={{x: -50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ delay: 0.5, duration: 1, stiffness: 2 }}>
              Cruzalegui
            </motion.h1>
            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ delay: 1, duration: 1.5}}>
              software engineer
              </motion.p>
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
