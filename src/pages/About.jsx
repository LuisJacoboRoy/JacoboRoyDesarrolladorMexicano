import React from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import '../styles/about.css';
import '../styles/about-animations.css';

function About() {
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

  const studies = [
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
      institution: 'Cenaltec',
      program: 'Comunicación Bilingüe',
      location: 'Cd. Juárez',
      period: '2016 — 2018'
    },
    {
      institution: 'SEP / Conaculta / Seculta',
      program: 'Formación Docente, Pedagógica y Artística',
      location: 'Oaxaca',
      period: '2014 — 2016'
    },
    {
      institution: 'STPS',
      program: 'Diseño Urbano Wayfinding',
      location: 'Xalapa',
      period: '2016 — 2017'
    },
    {
      institution: 'UVEG',
      program: 'Formación de Nivel Educativo',
      location: 'Online',
      period: 'En proceso'
    }
  ];

  const skills = {
    'Desarrollo IT': ['React', 'Node.js', 'JavaScript', 'Vite', 'SQL', 'PostgreSQL', 'MongoDB', 'Full Stack'],
    'Análisis de Datos': ['Análisis Sisco', 'Monitoreo GPS', 'Python', 'Excel Avanzado', 'Dashboard Design', 'Data Visualization'],
    'Diseño UI/UX': ['Diseño Editorial', 'Identidad Visual', 'Wayfinding', 'Diseño Institucional', 'Figma', 'Adobe Creative Suite'],
    'Especialidades': ['Sistemas Electorales', 'Gestión Empresarial', 'Google APIs', 'Git', 'Diseño Gráfico', 'Branding']
  };

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/LuisJacoboRoy', icon: '→' },
    { label: 'Email', url: 'mailto:killerpollo22@msn.com', icon: '→' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/jacoboroy', icon: '→' },
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
            <p className="title-desc">Desarrollador • Diseñador • Especialista en IT & Data Analytics</p>
            <p className="header-intro">
              Profesional con trayectoria híbrida de más de una década en diseño institucional, análisis de datos y desarrollo de sistemas. Especialista en soluciones digitales para sector público, político y empresarial.
            </p>
            <div className="header-meta">
              <span className="location">México</span>
              <span className="separator">•</span>
              <span className="experience">+10 años experiencia</span>
            </div>
            <div className="header-socials">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" title={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="experience-section">
        <h2>Experiencia Profesional</h2>
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
    </div>
  );
}

export default About;
