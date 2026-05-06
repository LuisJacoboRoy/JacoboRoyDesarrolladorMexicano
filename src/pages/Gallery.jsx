import React from 'react';
import '../styles/gallery.css';

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-header">
        <div className="gallery-content">
          <h1>Gallery</h1>
          <p className="gallery-intro">
            Una colección de trabajos, proyectos y momentos destacados.
          </p>
        </div>
      </section>

      <section className="gallery-container">
        <div className="gallery-placeholder">
          <div className="placeholder-content">
            <h2>Próximamente</h2>
            <p>Esta sección está en construcción.</p>
            <p>Aquí mostraremos proyectos visuales, trabajos de diseño y más.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
