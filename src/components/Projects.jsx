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
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: t('projects.list.3.title'),
      description: t('projects.list.3.description'),
      image: "/api/placeholder/400/250",
      technologies: ["React", "CSS3", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#"
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
                <div className="image-placeholder">
                  <span>{t('projects.imageAlt')}</span>
                </div>
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
                  <a href={project.liveUrl} className="btn btn-primary">{t('projects.buttons.demo')}</a>
                  <a href={project.githubUrl} className="btn btn-secondary">{t('projects.buttons.github')}</a>
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