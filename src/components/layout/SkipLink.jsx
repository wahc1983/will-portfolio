import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../utils/scrollToSection'
import './SkipLink.css'

const SkipLink = () => {
  const { t } = useTranslation()

  return (
    <a
      href="#main-content"
      className="skip-link"
      onClick={(event) => scrollToSection(event, 'main-content')}
    >
      {t('nav.skipToContent')}
    </a>
  )
}

export default SkipLink
