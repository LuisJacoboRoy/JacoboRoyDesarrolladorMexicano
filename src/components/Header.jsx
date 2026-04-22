import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <span>Luis Jacobo</span>
        </Link>
        <div className="nav-links">
          <Link to="/#experience" className="nav-link">
            Experiencia
          </Link>
          <Link to="/#projects" className="nav-link">
            Proyectos
          </Link>
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
