import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
        <div className="logo">AC</div>

        {/* CENTER NAV PILL */}
        
          <ul className="nav-pill">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">My Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">
              Contact me</a></li>
          </ul>
      

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <ThemeToggle />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aishwaryachandran4614@gmail.com&subject=Portfolio%20Inquiry&body=Hello%20Aishwarya,"
          target="_blank" rel="noopener noreferrer" className="contact-btn">Contact Me <HiArrowUpRight /></a>

          <div className="menu-btn" onClick={() => setOpen(true)}><FiMenu/> </div>
        </div>
        </div>
      </nav>

      <MobileMenu open={open} close={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

