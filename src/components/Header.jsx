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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        // Calculate absolute element position and subtract header height + 20px of extra padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="header-logo-icon">
            <span>W</span><span className="logo-suffix">AHC</span>
          </div>
          <h2>{t('header.title')}</h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t('nav.about')}</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>{t('nav.experience')}</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t('nav.skills')}</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t('nav.projects')}</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('nav.contact')}</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <LanguageSelector />
          <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
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