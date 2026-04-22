import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './pages/Index';
import About from './pages/About';
import './styles/app.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Luis Jacobo Santos Roy © 2026</p>
      </footer>
    </div>
  );
}

export default App;
