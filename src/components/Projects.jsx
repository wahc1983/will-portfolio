import React from 'react'
import { useTranslation } from 'react-i18next'
import './Projects.css'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects.list.0.title'),
      description: t('projects.list.0.description'),
      image: "/api/placeholder/400/250",
      technologies: ["Ruby on Rails", "JavaScript", "AWS"]
    },
    {
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      image: "/api/placeholder/400/250",
      technologies: ["Angular", "Microfrontends", "TypeScript"],
      githubUrl: "https://github.com/wahc1983"
    },
    {
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      image: "/api/placeholder/400/250",
      technologies: ["Docker", "Jenkins", "SonarQube"],
      githubUrl: "https://github.com/wahc1983"
    },
    {
      title: t('projects.list.3.title'),
      description: t('projects.list.3.description'),
      image: "/api/placeholder/400/250",
      technologies: ["Shopify", "Magento", "Algolia"],
      githubUrl: "https://github.com/wahc1983"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className={`image-placeholder gradient-${index % 4}`}></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t('projects.buttons.github')}</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects