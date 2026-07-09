export const SITE_NAME = 'William Huertas'
export const OG_IMAGE_PATH = '/og-image.webp'

export const getSiteUrl = () => {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (configured) return configured
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}
