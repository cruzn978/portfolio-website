import React from "react";
import Github from "./Github.js"
import Linkedin from "./Linkedin";
import Email from "./Email.js";

function Footer() {
  return (
    <footer>
        <div id="footer">
          <Github />
          <Linkedin />
          <Email />
        </div>
    </footer>
  );
}

export default Footer;
