import React from "react";

import "./Education.css";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: <School />,
    title: "High School",
    institute: "Ramavilasam Vocational High School",
    year: "2016 – 2018",
    desc: "",
  },
  {
    icon: <BookOpen />,
    title: "Higher Secondary",
    institute: "Government Higher Secondary School",
    year: "2019 – 2021",
    desc: "",
  },
  {
    icon: <GraduationCap />,
    title: "B.Tech – Computer Science",
    institute: "KTU",
    year: "2021 – 2025",
    desc: "",
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>

      <div className="education-wrapper">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-icon">{edu.icon}</div>

            <div className="edu-content">
              <h3>{edu.title}</h3>
              <span className="edu-institute">{edu.institute}</span>
              <span className="edu-year">{edu.year}</span>
              <p>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
