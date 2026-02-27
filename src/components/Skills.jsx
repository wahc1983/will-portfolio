import React from 'react'
import { useTranslation } from 'react-i18next'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "CSS3", level: 85 },
        { name: "HTML5", level: 90 }
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Webpack", level: 65 }
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