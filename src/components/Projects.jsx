import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [filter, setFilter] = useState('all')

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

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Java Puro, IDE Eclipe',
      description: 'En este proyecto se demostro el uso del lenguaje de Java, adquiriendo el requerimiento matematico MATH para hallar la Hipotenusa de un Triangulo Rectangulo',
      image: '/api/placeholder/600/400',
      video: 'https://www.youtube.com/embed/puEgxNTCbj8',
      technologies: ['Java Puro, IDE Eclipse'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Mentoria Learn',
      description: 'Aplicación web para conectar a alumnos con mentores personalizados encontrando asi cursos en linea y grabados sobre tecnologiaf.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'Aplicación móvil para pronóstico del clima con geolocalización, alertas personalizadas y widgets.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'OpenWeather API'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Sitio web personal con diseño moderno, animaciones fluidas y optimización SEO.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Aplicación de chat en tiempo real con salas privadas, archivos multimedia y notificaciones push.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'Redis'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Aplicación para seguimiento de ejercicios con rutinas personalizadas, estadísticas y progreso visual.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Charts.js'],
      category: 'mobile',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    }
  ]

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  )

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">Mis Proyectos</h2>
            <p className="projects-description">
              Una selección de proyectos que demuestran mi experiencia y pasión por el desarrollo
            </p>
          </motion.div>

          <motion.div className="projects-filters" variants={itemVariants}>
            {filters.map((filterItem) => (
              <button
                key={filterItem.key}
                className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
                onClick={() => setFilter(filterItem.key)}
              >
                {filterItem.label}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  {project.video ? (
                    <div className="video-container">
                      <iframe
                        src={project.video}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="project-video"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="image-placeholder">
                      <span>Imagen del Proyecto</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="featured-badge">Destacado</div>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver código"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <FaGithub className="btn-icon" />
              Ver más en GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
