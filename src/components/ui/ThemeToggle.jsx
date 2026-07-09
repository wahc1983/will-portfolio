import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from 'react-i18next'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkMode ? t('theme.switchToLight') : t('theme.switchToDark')}
      title={isDarkMode ? t('theme.switchToLight') : t('theme.switchToDark')}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
          <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
