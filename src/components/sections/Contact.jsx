import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'
import SocialLinks from '../ui/SocialLinks'
import { EmailIcon, MapPinIcon } from '../ui/SocialIcons'
import { CONTACT_EMAIL, CONTACT_LOCATION } from '../../constants/contact'
import contactImageLight from '../../assets/illustrations/contact-william-light.webp'
import contactImageDark from '../../assets/illustrations/contact-william-dark.webp'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const { isDarkMode } = useTheme()
  const contactImage = isDarkMode ? contactImageDark : contactImageLight

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
        <div className="contact-content">
          <div className="contact-visual">
            <img
              src={contactImage}
              alt={t('contact.imageAlt')}
              className="contact-illustration"
            />
          </div>

          <div className="contact-info">
            <div className="glass-card contact-details-card">
              <h3>{t('contact.details.title')}</h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <EmailIcon />
                  </span>
                  <div>
                    <span className="contact-label">{t('contact.details.email')}</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="contact-value">{CONTACT_EMAIL}</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <MapPinIcon />
                  </span>
                  <div>
                    <span className="contact-label">{t('contact.details.location')}</span>
                    <span className="contact-value">{CONTACT_LOCATION}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card contact-cta-card">
              <h3>{t('contact.cta.title')}</h3>
              <p>{t('contact.description')}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary contact-email-btn">
                {t('contact.cta.button')} →
              </a>
              <SocialLinks showEmail={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
