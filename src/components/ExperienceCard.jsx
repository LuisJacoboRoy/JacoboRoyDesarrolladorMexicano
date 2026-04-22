import React from 'react';
import '../styles/experience-card.css';

function ExperienceCard({ company, position, period, description, achievements }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3 className="company-name">{company}</h3>
        <span className="period">{period}</span>
      </div>
      <h4 className="position-title">{position}</h4>
      <p className="description">{description}</p>
      {achievements && achievements.length > 0 && (
        <ul className="achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceCard;
