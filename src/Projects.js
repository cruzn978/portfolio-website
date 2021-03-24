import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import ProjectSections from "./ProjectSections"


const Projects = () => {
  return (
    <div>
      <Container fluid id="body">
        <Container fluid="lg">
          <Row>
            <Col>
              <motion.h1
                className="title"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, stiffness: 2 }}
              >
                Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                to feast your eyes on
              </motion.p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <ProjectSections/>
        <div className="spacer" />
      </Container>
    </div>
  );
};

export default Projects;
