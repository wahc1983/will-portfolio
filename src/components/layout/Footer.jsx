import React from 'react'
import { useTranslation } from 'react-i18next'
import { createScrollHandler } from '../../utils/scrollToSection'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} {t('header.title')}. {t('footer.rights')}</p>
          </div>
          <div className="footer-links">
            <a href="#home" onClick={createScrollHandler('home')}>{t('nav.home')}</a>
            <a href="#about" onClick={createScrollHandler('about')}>{t('nav.about')}</a>
            <a href="#experience" onClick={createScrollHandler('experience')}>{t('nav.experience')}</a>
            <a href="#skills" onClick={createScrollHandler('skills')}>{t('nav.skills')}</a>
            <a href="#projects" onClick={createScrollHandler('projects')}>{t('nav.projects')}</a>
            <a href="#contact" onClick={createScrollHandler('contact')}>{t('nav.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
