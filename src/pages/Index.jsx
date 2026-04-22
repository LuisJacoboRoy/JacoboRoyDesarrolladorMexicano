import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import '../styles/index.css';

function Index() {
  const experiences = [
    {
      company: 'CEO & Creador',
      position: 'Tuxtepec en Línea',
      period: '2020 — Presente',
      description: 'Lideré la creación y desarrollo de una plataforma digital innovadora que se convirtió en referente en la región.',
      achievements: [
        'Implementé estrategias de marketing digital que triplicaron el alcance',
        'Desarrollé soluciones web escalables con React y Node.js',
        'Lideré un equipo multidisciplinario de 5+ profesionales'
      ]
    },
    {
      company: 'IEPC Jalisco',
      position: 'Programador',
      period: '2018 — 2020',
      description: 'Desarrollé sistemas de información para procesos electorales y gestión de datos.',
      achievements: [
        'Programación backend en Python y SQL',
        'Optimización de bases de datos para 1M+ registros',
        'Implementación de reportes automáticos'
      ]
    },
    {
      company: 'Grupo Tomza',
      position: 'Analista de Redes / GPS',
      period: '2017 — 2018',
      description: 'Análisis y administración de infraestructuras de red y sistemas de localización GPS.',
      achievements: [
        'Monitoreo de infraestructura de red',
        'Implementación de soluciones GPS para logística',
        'Soporte técnico nivel 3'
      ]
    }
  ];

  const projects = [
    {
      title: 'Spotifu Music',
      description: 'Aplicación web de streaming musical que emula las características principales de Spotify, incluyendo reproducción de audio, playlists personalizadas y recomendaciones.',
      image: '/projects/spotifu.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Web Audio API'],
      link: 'https://spotifu-demo.com',
      sourceLink: 'https://github.com/jacobo-roy/spotifu'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico con carrito de compras, sistema de pagos integrado y panel administrativo para gestión de productos.',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      link: 'https://ecommerce-demo.com',
      sourceLink: 'https://github.com/jacobo-roy/ecommerce'
    },
    {
      title: 'Social Network Clone',
      description: 'Red social interactiva con feed en tiempo real, sistema de amigos, comentarios y likes, inspirada en Instagram.',
      image: '/projects/social.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      link: 'https://social-demo.com',
      sourceLink: 'https://github.com/jacobo-roy/social-network'
    }
  ];

  return (
    <div className="index-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Luis Jacobo Santos Roy</h1>
          <p className="hero-subtitle">
            Desarrollador Creativo & Especialista IT
          </p>
          <p className="hero-description">
            Basado en Cd. Juárez, México. Especialista en desarrollo web, análisis de datos y diseño UI/UX. Transformo ideas complejas en soluciones elegantes y funcionales.
          </p>
          <div className="hero-cta">
            <a href="mailto:jacobo@example.com" className="btn btn-primary">
              Ponte en Contacto
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <h2 className="section-title">Conecta Conmigo</h2>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-link">
            Behance
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}

export default Index;
