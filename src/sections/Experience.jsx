import React from "react";

import { useEffect, useRef, useState } from "react";
import "./Experience.css";
import experiencedata from "./experiencedata.js"



export default function Experience() {
  const [active, setActive] = useState(0);
  const timelineRef = useRef(null);
  const knobRef = useRef(null);

  useEffect(() => {
    const knob = knobRef.current;
    const timeline = timelineRef.current;
    let dragging = false;

    const step = timeline.offsetHeight / (experiencedata.length - 1);

    const snap = (index) => {
      knob.style.top = `${index * step}px`;
    };

    const start = () => (dragging = true);
    const end = () => {
      dragging = false;
      snap(active);
    };

    const move = (e) => {
      if (!dragging) return;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      const rect = timeline.getBoundingClientRect();
      let pos = y - rect.top;
      pos = Math.max(0, Math.min(pos, rect.height));
      const index = Math.round((pos / rect.height) * (experiencedata.length - 1));
      setActive(index);
    };

    snap(active);

    knob.addEventListener("mousedown", start);
    knob.addEventListener("touchstart", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, [active]);

  return (
    <section className="experience-roadmap" id="experience">
      <h2 className="roadmap-title">Experience</h2>

      <div
        className="exp-timeline"
        ref={timelineRef}
        style={{ height: `${experiencedata.length * 140}px` }}
      >
        <div className="experience-knob" ref={knobRef} />

        {experiencedata.map((item, index) => {
          const side = index % 2 === 0 ? "right" : "left";
          return (
            <div
              key={item.year}
              className={`exp-row ${side}`}
              style={{
                top: `${(index / (experiencedata.length - 1)) * 100}%`,
              }}
            >
              <div className="exp-year">{item.year}</div>

              {active === index && (
                <div className="exp-card">
                  <h3>{item.role}</h3>
                  <p className="desc">
                    {item.place} • {item.duration}
                  </p>

                  <div className="skills">
                    {item.details.map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
