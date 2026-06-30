import React from 'react'
import { useTranslation } from 'react-i18next'
import { LinkedInIcon, GitHubIcon, BitbucketIcon, EmailIcon } from './SocialIcons'
import './SocialLinks.css'

const EMAIL = ['Williamhuertas1015', 'gmail.com'].join('@')

const SocialLinks = ({ showEmail = true, className = '' }) => {
  const { t } = useTranslation()

  const links = [
    {
      id: 'linkedin',
      href: 'https://linkedin.com/in/william-huertas-05928418/',
      label: t('contact.social.linkedin'),
      Icon: LinkedInIcon,
      external: true,
    },
    {
      id: 'github',
      href: 'https://github.com/wahc1983',
      label: t('contact.social.github'),
      Icon: GitHubIcon,
      external: true,
    },
    {
      id: 'bitbucket',
      href: 'https://bitbucket.org/wahc1983',
      label: t('contact.social.bitbucket'),
      Icon: BitbucketIcon,
      external: true,
    },
    ...(showEmail ? [{
      id: 'email',
      href: `mailto:${EMAIL}`,
      label: t('contact.details.email'),
      Icon: EmailIcon,
      external: false,
    }] : []),
  ]

  return (
    <div className={`social-links ${className}`}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="social-link"
          aria-label={link.label}
          title={link.label}
          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <link.Icon />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
