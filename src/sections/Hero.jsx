import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import round from "../assets/round.jpeg";
import { HiArrowRight } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  const heroRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="bg-blur-layer">
      <div ref={heroRef} className={`hero-content ${show ? "show" : ""}`}>
        <img src={round}  className="hero-profile" />

        <p className="hero-intro">Hi! I'm Aishwarya Chandran 👋</p>

        <h1 className="hero-title">
          Driven by Curiosity,<br />Powered by Code.
        </h1>

        <p className="hero-subtitle">
          Full-Stack Developer (React, Python)  |  Data Science(Python, R)  |
             & AI/ML Enthusiast 
        </p>

        <div className="hero-buttons">
          <a href="mailto:aishwaryachandran4614@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Aishwarya,%0AI%20saw%20your%20portfolio..." className="btn btn-primary">
            Contact me <HiArrowRight />
          </a>
          <a href="public/assets/Aishwarya_Chandran_Resume.pdf" download className="btn btn-secondary">
            My Resume <FiDownload/>
          </a>
        </div>
      </div>
    </div>
     
    </section>
  );
};

export default Hero;
