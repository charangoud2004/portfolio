import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

function ProjectCard({ project }) {
  const isComingSoon = !project.liveUrl && !project.githubUrl

  return (
    <motion.div
      variants={cardVariants}
      style={{
        backgroundColor: isComingSoon ? "transparent" : "#111111",
        border: isComingSoon ? "2px dashed #1E1E1E" : "1px solid #1E1E1E",
        borderRadius: "12px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        cursor: isComingSoon ? "default" : "pointer",
        minHeight: "280px"
      }}
      onMouseEnter={e => {
        if (!isComingSoon) {
          e.currentTarget.style.borderColor = "#00BCD4"
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 188, 212, 0.08)"
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = isComingSoon ? "#1E1E1E" : "#1E1E1E"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div>
        <h3 style={{
          color: isComingSoon ? "#888888" : "#F5F5F5",
          fontSize: "1.2rem",
          fontWeight: 600,
          marginBottom: "0.75rem"
        }}>
          {project.title}
        </h3>
        <p style={{
          color: "#888888",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          marginBottom: "1.25rem"
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.25rem" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              backgroundColor: tag === "In Progress" ? "rgba(0, 188, 212, 0.1)" : "#1a1a1a",
              border: `1px solid ${tag === "In Progress" ? "#00BCD4" : "#1E1E1E"}`,
              color: tag === "In Progress" ? "#00BCD4" : "#B0B0B0",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "0.75rem"
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {!isComingSoon && (
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #00BCD4",
                color: "#00BCD4",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#00BCD4"
                e.currentTarget.style.color = "#0A0A0A"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.color = "#00BCD4"
              }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #555555",
                color: "#B0B0B0",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#F5F5F5"
                e.currentTarget.style.color = "#F5F5F5"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#555555"
                e.currentTarget.style.color = "#B0B0B0"
              }}
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  )
}

function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Projects" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default Projects
