// Configuración de idiomas disponibles
export const AVAILABLE_LANGUAGES = [
  {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    flag: '🇪🇸',
    isDefault: true
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    isDefault: false
  },
  {
    code: 'fr',
    name: 'Français',
    nativeName: 'Français',
    flag: '🇫🇷',
    isDefault: false
  }
]

// Idioma por defecto
export const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES.find(lang => lang.isDefault)?.code || 'es'

// Configuración de detección de idioma
export const LANGUAGE_DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
  checkWhitelist: true
}