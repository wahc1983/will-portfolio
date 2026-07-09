import { describe, it, expect, vi, afterEach } from 'vitest'
import { SITE_NAME, OG_IMAGE_PATH, getSiteUrl } from './site'

describe('site constants', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('exposes site metadata', () => {
    expect(SITE_NAME).toBe('William Huertas')
    expect(OG_IMAGE_PATH).toBe('/og-image.webp')
  })

  it('returns configured site URL without trailing slash', () => {
    vi.stubEnv('VITE_SITE_URL', 'https://portfolio.example.com/')

    expect(getSiteUrl()).toBe('https://portfolio.example.com')
  })

  it('falls back to window origin when env is missing', () => {
    vi.stubEnv('VITE_SITE_URL', '')

    expect(getSiteUrl()).toBe(window.location.origin)
  })
})
