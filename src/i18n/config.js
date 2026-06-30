export const AVAILABLE_LANGUAGES = [
  {
    code: 'es',
    flag: '🇪🇸',
    labelKey: 'language.spanish',
    isDefault: true,
  },
  {
    code: 'en',
    flag: '🇺🇸',
    labelKey: 'language.english',
    isDefault: false,
  },
  {
    code: 'fr',
    flag: '🇫🇷',
    labelKey: 'language.french',
    isDefault: false,
  },
]

export const DEFAULT_LANGUAGE = AVAILABLE_LANGUAGES.find((lang) => lang.isDefault)?.code || 'es'

export const LANGUAGE_DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
}
