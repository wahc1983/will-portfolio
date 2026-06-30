import React from 'react'
import { useTranslation } from 'react-i18next'
import heroImage from '../../assets/illustrations/hero-william.webp'
import SocialLinks from '../ui/SocialLinks'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-text">
          <span className="section-label">{t('hero.tag')}</span>
          <h1 className="hero-title">
            <span className="hero-greeting">{t('hero.greeting')}</span>
            <span className="hero-name">
              {t('hero.nameFirst')}{' '}
              <span className="gradient-text">{t('hero.nameLast')}</span>
            </span>
          </h1>
          <p className="hero-bio">{t('hero.bio')}</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" onClick={(e) => scrollTo(e, 'projects')}>
              {t('hero.ctaProjects')} →
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollTo(e, 'contact')}>
              {t('hero.ctaContact')}
            </a>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-visual">
          <div className="hero-badge hero-badge-code" aria-hidden="true">&lt;/&gt;</div>
          <div className="hero-image-frame">
            <img src={heroImage} alt={t('hero.imageAlt')} className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
