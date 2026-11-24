import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const companies = [
  {
    company: "Clothovia",
    summary: "AI agent management and revenue operations products",
    period: "Mar 2026 – Present",
    roles: [
      {
        title: "Associate Software Engineer",
        period: "Aug 2026 – Present",
        type: "Full-time",
        current: true,
        bullets: [
          "Built a revenue operations platform in Angular covering 7 workspaces, from lead generation through sales, finance, onboarding and customer success, with reusable tables, filters, dashboards and role-based auth guards.",
          "Building enterprise (B2B) features for Hive Console, including the compliance center, approval workflows, audit logs and observability dashboards."
        ],
        tags: ["Angular", "TypeScript", "SCSS", "RBAC", "Dashboards"]
      },
      {
        title: "Full Stack Engineer Intern",
        period: "Mar 2026 – Jul 2026",
        type: "Internship",
        location: "Kolkata (Remote)",
        bullets: [
          "Built and deployed a multi-agent travel planner on Amazon Bedrock AgentCore: a supervisor routes queries via A2A to two sub-agents using FastMCP tools, with semantic memory, OpenTelemetry and Cognito OAuth 2.0/SigV4 auth.",
          "Built Angular UI modules for Hive Console, an AI agent management platform with individual (B2C) and enterprise (B2B) users, including the agent builder, monitoring dashboards, libraries and role-based access."
        ],
        tags: ["Bedrock AgentCore", "A2A", "FastMCP", "OpenTelemetry", "Cognito", "Angular"]
      }
    ]
  }
]

const education = [
  {
    degree: "B.Tech Computer Science (AI & ML)",
    school: "Guru Nanak Institute of Technology, Hyderabad",
    period: "2022 – 2026",
    score: "CGPA 8.16 / 10"
  },
  {
    degree: "Intermediate (MPC)",
    school: "Sri Chaitanya Junior College, Hyderabad",
    period: "2020 – 2022",
    score: "95.7%"
  }
]

function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        index="02"
        label="Experience"
        title="Work and education"
        subtitle="Joined as an intern, promoted to a full-time engineer five months later."
      />

      {companies.map(c => (
        <article className="card company" key={c.company}>
          <header className="company-head">
            <div className="company-id">
              <span className="company-logo" aria-hidden="true">{c.company[0]}</span>
              <div>
                <h3 className="company-name">{c.company}</h3>
                <p className="company-sub">{c.summary}</p>
              </div>
            </div>
            <span className="company-period">{c.period}</span>
          </header>

          <ol className="roles">
            {c.roles.map(role => (
              <li className={`role${role.current ? " is-current" : ""}`} key={role.title}>
                <div className="role-head">
                  <h4 className="role-title">
                    {role.title}
                    <span className="role-type">{role.type}</span>
                  </h4>
                  <span className="role-period">
                    {role.period}{role.location ? ` · ${role.location}` : ""}
                  </span>
                </div>
                <ul className="role-bullets">
                  {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="chip-list">
                  {role.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                </div>
              </li>
            ))}
          </ol>
        </article>
      ))}

      <h3 className="subsection-title">Education</h3>
      <ul className="card edu-list">
        {education.map(edu => (
          <li className="edu" key={edu.degree}>
            <div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-school">{edu.school}</p>
            </div>
            <div className="edu-side">
              <strong>{edu.score}</strong>
              {edu.period}
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default Experience
