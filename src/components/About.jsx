import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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

  const stats = [
    { number: '3+', label: 'Años de Experiencia' },
    { number: '50+', label: 'Proyectos Completados' },
    { number: '20+', label: 'Clientes Satisfechos' },
    { number: '100%', label: 'Dedicación' }
  ]

  const values = [
    {
      icon: <FaCode />,
      title: 'Código Limpio',
      description: 'Escribo código mantenible y escalable siguiendo las mejores prácticas.'
    },
    {
      icon: <FaPalette />,
      title: 'Diseño Creativo',
      description: 'Creo interfaces atractivas y funcionales que mejoran la experiencia del usuario.'
    },
    {
      icon: <FaRocket />,
      title: 'Innovación',
      description: 'Siempre busco nuevas tecnologías y metodologías para mejorar mis proyectos.'
    },
    {
      icon: <FaHeart />,
      title: 'Pasión',
      description: 'Amo lo que hago y me esfuerzo por entregar resultados excepcionales.'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">Sobre Mí</h2>
            <div className="about-description">
              <p>
                Soy un desarrollador apasionado durante 3 años adquiri conocimientos como
                en Python, Java, JavaScript, Json, usando IDE como Spring Tools4, Eclipse, Visual Studio Code,
                Apache Netbeans, etc..
              </p>
              <p>
                Me especializo en crear aplicaciones web responsivas, APIs robustas y 
                experiencias de usuario excepcionales. Siempre estoy aprendiendo nuevas 
                tecnologías y mejorando mis habilidades para ofrecer las mejores soluciones.

                Soy Peruano, Tengo 32 años actualmente vivo en Lima, Perú.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-values" variants={itemVariants}>
            <h3 className="values-title">Mis Valores</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="value-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
