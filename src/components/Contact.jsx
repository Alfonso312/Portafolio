import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'tu.email@ejemplo.com',
      link: 'mailto:tu.email@ejemplo.com'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      value: 'Ciudad, País',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-perfil',
      color: '#0077B5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      color: '#333'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      color: '#1DA1F2'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: '¡Mensaje enviado correctamente! Te responderé pronto.'
      })
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h2 className="section-title">Contacto</h2>
            <p className="contact-description">
              ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!
            </p>
          </motion.div>

          <div className="contact-layout">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-card">
                <h3 className="info-title">Información de Contacto</h3>
                <p className="info-description">
                  Estoy disponible para proyectos freelance y oportunidades de trabajo. 
                  No dudes en contactarme para discutir tu proyecto.
                </p>

                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="contact-detail"
                      whileHover={{ x: 10 }}
                    >
                      <div className="detail-icon">
                        {info.icon}
                      </div>
                      <div className="detail-content">
                        <span className="detail-title">{info.title}</span>
                        <span className="detail-value">{info.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-section">
                  <h4 className="social-title">Sígueme en redes</h4>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="form-card">
                <h3 className="form-title">Envíame un Mensaje</h3>
                
                {formStatus.message && (
                  <motion.div 
                    className={`form-status ${formStatus.type}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                    {formStatus.message}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Asunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="5"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
