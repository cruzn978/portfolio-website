import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion"
import { NavLinks } from "./NavLinks"

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
            <Navbar.Brand href="#/">nc</Navbar.Brand>
          </motion.p>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
};
