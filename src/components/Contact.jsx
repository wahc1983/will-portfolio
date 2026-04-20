import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert(t('contact.form.success'))
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.subtitle')}</h3>
            <p>{t('contact.description')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>{t('contact.details.email')}:</strong>
                <a href={`mailto:${['Williamhuertas1015', 'gmail.com'].join('@')}`} className="social-link" style={{textTransform: 'none'}}>
                  {['Williamhuertas1015', 'gmail.com'].join('@')}
                </a>
              </div>

              <div className="contact-item">
                <strong>{t('contact.details.location')}:</strong>
                <span>Bogotá, Colombia</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/william-huertas-05928418/" target="_blank" rel="noopener noreferrer" className="social-link">{t('contact.social.linkedin')}</a>
              <a href="https://github.com/wahc1983" target="_blank" rel="noopener noreferrer" className="social-link">{t('contact.social.github')}</a>
              <a href="https://bitbucket.org/wahc1983" target="_blank" rel="noopener noreferrer" className="social-link">{t('contact.social.bitbucket')}</a>
            </div>
          </div>
          
          {/* 
          Formulario oculto temporalmente
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder={t('contact.form.name')} value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder={t('contact.form.email')} value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder={t('contact.form.message')} rows="5" value={formData.message} onChange={handleChange} required ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t('contact.form.send')}</button>
          </form>
          */}
        </div>
      </div>
    </section>
  )
}

export default Contact