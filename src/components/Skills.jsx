import React from 'react'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: "Angular (v11-21)", level: 95 },
        { name: "Microfrontends (Single-SPA, Module Fed)", level: 90 },
        { name: "Ionic & Capacitor", level: 85 },
        { name: "React & Redux", level: 85 },
        { name: "TypeScript", level: 90 }
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "Ruby on Rails", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "SQL (PostgreSQL/MySQL)", level: 85 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: "Docker", level: 85 },
        { name: "Jenkins (CI/CD)", level: 85 },
        { name: "SonarQube & Fortify", level: 80 },
        { name: "AI Agents (Copilot, Kiro, Antigravity)", level: 95 },
        { name: "Spec-Driven / Vibe Coding", level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>{t('skills.title')}</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills