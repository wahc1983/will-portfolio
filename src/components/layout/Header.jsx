import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../ui/LanguageSelector'
import ThemeToggle from '../ui/ThemeToggle'
import { createScrollHandler } from '../../utils/scrollToSection'
import './Header.css'

const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleScroll = (sectionId) => createScrollHandler(sectionId, closeMenu)

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home" onClick={handleScroll('home')} className="logo-link">
            <div className="header-logo-icon">
              <span>W</span>
              <span className="logo-suffix">AHC</span>
            </div>
            <h2>{t('header.title')}</h2>
          </a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul>
            <li>
              <a href="#home" onClick={handleScroll('home')}>
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleScroll('about')}>
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleScroll('experience')}>
                {t('nav.experience')}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleScroll('skills')}>
                {t('nav.skills')}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleScroll('projects')}>
                {t('nav.projects')}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScroll('contact')}>
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <LanguageSelector />
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isMenuOpen}
          >
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
