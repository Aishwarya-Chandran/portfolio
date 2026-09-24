import React from "react";
import "./Projects.css";

import projectsData from "./projectsData";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Works</h2>

      <p className="projects-subtitle">
        A collection of projects I have built.
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            aria-label={`View ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
            />
          </a>
        ))}
      </div>
    </section>
  );
}