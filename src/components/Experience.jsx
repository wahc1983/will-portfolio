import React from 'react'
import { useTranslation } from 'react-i18next'
import './Experience.css'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      title: t('experience.jobs.0.title'),
      company: t('experience.jobs.0.company'),
      period: t('experience.jobs.0.period'),
      description: t('experience.jobs.0.description'),
      technologies: ["Angular v21", "Ionic", "Capacitor", "Module Fed.", "Docker"]
    },
    {
      title: t('experience.jobs.1.title'),
      company: t('experience.jobs.1.company'),
      period: t('experience.jobs.1.period'),
      description: t('experience.jobs.1.description'),
      technologies: ["Angular (11-13)", "Microfrontends", "SonarQube", "Fortify"]
    },
    {
      title: t('experience.jobs.2.title'),
      company: t('experience.jobs.2.company'),
      period: t('experience.jobs.2.period'),
      description: t('experience.jobs.2.description'),
      technologies: ["Ruby on Rails", "Vanilla JS", "MariaDB", "MySQL", "AWS"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>{t('experience.title')}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience