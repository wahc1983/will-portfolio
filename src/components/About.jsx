import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="about section-alt">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>
        <div className="about-content">
          <p>{t('about.description1')}</p>
          <p>{t('about.description2')}</p>
          <div className="about-stats">
            <div className="stat glass-card">
              <h4 className="gradient-text">12+</h4>
              <p>{t('about.stats.experience')}</p>
            </div>
            <div className="stat glass-card">
              <h4 className="gradient-text">20+</h4>
              <p>{t('about.stats.projects')}</p>
            </div>
            <div className="stat glass-card">
              <h4 className="gradient-text">10+</h4>
              <p>{t('about.stats.technologies')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
