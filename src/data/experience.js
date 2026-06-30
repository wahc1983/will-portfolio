import seniorImage from '../assets/illustrations/experience-senior.webp'
import semiSeniorImage from '../assets/illustrations/experience-semi-senior.webp'
import webDevImage from '../assets/illustrations/experience-web-developer.webp'

export const experiences = [
  {
    jobIndex: 0,
    technologies: ['Angular v21', 'Ionic', 'Capacitor', 'Module Fed.', 'Docker'],
    image: seniorImage,
    imageClass: 'timeline-illustration--square',
  },
  {
    jobIndex: 1,
    technologies: ['Angular (11-13)', 'Microfrontends', 'SonarQube', 'Fortify'],
    image: webDevImage,
    imageClass: 'timeline-illustration--portrait',
  },
  {
    jobIndex: 2,
    technologies: ['Ruby on Rails', 'Vanilla JS', 'MariaDB', 'MySQL', 'AWS'],
    image: semiSeniorImage,
    imageClass: 'timeline-illustration--portrait',
  },
]
