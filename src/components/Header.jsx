import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
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
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
          <button 
            onClick={toggleTheme}
            className="nav-link theme-toggle"
            aria-label="Toggle theme"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
