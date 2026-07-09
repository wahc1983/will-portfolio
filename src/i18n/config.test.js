import { describe, it, expect } from 'vitest'
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_DETECTION_OPTIONS } from '../i18n/config'

describe('i18n config', () => {
  it('uses Spanish as default language', () => {
    expect(DEFAULT_LANGUAGE).toBe('es')
  })

  it('exposes es, en and fr locales', () => {
    expect(AVAILABLE_LANGUAGES.map((lang) => lang.code)).toEqual(['es', 'en', 'fr'])
  })

  it('marks only one default language', () => {
    const defaults = AVAILABLE_LANGUAGES.filter((lang) => lang.isDefault)
    expect(defaults).toHaveLength(1)
    expect(defaults[0].code).toBe('es')
  })

  it('persists language in localStorage', () => {
    expect(LANGUAGE_DETECTION_OPTIONS.caches).toContain('localStorage')
    expect(LANGUAGE_DETECTION_OPTIONS.lookupLocalStorage).toBe('i18nextLng')
  })
})
