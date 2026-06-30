import React from 'react'
import { useTranslation } from 'react-i18next'
import { skills as skillsData } from '../../data/skills'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()

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
          {skillsData.map((skill) => (
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
