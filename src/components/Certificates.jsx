import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaDownload, FaEye, FaCalendarAlt, FaAward } from 'react-icons/fa'
import './Certificates.css'

const Certificates = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const categories = [
    { key: 'all', label: 'Todos' },
    { key: 'programming', label: 'Programación' },
    { key: 'web', label: 'Desarrollo Web' },
    { key: 'cloud', label: 'Cloud Computing' },
    { key: 'data', label: 'Ciencia de Datos' }
  ]

  const certificates = [
    {
      id: 1,
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023-12-15',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'Certificación oficial de Meta en desarrollo con React, incluyendo hooks, context API y testing.',
      credentialId: 'META-REACT-2023-001',
      url: 'https://coursera.org/verify/certificate',
      featured: true
    },
    {
      id: 2,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-10-20',
      category: 'cloud',
      image: '/api/placeholder/400/300',
      description: 'Certificación profesional en arquitectura de soluciones en la nube con AWS.',
      credentialId: 'AWS-SAA-2023-002',
      url: 'https://aws.amazon.com/verification',
      featured: true
    },
    {
      id: 3,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023-08-10',
      category: 'programming',
      image: '/api/placeholder/400/300',
      description: 'Certificación en algoritmos y estructuras de datos con JavaScript.',
      credentialId: 'FCC-JS-2023-003',
      url: 'https://freecodecamp.org/certification',
      featured: false
    },
    {
      id: 4,
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023-06-25',
      category: 'data',
      image: '/api/placeholder/400/300',
      description: 'Especialización en Python para análisis de datos y machine learning.',
      credentialId: 'IBM-PYTHON-2023-004',
      url: 'https://coursera.org/verify/certificate',
      featured: false
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      issuer: 'The Odin Project',
      date: '2023-04-15',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'Certificación completa en desarrollo web full stack con tecnologías modernas.',
      credentialId: 'TOP-FULLSTACK-2023-005',
      url: 'https://theodinproject.com/certificate',
      featured: true
    },
    {
      id: 6,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023-02-28',
      category: 'cloud',
      image: '/api/placeholder/400/300',
      description: 'Certificación oficial de Docker en containerización y orquestación.',
      credentialId: 'DOCKER-CA-2023-006',
      url: 'https://docker.com/certification',
      featured: false
    }
  ]

  const filteredCertificates = certificates.filter(cert => 
    selectedCategory === 'all' || cert.category === selectedCategory
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <section id="certificates" className="certificates section">
      <div className="container">
        <motion.div
          ref={ref}
          className="certificates-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="certificates-header" variants={itemVariants}>
            <h2 className="section-title">Certificaciones</h2>
            <p className="certificates-description">
              Credenciales profesionales que validan mi experiencia y conocimiento técnico
            </p>
          </motion.div>

          <motion.div className="certificates-filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <div className="certificates-grid">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className={`certificate-card ${certificate.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="certificate-image">
                  <div className="image-placeholder">
                    <FaCertificate className="certificate-icon" />
                    <span>Certificado</span>
                  </div>
                  {certificate.featured && (
                    <div className="featured-badge">
                      <FaAward />
                      Destacado
                    </div>
                  )}
                  <div className="certificate-overlay">
                    <div className="certificate-actions">
                      <a 
                        href={certificate.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn"
                        title="Ver certificado"
                      >
                        <FaEye />
                      </a>
                      <button 
                        className="action-btn"
                        title="Descargar"
                      >
                        <FaDownload />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="certificate-content">
                  <div className="certificate-header">
                    <h3 className="certificate-title">{certificate.title}</h3>
                    <div className="certificate-issuer">{certificate.issuer}</div>
                  </div>

                  <p className="certificate-description">{certificate.description}</p>

                  <div className="certificate-details">
                    <div className="certificate-date">
                      <FaCalendarAlt className="detail-icon" />
                      <span>{formatDate(certificate.date)}</span>
                    </div>
                    <div className="certificate-id">
                      <span className="detail-label">ID:</span>
                      <span className="detail-value">{certificate.credentialId}</span>
                    </div>
                  </div>

                  <div className="certificate-actions-bottom">
                    <a 
                      href={certificate.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Ver Certificado
                    </a>
                    <button className="btn btn-secondary">
                      <FaDownload className="btn-icon" />
                      Descargar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="certificates-summary" variants={itemVariants}>
            <div className="summary-stats">
              <div className="stat-item">
                <div className="stat-number">{certificates.length}</div>
                <div className="stat-label">Certificaciones</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{new Set(certificates.map(c => c.issuer)).size}</div>
                <div className="stat-label">Instituciones</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{certificates.filter(c => c.featured).length}</div>
                <div className="stat-label">Destacadas</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
