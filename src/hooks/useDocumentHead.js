import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getSiteUrl, OG_IMAGE_PATH } from '../constants/site'

const setMetaContent = (selector, createAttrs, content) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(createAttrs).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const setLinkHref = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const localeMap = {
  es: 'es_CO',
  en: 'en_US',
  fr: 'fr_FR',
}

export const useDocumentHead = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.language?.split('-')[0] || 'es'
    const siteUrl = getSiteUrl()
    const pageUrl = siteUrl ? `${siteUrl}/` : window.location.href.split('#')[0]
    const imageUrl = `${siteUrl || window.location.origin}${OG_IMAGE_PATH}`
    const title = t('meta.title')
    const description = t('meta.description')

    document.documentElement.lang = lang
    document.title = title

    setMetaContent('meta[name="description"]', { name: 'description' }, description)
    setMetaContent('meta[property="og:title"]', { property: 'og:title' }, title)
    setMetaContent('meta[property="og:description"]', { property: 'og:description' }, description)
    setMetaContent('meta[property="og:type"]', { property: 'og:type' }, 'website')
    setMetaContent('meta[property="og:url"]', { property: 'og:url' }, pageUrl)
    setMetaContent('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
    setMetaContent(
      'meta[property="og:image:alt"]',
      { property: 'og:image:alt' },
      t('meta.ogImageAlt')
    )
    setMetaContent('meta[property="og:locale"]', { property: 'og:locale' }, localeMap[lang] || lang)
    setMetaContent('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
    setMetaContent('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
    setMetaContent('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    setMetaContent('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)
    setLinkHref('canonical', pageUrl)
  }, [t, i18n.language])
}
