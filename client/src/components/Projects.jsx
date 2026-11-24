import { useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

function ProjectCard({ project }) {
  return (
    <article className="card project">
      <div className="project-top">
        <div>
          <p className="project-kind">{project.kind}</p>
          <h3 className="project-title">{project.title}</h3>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label={`${project.title} source code on GitHub`}
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`Open ${project.title} live demo`}
            >
              Live <FiArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="project-summary">{project.summary}</p>

      <dl className="metrics">
        {project.metrics.map(m => (
          <div className="metric" key={m.label}>
            <dt>{m.value}</dt>
            <dd>{m.label}</dd>
          </div>
        ))}
      </dl>

      <div className="chip-list">
        {project.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}
      </div>
    </article>
  )
}

function Projects() {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  // Enable/disable the arrow buttons based on scroll position
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      setCanPrev(track.scrollLeft > 4)
      setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
    }
    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Scroll by one card (card width + gap)
  const scrollByCard = dir => {
    const track = trackRef.current
    const card = track?.querySelector('.project')
    if (!card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <SectionWrapper id="projects">
      <div className="projects-head">
        <SectionHeading
          index="03"
          label="Projects"
          title="Things I've built"
          subtitle="Live products I've built and deployed."
        />
        <div className="carousel-controls">
          <button
            type="button"
            className="icon-link"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous project"
            aria-controls="projects-track"
          >
            <FiArrowLeft size={17} />
          </button>
          <button
            type="button"
            className="icon-link"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next project"
            aria-controls="projects-track"
          >
            <FiArrowRight size={17} />
          </button>
        </div>
      </div>

      <div
        id="projects-track"
        className="carousel"
        ref={trackRef}
        role="region"
        aria-label="Projects, scroll horizontally"
        tabIndex={0}
      >
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </SectionWrapper>
  )
}

export default Projects
