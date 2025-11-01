import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaJava
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
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
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 85, color: '#ED8B00' },
        { name: 'Python', icon: <FaPython />, level: 80, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' }
      ]
    },
    {
      title: 'Backend & Bases de Datos',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70, color: '#336791' },
        { name: 'Redis', icon: <SiRedis />, level: 65, color: '#DC382D' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, level: 60, color: '#FF9900' },
        { name: 'Database', icon: <FaDatabase />, level: 75, color: '#336791' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">Habilidades Técnicas</h2>
            <p className="skills-description">
              Tecnologías y herramientas que domino para crear soluciones digitales innovadoras
            </p>
          </motion.div>

          <div className="skills-categories">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-card">
              <h3>Resumen de Competencias</h3>
              <div className="summary-stats">
                <div className="summary-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Tecnologías</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
                <div className="summary-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Proyectos</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
