import React from 'react'
import { useTranslation } from 'react-i18next'
import { projects as projectsData } from '../../data/projects'
import './Projects.css'

const Projects = () => {
  const { t } = useTranslation()

  const projects = projectsData.map((project) => ({
    title: t(`projects.list.${project.listIndex}.title`),
    description: t(`projects.list.${project.listIndex}.description`),
    technologies: project.technologies,
    repoUrl: project.repoUrl,
    gradient: project.gradient,
  }))

  return (
    <section id="projects" className="projects section-alt">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle')}</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card glass-card">
              <div className="project-image">
                <div className={`image-placeholder gradient-${project.gradient}`} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.repoUrl && (
                  <div className="project-links">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      {project.repoUrl.includes('bitbucket')
                        ? t('contact.social.bitbucket')
                        : t('projects.buttons.github')}{' '}
                      →
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
