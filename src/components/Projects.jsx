import React from 'react'
import { useTranslation } from 'react-i18next'
import './Projects.css'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects.list.0.title'),
      description: t('projects.list.0.description'),
      technologies: ['Ruby on Rails', 'JavaScript', 'AWS'],
      gradient: 0,
    },
    {
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      technologies: ['Angular', 'Microfrontends', 'TypeScript'],
      repoUrl: 'https://bitbucket.org/wahc1983/workspace/projects/DIG',
      gradient: 1,
    },
    {
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      technologies: ['Astro', 'TypeScript', 'JavaScript'],
      repoUrl: 'https://github.com/wahc1983/asynchronous-javascript-academic',
      gradient: 2,
    },
    {
      title: t('projects.list.3.title'),
      description: t('projects.list.3.description'),
      technologies: ['Angular', 'TypeScript', 'PokéAPI'],
      repoUrl: 'https://github.com/wahc1983/pokeAppAng',
      gradient: 3,
    },
    {
      title: t('projects.list.4.title'),
      description: t('projects.list.4.description'),
      technologies: ['Node.js', 'MCP SDK', 'JavaScript'],
      repoUrl: 'https://github.com/wahc1983/mcp-will',
      gradient: 0,
    },
  ]

  return (
    <section id="projects" className="projects section-alt">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image">
                <div className={`image-placeholder gradient-${project.gradient}`} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.repoUrl && (
                  <div className="project-links">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      {project.repoUrl.includes('bitbucket') ? t('contact.social.bitbucket') : t('projects.buttons.github')} →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
