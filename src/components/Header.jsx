import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <span>LJS</span>
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="nav-link nav-button"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="nav-link nav-button"
          >
            Projects
          </button>
          <a href="mailto:killerpollo22@msn.com" className="nav-link cta">
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
