import React from 'react';
import '../styles/project-card.css';

function ProjectCard({ title, description, image, tags, link, sourceLink }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="link-button">
              Previsualizar
            </a>
          )}
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="link-button secondary">
              Código Fuente
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
