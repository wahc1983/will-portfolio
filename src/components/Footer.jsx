import React from 'react'
import { useTranslation } from 'react-i18next'
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
            <a href="#home">{t('nav.home')}</a>
            <a href="#about">{t('nav.about')}</a>
            <a href="#experience">{t('nav.experience')}</a>
            <a href="#skills">{t('nav.skills')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer