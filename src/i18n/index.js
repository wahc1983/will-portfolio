import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Importar las traducciones
import es from './locales/es.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import { DEFAULT_LANGUAGE, LANGUAGE_DETECTION_OPTIONS } from './config'

const resources = {
  es: {
    translation: es
  },
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: false,
    
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    },

    detection: LANGUAGE_DETECTION_OPTIONS,
  })

export default i18n