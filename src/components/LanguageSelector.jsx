import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import useClickOutside from '../hooks/useClickOutside'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
  }, [])

  const dropdownRef = useClickOutside(closeDropdown)

  const languages = [
    { code: 'es', name: t('language.spanish'), flag: '🇪🇸' },
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language.selector')}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector