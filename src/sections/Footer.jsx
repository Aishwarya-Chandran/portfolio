import React from "react";

import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left */}
        <p className="footer-text">
          © Aishwarya Chandran — All rights reserved
        </p>

        {/* Right */}
        <div className="footer-icons">
          <a href="https://github.com/Aishwarya-Chandran" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aaishwaryachandran" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:aishwaryachandran4614@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
