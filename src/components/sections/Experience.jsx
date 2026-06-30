import React from 'react'
import { useTranslation } from 'react-i18next'
import { experiences as experienceData } from '../../data/experience'
import './Experience.css'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = experienceData.map((job) => ({
    title: t(`experience.jobs.${job.jobIndex}.title`),
    company: t(`experience.jobs.${job.jobIndex}.company`),
    period: t(`experience.jobs.${job.jobIndex}.period`),
    description: t(`experience.jobs.${job.jobIndex}.description`),
    technologies: job.technologies,
    image: job.image,
    imageClass: job.imageClass,
  }))

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
