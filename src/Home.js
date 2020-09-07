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
          {/* <Plx className="MyAwesomeParallax" parallaxData={parallaxData}> */}
          <Col>
            <motion.h2
              initial={{x: 50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ duration: 1.5, stiffness: 0.1 }}>
                Nichole
                </motion.h2>
            <motion.h1
              initial={{x: -50, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ delay: 0.7, duration: 1.5, stiffness: 0.1 }}>
              Cruzalegui
            </motion.h1>
            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ delay: 2.5, duration: 1.5}}>
              software engineer
              </motion.p>
          </Col>
              {/* </Plx> */}
        </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Home;
