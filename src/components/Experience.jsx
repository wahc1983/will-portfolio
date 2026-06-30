import React from 'react'
import { useTranslation } from 'react-i18next'
import seniorImage from '../assets/illustrations/experience-senior.webp'
import semiSeniorImage from '../assets/illustrations/experience-semi-senior.webp'
import webDevImage from '../assets/illustrations/experience-web-developer.webp'
import './Experience.css'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      title: t('experience.jobs.0.title'),
      company: t('experience.jobs.0.company'),
      period: t('experience.jobs.0.period'),
      description: t('experience.jobs.0.description'),
      technologies: ['Angular v21', 'Ionic', 'Capacitor', 'Module Fed.', 'Docker'],
      image: seniorImage,
      imageClass: 'timeline-illustration--square',
    },
    {
      title: t('experience.jobs.1.title'),
      company: t('experience.jobs.1.company'),
      period: t('experience.jobs.1.period'),
      description: t('experience.jobs.1.description'),
      technologies: ['Angular (11-13)', 'Microfrontends', 'SonarQube', 'Fortify'],
      image: webDevImage,
      imageClass: 'timeline-illustration--portrait',
    },
    {
      title: t('experience.jobs.2.title'),
      company: t('experience.jobs.2.company'),
      period: t('experience.jobs.2.period'),
      description: t('experience.jobs.2.description'),
      technologies: ['Ruby on Rails', 'Vanilla JS', 'MariaDB', 'MySQL', 'AWS'],
      image: semiSeniorImage,
      imageClass: 'timeline-illustration--portrait',
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>{t('experience.title')}</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-image timeline-image--mobile">
                  <img src={exp.image} alt={exp.title} />
                </div>
                <div className="timeline-body">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                  <div className="technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="timeline-flank">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className={`timeline-illustration ${exp.imageClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
