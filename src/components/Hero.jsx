import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    'Programador Full Stack',
    'Diseñador UI/UX',
    'Especialista en Spring Boot',
    'Entusiasta de la Tecnología'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

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

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hola, soy <span className="gradient-text">Alfonso</span>
            </motion.h1>
            
            <motion.div 
              className="hero-subtitle"
              variants={itemVariants}
            >
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Actualmente soy Egresado del Instituto "Certus" culminando mis estudios en la Carrera Tecnica con
               Bachiller en "Diseño y Desarrollo de Software".
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="btn-icon" />
              Descargar CV
            </motion.a>
            
            <motion.a 
              href="#projects" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/ALfonso312" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/alfonso-arevalo-roldan-17868b253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-container">
            <div className="image-placeholder">
              <img 
                src="/tu-foto.jpg" 
                alt="Alfonso" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span style={{display: 'none'}}>Tu Foto</span>
            </div>
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero
