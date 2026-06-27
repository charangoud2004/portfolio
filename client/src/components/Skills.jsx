import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Skills" />

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {skillGroups.map((group, i) => (
          <div key={i}>
            <h3 style={{
              color: "#888888",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "0.75rem"
            }}>
              {group.category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {group.skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#9CA3AF",
                    padding: "7px 16px",
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "default",
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    userSelect: "none"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(0, 188, 212, 0.15)"
                    e.currentTarget.style.borderColor = "#00BCD4"
                    e.currentTarget.style.color = "#00BCD4"
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.04)"
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 188, 212, 0.2)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
                    e.currentTarget.style.color = "#9CA3AF"
                    e.currentTarget.style.transform = "translateY(0) scale(1)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                  onMouseDown={e => {
                    e.currentTarget.style.transform = "translateY(0px) scale(0.98)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                  onMouseUp={e => {
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.04)"
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 188, 212, 0.2)"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
