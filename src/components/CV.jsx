import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaDownload, 
  FaEye, 
  FaFilePdf, 
  FaGraduationCap, 
  FaBriefcase, 
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGlobe
} from 'react-icons/fa'
import './CV.css'

const CV = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [activeTab, setActiveTab] = useState('experience')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const personalInfo = {
    name: 'Jose Alfonso Arevalo Roldan',
    title: 'Desarrollador de Software',
    email: 'arevaloroldan31@gmail.com',
    phone: '928199942',
    location: 'Lima, Perú',
    linkedin: 'https://www.linkedin.com/school/institútocertús/posts/?feedView=all',
    github: 'https://github.com/Alfonso312'
  }

  const experience = [
    {
      id: 1,
      position: 'Dependiente',
      company: "D'compras Fashion Wear S.A.",
      period: 'Dic 2011 - Ene 2012',
      description: 'Atención al cliente y manejo de caja en establecimiento comercial de moda.',
      achievements: [
        'Atención personalizada a clientes',
        'Manejo eficiente de caja y transacciones',
        'Control de inventario y mercadería'
      ],
      technologies: ['Atención al Cliente', 'Ventas', 'Caja']
    },
    {
      id: 2,
      position: 'Empleado',
      company: "Supermercados Peruanos Sociedad Anónima (S.P.S.A. 'O')",
      period: 'Ago 2014 - Sep 2014',
      description: 'Operaciones de retail en supermercado nacional.',
      achievements: [
        'Atención al cliente en área comercial',
        'Reposición de productos',
        'Mantenimiento de orden y limpieza'
      ],
      technologies: ['Retail', 'Logística', 'Servicio al Cliente']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Técnico en Diseño y Desarrollo de Software',
      institution: 'Instituto CERTUS',
      period: 'En progreso',
      description: 'Formación técnica especializada en programación backend y desarrollo de aplicaciones web. Enfoque en control de acceso, manejo de bases de datos relacionales y desarrollo de APIs REST.',
      gpa: 'Cursando'
    }
  ]

  const skills = {
    lenguajes: ['Java (Spring Boot)', 'JavaScript (Node.js)', 'Python'],
    frameworks: ['Spring Boot', 'Vue.js', 'React', '.NET Core'],
    basesDeDatos: ['MySQL', 'PowerBI', 'MongoDB'],
    herramientas: ['Postman', 'Visual Studio Code'],
    adicional: ['Licencia de Conducir A1 - Vigente']
  }

  const languages = {
    español: 'Español: Nativo',
    ingles: 'Inglés: Básico'
  }

  const tabs = [
    { key: 'experience', label: 'Experiencia', icon: <FaBriefcase /> },
    { key: 'education', label: 'Educación', icon: <FaGraduationCap /> },
    { key: 'skills', label: 'Habilidades', icon: <FaUser /> },
    { key: 'idiomas', label: 'Idiomas', icon: <FaGlobe /> }
  ]

  const renderExperience = () => (
    <div className="cv-section">
      {experience.map((job, index) => (
        <motion.div 
          key={job.id}
          className="experience-item"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <div className="experience-header">
            <h3 className="position-title">{job.position}</h3>
            <div className="company-info">
              <span className="company-name">{job.company}</span>
              <span className="period">{job.period}</span>
            </div>
          </div>
          <p className="job-description">{job.description}</p>
          <ul className="achievements-list">
            {job.achievements.map((achievement, idx) => (
              <li key={idx} className="achievement-item">{achievement}</li>
            ))}
          </ul>
          <div className="technologies">
            {job.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderEducation = () => (
    <div className="cv-section">
      {education.map((edu, index) => (
        <motion.div 
          key={edu.id}
          className="education-item"
          variants={itemVariants}
          whileHover={{ x: 10 }}
        >
          <div className="education-header">
            <h3 className="degree-title">{edu.degree}</h3>
            <div className="institution-info">
              <span className="institution-name">{edu.institution}</span>
              <span className="period">{edu.period}</span>
            </div>
          </div>
          <p className="education-description">{edu.description}</p>
          <div className="gpa">
            <span className="gpa-label">Promedio:</span>
            <span className="gpa-value">{edu.gpa}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderSkills = () => (
    <div className="cv-section">
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div 
            key={category}
            className="skill-category"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="skill-category-title">
              {category === 'lenguajes' ? 'Lenguajes' :
               category === 'frameworks' ? 'Frameworks' :
               category === 'basesDeDatos' ? 'Bases de Datos' :
               category === 'herramientas' ? 'Herramientas' :
               category === 'adicional' ? 'Adicional' : category}
            </h4>
            <div className="skill-list">
              {skillList.map((skill, idx) => (
                <span key={idx} className="skill-item">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderIdiomas = () => (
    <div className="cv-section">
      <motion.div 
        className="idiomas-container"
        variants={itemVariants}
      >
        <div className="idiomas-list">
          <div className="idioma-item">
            <span className="idioma-label">{languages.español}</span>
          </div>
          <div className="idioma-item">
            <span className="idioma-label">{languages.ingles}</span>
          </div>
          <div className="disponibilidad">
            <span className="disponibilidad-label">✅ Disponibilidad Inmediata</span>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <section id="cv" className="cv section">
      <div className="container">
        <motion.div
          ref={ref}
          className="cv-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="cv-header" variants={itemVariants}>
            <h2 className="section-title">Mi Currículum</h2>
            <p className="cv-description">
              Experiencia profesional, educación y habilidades técnicas
            </p>
          </motion.div>

          <div className="cv-layout">
            <motion.div className="cv-sidebar" variants={itemVariants}>
              <div className="personal-card">
                <div className="personal-header">
                  <div className="avatar-placeholder">
                    <FaUser />
                  </div>
                  <h3 className="personal-name">{personalInfo.name}</h3>
                  <p className="personal-title">{personalInfo.title}</p>
                </div>
                
                <div className="contact-info">
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                <div className="social-links">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                    GitHub
                  </a>
                </div>

                <div className="cv-actions">
                  <a href="/CV.pdf" download="CV_Jose_Alfonso_Arevalo_Roldan.pdf" className="btn btn-primary">
                    <FaDownload className="btn-icon" />
                    Descargar PDF
                  </a>
                  <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <FaEye className="btn-icon" />
                    Ver Completo
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div className="cv-main" variants={itemVariants}>
              <div className="cv-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="cv-content-area">
                {activeTab === 'experience' && renderExperience()}
                {activeTab === 'education' && renderEducation()}
                {activeTab === 'skills' && renderSkills()}
                {activeTab === 'idiomas' && renderIdiomas()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
