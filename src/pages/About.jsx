import React from 'react';
import '../styles/about.css';

function About() {
  const skills = {
    'Desarrollo Web': ['React 19', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    'Diseño UI/UX': ['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing'],
    'Análisis de Datos': ['Python', 'SQL', 'Tableau', 'Excel Avanzado'],
    'Otros': ['Git', 'Docker', 'AWS', 'GitHub Actions', 'CI/CD']
  };

  const studies = [
    {
      institution: 'Universidad Veracruzana',
      program: 'Carrera en Informática',
      period: '2015 — 2019'
    },
    {
      institution: 'IEPC Jalisco',
      program: 'Programación & Sistemas',
      period: '2018 — 2020'
    },
    {
      institution: 'Cenaltec',
      program: 'Comunicación Bilingüe',
      period: '2016 — 2018'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Acerca de Mí</h1>
          <p className="intro-text">
            Soy un profesional apasionado por transformar ideas complejas en soluciones simples y elegantes. 
            Con experiencia en desarrollo web, análisis de datos y diseño UI/UX, me destaco en crear experiencias 
            digitales que combinan funcionalidad, estética y rendimiento.
          </p>
        </div>
      </section>

      {/* Personal Bio */}
      <section className="bio-section">
        <div className="bio-content">
          <h2>Mi Historia</h2>
          <p>
            Nacido y criado en México, con experiencia en Cd. Juárez, Oaxaca y Veracruz. 
            He trabajado en diversos sectores incluyendo tecnología, diseño editorial, medios y emprendimiento. 
            Mi pasión por la tecnología y el diseño me ha permitido desarrollar soluciones innovadoras que impactan 
            positivamente a usuarios y empresas.
          </p>
          <p>
            Actualmente, me enfoco en crear experiencias digitales de alta calidad utilizando las tecnologías 
            más modernas, con especial énfasis en React, TypeScript y arquitecturas escalables.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="work-experience">
        <h2>Experiencia Profesional</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="exp-header">
              <h3>Tuxtepec en Línea</h3>
              <span className="period">2020 — Presente</span>
            </div>
            <p className="role">CEO & Creador</p>
            <p className="description">
              Fundé y dirijo una plataforma digital que se convirtió en referente regional. 
              Lideré todo el stack tecnológico, estrategia digital y crecimiento de usuarios.
            </p>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>IEPC Jalisco</h3>
              <span className="period">2018 — 2020</span>
            </div>
            <p className="role">Programador</p>
            <p className="description">
              Desarrollé sistemas de información para procesos electorales con manejo de millones de registros 
              y optimización de performance crítica.
            </p>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Grupo Tomza</h3>
              <span className="period">2017 — 2018</span>
            </div>
            <p className="role">Analista de Redes / GPS</p>
            <p className="description">
              Administración de infraestructuras de red y sistemas de localización GPS para soluciones logísticas.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Educación</h2>
        <div className="studies-list">
          {studies.map((study, index) => (
            <div key={index} className="study-item">
              <h4>{study.institution}</h4>
              <p className="program">{study.program}</p>
              <p className="period">{study.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="skills-section">
        <h2>Competencias Técnicas</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h4>{category}</h4>
              <div className="skill-tags">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Timezone */}
      <section className="location-section">
        <h2>Ubicación</h2>
        <div className="location-info">
          <p>
            <strong>Basado en:</strong> Cd. Juárez, Chihuahua, México
          </p>
          <p>
            <strong>Zona Horaria:</strong> Hora de la Montaña (MDT/MST)
          </p>
          <p>
            <strong>Disponibilidad:</strong> Abierto a proyectos remotos y colaboraciones
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Trabaja Conmigo</h2>
        <p>
          ¿Tienes un proyecto interesante? Me encantaría escuchar sobre él. 
          Contáctame para una conversación sin compromiso.
        </p>
        <a href="mailto:jacobo@example.com" className="btn btn-large">
          Envíame un Email
        </a>
      </section>
    </div>
  );
}

export default About;
