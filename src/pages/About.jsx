import React, { useState } from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import '../styles/about.css';
import '../styles/about-animations.css';

function About() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const workExperience = [
    {
      company: 'Tuxtepec en Línea',
      role: 'CEO y Creador de contenidos',
      period: '2020 — Presente',
      description: 'Fundación y dirección de plataforma digital innovadora. Desarrollo full stack, estrategia digital y gestión empresarial.'
    },
    {
      company: 'IEPC Jalisco',
      role: 'Programador Informático',
      period: '2018 — 2020',
      description: 'Sistemas de información para procesos electorales. Manejo de millones de registros y optimización crítica de datos electorales.'
    },
    {
      company: 'Grupo Tomza',
      role: 'Analista de Datos Sisco, Monitoreo GPS',
      period: '2017 — 2019',
      description: 'Análisis avanzado de datos empresariales. Sistemas de monitoreo GPS y desarrollo de soluciones empresariales en Cd. Juárez.'
    },
    {
      company: 'Colegio Alejandro Magno',
      role: 'Desarrollo y Diseño Institucional',
      period: '2016 — 2018',
      description: 'Desarrollo IT y diseño de sistemas institucionales. Infraestructura digital y presencia en línea.'
    },
    {
      company: 'Pachuca FC',
      role: 'Desarrollo y Diseño Institucional',
      period: '2016 — 2018',
      description: 'Desarrollo IT y diseño de identidad. Rebrand de filial TuzosJrz y sistemas de estadio.'
    },
    {
      company: 'RSP Partido Político',
      role: 'Registrante INE y Administrador de Campaña Digital',
      period: '2015 — 2017',
      description: 'Registro FURC de candidaturas. Administración y estrategia de campañas digitales.'
    }
  ];

  const mediaExperience = [
    {
      company: 'SEP Chihuahua',
      role: 'Diseño Institucional',
      period: '2016 — 2019'
    },
    {
      company: 'CREE Estatal Chihuahua',
      role: 'Diseñador de Manual de Procedimiento y Proyectos',
      period: '2015 — 2018'
    },
    {
      company: 'Universidad Veracruzana (JAZZUV)',
      role: 'Diseñador de Carteles y Avisos',
      period: '2013 — 2016'
    },
    {
      company: 'Innova Cielec',
      role: 'Diseñador Industrial',
      period: '2014 — 2016'
    },
    {
      company: 'Estadio Alejandro Magno',
      role: 'Desarrollo IT y Diseño',
      period: '2016 — 2018'
    },
    {
      company: 'Abriendo Brecha Veracruz',
      role: 'Diseñador Editorial',
      period: '2012 — 2014'
    },
    {
      company: 'OyeVeracruz',
      role: 'Diseñador Editorial',
      period: '2011 — 2012'
    },
    {
      company: 'ElTuxtepecano',
      role: 'Diseñador Editorial',
      period: '2010 — 2011'
    },
    {
      company: 'Consentido Publicitario Guadalajara',
      role: 'Diseñador General',
      period: '2009 — 2010'
    },
    {
      company: 'DG Gráfico Guadalajara',
      role: 'Diseñador Gráfico',
      period: '2009 — 2010'
    }
  ];

  const studies = [
    {
      institution: 'Cenaltec',
      program: 'Comunicación Bilingüe',
      location: 'Cd. Juárez',
      period: '2016 — 2018'
    },
    {
      institution: 'STPS',
      program: 'Diseño Urbano Wayfinding',
      location: 'Xalapa',
      period: '2016 — 2017'
    },
    {
      institution: 'SEP / Conaculta / Seculta',
      program: 'Formación Docente, Pedagógica y Artística',
      location: 'Oaxaca',
      period: '2014 — 2016'
    },
    {
      institution: 'Universidad Veracruzana',
      program: 'Educación Continua y Especialización',
      location: 'Veracruz',
      period: '2015 — Presente'
    },
    {
      institution: 'Google Develop Program',
      program: 'Desarrollo con APIs',
      location: 'Online',
      period: '2018 — Presente'
    },
    {
      institution: 'UVEG',
      program: 'Formación de Nivel Educativo',
      location: 'Online',
      period: 'En proceso'
    }
  ];

  const skills = {
    'Desarrollo IT': ['React', 'Node.js', 'JavaScript', 'SQL', 'PostgreSQL', 'MongoDB', 'Full Stack'],
    'Análisis de Datos': ['Análisis Sisco', 'Monitoreo GPS', 'Python', 'Excel Avanzado', 'Dashboard Design', 'Data Visualization'],
    'Diseño UI/UX': ['Diseño Editorial', 'Identidad Visual', 'Wayfinding', 'Diseño Institucional', 'Figma', 'Adobe Creative Suite'],
    'Especialidades': ['Sistemas Electorales', 'Gestión Empresarial', 'Google APIs', 'Git', 'Diseño Gráfico', 'Branding']
  };

  const projects = [
    {
      id: 1,
      title: 'Sistemas de Procesos Electorales',
      category: 'Backend / Data Analytics',
      description: 'Sistemas de información para millones de registros electorales con optimización crítica',
      skills: ['SQL', 'PostgreSQL', 'Data Analysis', 'Backend']
    },
    {
      id: 2,
      title: 'Plataforma Digital Tuxtepec en Línea',
      category: 'Full Stack / CEO',
      description: 'Plataforma digital innovadora con gestión empresarial y desarrollo full stack',
      skills: ['React', 'Node.js', 'Full Stack', 'Business Management']
    },
    {
      id: 3,
      title: 'Monitoreo GPS y Análisis Sisco',
      category: 'Data Analytics',
      description: 'Sistemas empresariales de monitoreo GPS y análisis Sisco a gran escala',
      skills: ['GPS Tracking', 'Data Analysis', 'Systems Design']
    }
  ];

  return (
    <div className="about-page">
      {/* Header Section - Magic Portfolio Style */}
      <section className="about-header">
        <div className="header-content">
          <div className="header-profile">
            <ProfilePhoto />
          </div>
          <div className="header-info">
            <h1>Luis Jacobo Santos Roy</h1>
            <p className="title-desc">Desarrollador • Diseñador • Especialista en IT & Data Analyst • Senior UI/UX Designer</p>
            <p className="header-intro">
              Profesional con trayectoria híbrida de más de una década en diseño institucional, análisis de datos y desarrollo de sistemas. Especialista en soluciones digitales para sector público, político y empresarial.
            </p>
            <div className="header-meta">
              <span className="location">México</span>
              <span className="separator">•</span>
              <span className="experience">+10 años experiencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <h2>Experiencia Profesional</h2>
        <div className="experience-container">
          <div className="experience-group">
            <h3 className="group-title">Tecnología y Gestión de Datos</h3>
            <div className="experience-list">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="experience-card">
                  <div className="exp-header">
                    <div className="exp-title">
                      <h4>{exp.company}</h4>
                      <p className="exp-role">{exp.role}</p>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-group">
            <h3 className="group-title">Experiencia en Medios, Agencias e Instituciones</h3>
            <div className="experience-list-compact">
              {mediaExperience.map((exp, idx) => (
                <div key={idx} className="experience-item-compact">
                  <div className="compact-header">
                    <h5>{exp.company}</h5>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="role-small">{exp.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Astro Zen Style */}
      <section className="featured-projects">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card featured"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-skills">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Formación</h2>
        <div className="studies-list">
          {studies.map((study, idx) => (
            <div key={idx} className="study-item">
              <div className="study-header">
                <h4>{study.institution}</h4>
                <span className="period">{study.period}</span>
              </div>
              <p className="study-program">{study.program}</p>
              {study.location && <p className="study-location">{study.location}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h4>{category}</h4>
              <div className="skill-list">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <h2>Acerca de Mí</h2>
        <div className="bio-content">
          <p>
            Especialista en la gestión de identidades digitales y sistemas empresariales. He liderado proyectos desde la creación de contenidos como CEO hasta administración de campañas digitales y desarrollo de sistemas de monitoreo y análisis de datos a gran escala.
          </p>
          <p>
            Mi trayectoria abarca gobierno y política (INE/IEPC), análisis y datos (sistemas Sisco, monitoreo GPS), y diseño editorial con experiencia en múltiples estados: Veracruz, Oaxaca, Jalisco y Chihuahua.
          </p>
          <p>
            Actualmente enfocado en desarrollo full stack con tecnologías modernas y soluciones escalables para sector público y privado, manteniendo enfoque en performance, seguridad y escalabilidad.
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="links-section">
        <h2>Enlaces de Interés</h2>
        <div className="links-grid">
          <a href="https://behance.net/jacoboroy" target="_blank" rel="noopener noreferrer" className="link-item">
            <span className="link-label">Behance</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://github.com/LuisJacoboRoy" target="_blank" rel="noopener noreferrer" className="link-item">
            <span className="link-label">GitHub Principal</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://github.com/JacoboRoy" target="_blank" rel="noopener noreferrer" className="link-item">
            <span className="link-label">GitHub Personal</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://linkedin.com/in/jacoboroy" target="_blank" rel="noopener noreferrer" className="link-item">
            <span className="link-label">LinkedIn</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="mailto:killerpollo22@msn.com" className="link-item">
            <span className="link-label">Email</span>
            <span className="link-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
