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
  FaGithub
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
    name: 'Tu Nombre Completo',
    title: 'Desarrollador Full Stack',
    email: 'tu.email@ejemplo.com',
    phone: '+1 (555) 123-4567',
    location: 'Ciudad, País',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario'
  }

  const experience = [
    {
      id: 1,
      position: 'Desarrollador Full Stack Senior',
      company: 'Tech Solutions Inc.',
      period: '2022 - Presente',
      description: 'Lidero el desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Gestiono un equipo de 5 desarrolladores y implemento mejores prácticas de desarrollo.',
      achievements: [
        'Aumenté la eficiencia del equipo en un 40% implementando metodologías ágiles',
        'Reduje los tiempos de carga de la aplicación en un 60%',
        'Implementé CI/CD que redujo los deploys de 2 horas a 15 minutos'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      position: 'Desarrollador Frontend',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Desarrollé interfaces de usuario responsivas y optimizadas para múltiples dispositivos. Colaboré estrechamente con diseñadores UX/UI.',
      achievements: [
        'Creé 15+ componentes reutilizables que aceleraron el desarrollo',
        'Mejoré la accesibilidad web cumpliendo estándares WCAG 2.1',
        'Implementé testing automatizado con Jest y React Testing Library'
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Jest', 'Figma']
    },
    {
      id: 3,
      position: 'Desarrollador Junior',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Participé en el desarrollo de la plataforma principal de la startup, trabajando con tecnologías modernas y metodologías ágiles.',
      achievements: [
        'Contribuí al desarrollo de la API REST principal',
        'Implementé autenticación y autorización segura',
        'Optimicé consultas de base de datos mejorando el rendimiento'
      ],
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'JWT', 'Git']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica',
      period: '2015 - 2019',
      description: 'Enfoque en desarrollo de software y arquitectura de sistemas. Proyecto final: Sistema de gestión empresarial con React y Node.js.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Certificación en Cloud Computing',
      institution: 'AWS Academy',
      period: '2021',
      description: 'Especialización en servicios de AWS, arquitectura de soluciones en la nube y mejores prácticas de seguridad.',
      gpa: 'A+'
    }
  ]

  const skills = {
    programming: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Django'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack'],
    languages: ['Español (Nativo)', 'Inglés (Avanzado)', 'Francés (Intermedio)']
  }

  const tabs = [
    { key: 'experience', label: 'Experiencia', icon: <FaBriefcase /> },
    { key: 'education', label: 'Educación', icon: <FaGraduationCap /> },
    { key: 'skills', label: 'Habilidades', icon: <FaUser /> }
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
                  <button className="btn btn-primary">
                    <FaDownload className="btn-icon" />
                    Descargar PDF
                  </button>
                  <button className="btn btn-secondary">
                    <FaEye className="btn-icon" />
                    Ver Completo
                  </button>
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CV
