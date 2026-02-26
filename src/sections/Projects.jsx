import React from "react";

import "./Projects.css";

const projectsData = [
  {
    category: "Full Stack Projects",
    items: [
      {
        title: "Crime Prediction System",
        desc: "ML-powered crime analysis & prediction dashboard.",
        image: "/projects/crime.jpg",
        liveLink: "https://your-crime-project-link.com",
      },
      {
        title: "Auth Management App",
        desc: "Secure authentication with role-based access.",
        image: "/projects/auth.jpg",
        liveLink: "https://your-auth-project-link.com",
      },
    ],
  },
  {
    category: "Frontend & UI Projects",
    items: [
      {
        title: "Personal Portfolio",
        desc: "Animated portfolio with theme toggle.",
        image: "/projects/portfolio.jpg",
        liveLink: "https://your-portfolio-link.com",
      },
      {
        title: "Dashboard UI",
        desc: "Modern analytics dashboard.",
        image: "/projects/dashboard.jpg",
        liveLink: "https://your-dashboard-link.com",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Latest Work</h2>
      <p className="projects-subtitle">
        Selected projects crafted with attention to UI, UX, and performance.
      </p>

      {projectsData.map((section, idx) => (
        <div className="project-category" key={idx}>
          <h3 className="category-title">{section.category}</h3>

          <div className="projects-grid">
            {section.items.map((project, i) => (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                style={{ animationDelay: `${i * 0.15}s` }}
                key={i}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>

                  <span className="project-link">
                    View Project <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="view-all-wrapper">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
