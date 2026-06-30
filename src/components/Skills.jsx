import React from 'react'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  const skills = [
    { name: 'Angular', abbr: 'Ng', roleKey: 'frontend' },
    { name: 'TypeScript', abbr: 'TS', roleKey: 'frontend' },
    { name: 'React', abbr: 'Re', roleKey: 'frontend' },
    { name: 'Ionic', abbr: 'Io', roleKey: 'frontend' },
    { name: 'Ruby on Rails', abbr: 'Rb', roleKey: 'backend' },
    { name: 'Node.js', abbr: 'Nd', roleKey: 'backend' },
    { name: 'PostgreSQL', abbr: 'Pg', roleKey: 'backend' },
    { name: 'REST APIs', abbr: 'API', roleKey: 'backend' },
    { name: 'Docker', abbr: 'Dk', roleKey: 'tools' },
    { name: 'Jenkins', abbr: 'Jk', roleKey: 'tools' },
    { name: 'SonarQube', abbr: 'SQ', roleKey: 'tools' },
    { name: 'AI Agents', abbr: 'AI', roleKey: 'tools' },
  ]

  const roleLabels = {
    frontend: t('skills.categories.frontend'),
    backend: t('skills.categories.backend'),
    tools: t('skills.categories.tools'),
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <p className="section-subtitle">{t('skills.subtitle')}</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card glass-card">
              <div className="skill-icon">{skill.abbr}</div>
              <h3>{skill.name}</h3>
              <span className="skill-role">{roleLabels[skill.roleKey]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
