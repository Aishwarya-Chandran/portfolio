import React from "react";

import "./Certificates.css";
import "./certificate.js"
import certificates from "./certificate.js";



const CertificatesSection = () => {
  
  return (
    <section className="certificates-section" id="certificates">
      {/* Header */}
      <div className="certificates-header">
      {/* <span className="certificates-eyebrow">Achievements</span>  */}
        <h2>Certificates</h2>
        <p>
          A collection of my certificates from courses, workshops, hackathons,
          and technical events that reflect my learning journey and skills.
        </p>

        {/* <div className="certificates-pill">
          12+ verified certificates across development, AI/ML, hackathons, and
          problem solving.
        </div>*/}
      </div>

      {/* Cards */}
      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <div className="certificate-card" key={cert.id}>
            {/* Thumbnail */}
            <div className="certificate-thumb">
              <img src={cert.image} alt={cert.title} />
              <a href={cert.link} className="view-btn">View certificate</a>
            </div>

            {/* Content */}
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>

              <div className="certificate-footer">
                <span className="badge">Certificate #{i + 1}</span>
                <a href={cert.link} className="open-link">
                  Open ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
