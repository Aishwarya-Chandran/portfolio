import React from "react";

import "./Skills.css";
import { Code, Server, Brain, Wrench } from "lucide-react";

const roadmap = [
  {
    title: "Frontend",
    icon: Code,
    description: "Building modern, responsive user interfaces",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    title: "Backend",
    icon: Server,
    description: "Designing scalable server-side applications",
    skills: ["Django","FastAPI", "REST API"],
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    title: "ML & Data",
    icon: Brain,
    description: "Working with data and intelligent systems",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning","Deep Learning" ,"SQL"],
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Development workflow and deployment tools",
    skills: ["Git", "GitHub", "Docker", "Vercel","JupyterLab" ,"VS Code"],
    gradient: "linear-gradient(135deg, #f97316, #facc15)",
  },
];

export default function MySkills() {
  return (
    <section className="roadmap" id="skills">
      <h2 className="roadmap-title">My Skills </h2>

      <div className="timeline">
        {roadmap.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`timeline-row ${index % 2 === 0 ? "left" : "right"} scroll`}
              style={{ "--accent": item.gradient }}
            >
              {/* ICON */}
              <div className="timeline-icon">
                <Icon size={20} />
              </div>

              {/* CARD */}
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p className="desc">{item.description}</p>

                <div className="skills">
                  {item.skills.map((skill, i) => (
                    <span key={i} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
