import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'
import profileImage from '../assets/profile.png'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>{t('about.title')}</h2>
            <h3>{t('about.subtitle')}</h3>
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>{t('about.stats.experience')}</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>{t('about.stats.projects')}</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>{t('about.stats.technologies')}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={profileImage} alt={t('about.imageAlt')} className="tokyo-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About