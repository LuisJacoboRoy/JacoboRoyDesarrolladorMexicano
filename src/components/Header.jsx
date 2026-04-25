import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <span>Jacobo Roy</span>
        </Link>
        <div className="nav-links">
          <button 
            onClick={() => scrollToSection('experience')} 
            className="nav-link nav-button"
          >
            Experiencia
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="nav-link nav-button"
          >
            Proyectos
          </button>
          <Link to="/about" className="nav-link">
            Acerca de
          </Link>
          <a href="mailto:jacobo@example.com" className="nav-link cta">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
