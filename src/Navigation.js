import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion"


export const Navigation = () => {
  return (
    <header>
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
          <motion.p
            whileHover={{
              scale: 1.1,
              color: "(18, 9, 59, 0.89);",
            }}
          >
            <Navbar.Brand href="/">nc</Navbar.Brand>
          </motion.p>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <motion.p
                whileHover={{
                  scale: 1.1,
                  color: "(18, 9, 59, 0.89);",
                }}
              >
                <Nav.Link href="#/about">About</Nav.Link>
              </motion.p>
              <motion.p
                whileHover={{
                  scale: 1.1,
                  color: "(18, 9, 59, 0.89);",
                }}
              >
                <Nav.Link href="#/projects">Projects</Nav.Link>
              </motion.p>
              <motion.p
                whileHover={{
                  scale: 1.1,
                  color: "(18, 9, 59, 0.89);",
                }}
              >
                <Nav.Link href="#/extras">Extras</Nav.Link>
              </motion.p>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};
