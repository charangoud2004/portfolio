import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

function ProjectCard({ project }) {
  return (
    <motion.article variants={item} className="card project">
      <div className="project-top">
        <div>
          <p className="project-kind">{project.kind}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
        </div>
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
    </motion.article>
  )
}

function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        index="03"
        label="Projects"
        title="Things I've built on my own"
        subtitle="Live products I designed, built and deployed end to end."
      />
      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </motion.div>
    </SectionWrapper>
  )
}

export default Projects
