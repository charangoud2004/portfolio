import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const experience = [
  {
    role: "Associate Software Engineer",
    company: "Clothovia",
    period: "Aug 2026 – Present",
    type: "Full-time",
    bullets: [
      "Built a revenue operations platform in Angular covering 7 workspaces, from lead generation through sales, finance, onboarding and customer success, with reusable tables, filters, dashboards and role-based auth guards.",
      "Building enterprise (B2B) features for Hive Console, including the compliance center, approval workflows, audit logs and observability dashboards."
    ]
  },
  {
    role: "Full Stack Engineer Intern",
    company: "Clothovia",
    period: "Mar 2026 – Jul 2026",
    location: "Kolkata (Remote)",
    type: "Internship",
    bullets: [
      "Built and deployed a multi-agent travel planner on Amazon Bedrock AgentCore: a supervisor routes queries via A2A to two sub-agents using FastMCP tools, with semantic memory, OpenTelemetry and Cognito OAuth 2.0/SigV4 auth.",
      "Built Angular UI modules for Hive Console, an AI agent management platform with individual (B2C) and enterprise (B2B) users, including the agent builder, monitoring dashboards, libraries and role-based access."
    ]
  }
]

const education = [
  {
    degree: "B.Tech Computer Science (AI & ML)",
    school: "Guru Nanak Institute of Technology, Hyderabad",
    period: "2022 – 2026",
    score: "CGPA: 8.16"
  }
]

function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" />

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "32px" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "7px",
          top: "8px",
          bottom: "8px",
          width: "2px",
          backgroundColor: "#00BCD4",
          opacity: 0.3
        }} />

        {experience.map((exp, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
            {/* Dot */}
            <div style={{
              position: "absolute",
              left: "-29px",
              top: "8px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#00BCD4",
              border: "3px solid #0A0A0A"
            }} />

            {/* Content */}
            <div style={{
              backgroundColor: "#111111",
              border: "1px solid #1E1E1E",
              borderRadius: "12px",
              padding: "1.5rem"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.5rem"
              }}>
                <div>
                  <h3 style={{ color: "#F5F5F5", fontSize: "1.15rem", fontWeight: 600 }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: "#00BCD4", fontSize: "0.95rem", marginTop: "2px" }}>
                    {exp.company}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{
                    display: "inline-block",
                    border: "1px solid #00BCD4",
                    color: "#00BCD4",
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    marginBottom: "4px"
                  }}>
                    {exp.type}
                  </span>
                  <p style={{ color: "#888888", fontSize: "0.85rem" }}>{exp.period}</p>
                  {exp.location && (
                    <p style={{ color: "#666666", fontSize: "0.8rem" }}>{exp.location}</p>
                  )}
                </div>
              </div>

              <ul style={{
                listStyle: "none",
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem"
              }}>
                {exp.bullets.map((bullet, j) => (
                  <li key={j} style={{
                    color: "#B0B0B0",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    paddingLeft: "16px",
                    position: "relative"
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      color: "#00BCD4"
                    }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: "3.5rem" }}>
        <h3 style={{
          fontSize: "1.4rem",
          fontWeight: 600,
          color: "#F5F5F5",
          marginBottom: "1.5rem"
        }}>
          Education
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem"
        }}>
          {education.map((edu, i) => (
            <div key={i} style={{
              backgroundColor: "#111111",
              border: "1px solid #1E1E1E",
              borderRadius: "12px",
              padding: "1.5rem",
              borderLeft: "4px solid #00BCD4",
              transition: "border-color 0.2s ease"
            }}>
              <h4 style={{ color: "#F5F5F5", fontSize: "1.05rem", fontWeight: 600, marginBottom: "6px" }}>
                {edu.degree}
              </h4>
              <p style={{ color: "#888888", fontSize: "0.9rem", marginBottom: "4px" }}>
                {edu.school}
              </p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                fontSize: "0.85rem"
              }}>
                <span style={{ color: "#666666" }}>{edu.period}</span>
                <span style={{ color: "#00BCD4", fontWeight: 600 }}>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience
