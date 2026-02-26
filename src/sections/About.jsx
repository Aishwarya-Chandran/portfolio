import React from "react";

import "./About.css";
import AboutI from "../assets/AboutI.jpeg";
import { Code2, GraduationCap, Briefcase } from "lucide-react";



export default function About() {
  return (
    <section className="about" id="about">
      {/* HEADER */}
      <div className="about-header appear">
        <span>Introduction</span>
        <h2>About Me</h2>
      </div>

      {/* MAIN LAYOUT */}
      <div className="about-grid">
        {/* IMAGE */}
        <div className="about-image appear">
          <img src={AboutI} alt="Profile" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
         <div className="about-text appear">
          <p>
            I’m a developer with a B.Tech in Computer Science (2025) from KITS, focused on building practical and meaningful software solutions. 
            I’m currently training in Python Full Stack development and strengthening my skills through self-driven projects.</p>
          <p>
              I have foundational knowledge in Machine Learning, AI, and Data Science, with an understanding of statistics, data analysis, and data-driven decision-making. 
            I enjoy working with datasets, identifying patterns, and applying logical reasoning to extract insights.
          </p>
          <p>
            I approach projects by breaking problems into clear, structured steps and improving solutions through hands-on practice.
            I strongly believe in learning by doing and continuously upskill through self-learning using O’Reilly technical books.
          </p>
          <p>
            Along with technical skills, I bring strong problem-solving ability, adaptability, clear communication, and a growth mindset.
          </p>
          
          </div>

          {/* CARDS */}
        {/*}  <div className="about-cards">
            <div className="about-card appear">
              <Code2 />
              <h4>Languages</h4>
              <p>HTML, CSS, JS, Python</p>
            </div>

            <div className="about-card appear">
              <GraduationCap />
              <h4>Education</h4>
              <p>B.Tech CSE</p>
            </div>

            <div className="about-card appear">
              <Briefcase />
              <h4>Projects</h4>
              <p>9+ Completed</p>
            </div>
          </div>   */}

          {/* TOOLS */}
          {/*<div className="tools">
            <h3 className="appear">Tools I Use</h3>

            <div className="tools-grid">
              {tools.map((tool, i) => (
                <div className="tool-card appear" key={i}>
                  <img src={`/tools/${tool}.svg`} alt={tool} />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
