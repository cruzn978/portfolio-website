import React from "react";
import Nav from "react-bootstrap/Nav";
import { motion } from "framer-motion";

const links = ['About', 'Projects', 'Extras']
export const NavLinks = () => {
  return (
    <React.Fragment>
      {links.map((linkName) => (
      <motion.p
        key={linkName}
        whileHover={{
          scale: 1.05,
          color: "(18, 9, 59, 0.89);",
        }}
      >
        <Nav.Link href={`#/${linkName}`}>{linkName}</Nav.Link>
      </motion.p>
      ))}
    </React.Fragment>
  );
};
