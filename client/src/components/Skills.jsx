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
                  className="skill-pill"
                  style={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #1E1E1E",
                    color: "#F5F5F5",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    transition: "all 0.2s ease",
                    cursor: "default"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "#00BCD4"
                    e.currentTarget.style.color = "#00BCD4"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#1E1E1E"
                    e.currentTarget.style.color = "#F5F5F5"
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
