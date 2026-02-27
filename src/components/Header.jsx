import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>{t('header.title')}</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => scrollToSection('about')}>{t('nav.about')}</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>{t('nav.experience')}</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>{t('nav.skills')}</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>{t('nav.projects')}</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t('nav.contact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <LanguageSelector />
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header