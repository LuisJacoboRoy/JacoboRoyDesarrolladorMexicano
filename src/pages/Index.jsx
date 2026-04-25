import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import ProfilePhoto from '../components/ProfilePhoto';
import '../styles/index.css';

function Index() {
  const experiences = [
    {
      company: 'Tuxtepec en Línea',
      position: 'CEO & Creador',
      period: '2020 — Presente',
      description: 'Lideré la creación y desarrollo de una plataforma digital innovadora que se convirtió en referente en la región Oaxaca.',
      achievements: [
        'Desarrollo full stack de plataforma digital escalable',
        'Estrategia de contenidos y marketing digital regional',
        'Gestión empresarial y operaciones digitales'
      ]
    },
    {
      company: 'IEPC Jalisco',
      position: 'Programador Informático',
      period: '2018 — 2020',
      description: 'Desarrollo de sistemas de información para procesos electorales e institucionales a gran escala.',
      achievements: [
        'Sistemas de gestión de datos electorales',
        'Optimización de bases de datos para millones de registros',
        'Análisis y reportes de datos complejos'
      ]
    },
    {
      company: 'Grupo Tomza',
      position: 'Analista de Datos Sisco / Monitoreo GPS',
      period: '2017 — 2019',
      description: 'Especialista en monitoreo de flotas, análisis Sisco y desarrollo de sistemas empresariales.',
      achievements: [
        'Sistemas de monitoreo GPS en tiempo real',
        'Análisis Sisco para empresas de transporte',
        'Desarrollo de dashboards y reportes empresariales'
      ]
    },
    {
      company: 'SEP Chihuahua',
      position: 'Diseño Institucional',
      period: '2016 — 2017',
      description: 'Diseño institucional y manuales de procedimiento para Secretaría de Educación Pública.',
      achievements: [
        'Manuales de identidad visual institucional',
        'Diseño de procedimientos administrativos',
        'Proyectos de desarrollo institucional'
      ]
    }
  ];

  const projects = [
    {
      title: 'Tuxtepec en Línea',
      description: 'Plataforma digital innovadora con contenidos, gestión de usuarios y análisis de datos. Desarrollo full stack con React y Node.js para sector público y comercial.',
      image: '/projects/tuxtepec.jpg',
      tags: ['React', 'Node.js', 'Full Stack', 'Oaxaca'],
      link: 'https://tuxtepec.mx',
      sourceLink: 'https://github.com/LuisJacoboRoy'
    },
    {
      title: 'Sistemas Electorales IEPC',
      description: 'Sistemas de gestión de datos electorales a gran escala. Optimización de bases de datos, reportes automáticos y análisis de millones de registros.',
      image: '/projects/iepc.jpg',
      tags: ['SQL', 'Backend', 'Big Data', 'Jalisco'],
      link: '#',
      sourceLink: 'https://github.com/LuisJacoboRoy'
    },
    {
      title: 'Monitoreo GPS - Grupo Tomza',
      description: 'Sistema de monitoreo GPS en tiempo real para flotas de transporte. Análisis Sisco, dashboards y reportes para gestión de logística empresarial.',
      image: '/projects/gps.jpg',
      tags: ['GPS', 'Real-time', 'Analytics', 'Chihuahua'],
      link: '#',
      sourceLink: 'https://github.com/LuisJacoboRoy'
    }
  ];

  return (
    <div className="index-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <ProfilePhoto />
          <h1 className="hero-title">Luis Jacobo Santos Roy</h1>
          <p className="hero-subtitle">
            Desarrollador & Especialista IT | Diseñador Institucional | Analyst
          </p>
          <p className="hero-description">
            Profesional con trayectoria híbrida en desarrollo de sistemas, análisis de datos y diseño institucional. 
            Experiencia en organismos gubernamentales (IEPC, SEP), sector empresarial y emprendimiento digital. 
            Especialista en soluciones escalables para el sector público y privado.
          </p>
          <div className="hero-cta">
            <a href="mailto:killerpollo22@msn.com" className="btn btn-primary">
              Contacto
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Trabajo
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
          <a href="https://github.com/LuisJacoboRoy" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub Principal
          </a>
          <a href="https://github.com/JacoboRoy" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub Personal
          </a>
          <a href="https://linkedin.com/in/jacoboroy" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://behance.net/jacoboroy" target="_blank" rel="noopener noreferrer" className="social-link">
            Behance
          </a>
          <a href="mailto:killerpollo22@msn.com" className="social-link">
            Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default Index;
