import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./navbar.css";

import {  FiX } from "react-icons/fi";


const MobileMenu = ({ open, close }) => {
  return (
    <div className={`mobile-overlay ${open ? "show" : ""}`} onClick={close}>
      <div className="mobile-box"onClick={(e) => e.stopPropagation()}>
        <div className="mobile-header">
         {/* <span className="logo-signature">AC</span> */}
          <span className="close-btn" onClick={close} ><FiX/> </span>
        </div>

        <ul>
          
          <li><a onClick={close} href="#">Home</a></li>
            <li><a onClick={close} href="#about">About me</a></li>
            <li><a onClick={close} href="#skills">My Skills</a></li>
            <li><a onClick={close} href="#projects">Projects</a></li>
            <li><a onClick={close} href="#certificates">Certificates</a></li>
          <li><a onClick={close} href="#contact">Contact</a></li>
        </ul>

        
      </div>
    </div>
  );
};

export default MobileMenu;
