import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const facts = [
  { label: "Role", value: "Associate Software Engineer", detail: "Clothovia · since Aug 2026" },
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Education", value: "B.Tech CSE (AI & ML)", detail: "GNIT, 2026 · CGPA 8.16 / 10" },
  { label: "Certified", value: "OCI 2025 Developer Professional", detail: "Oracle · Oct 2025" },
  { label: "Focus", value: "Angular, React, FastAPI, Node.js", detail: "Agentic AI on AWS Bedrock" }
]

function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading index="01" label="About" title="Full-stack engineer with a focus on AI agent platforms." />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm an <strong>Associate Software Engineer at Clothovia</strong> and an Oracle Cloud
            Infrastructure Certified Developer Professional. I build Angular and React applications,
            FastAPI and Node.js backends, and multi-agent AI systems on AWS Bedrock.
          </p>
          <p>
            I joined Clothovia as an intern in March 2026 and moved into a full-time role in August.
            Today I build enterprise features for <strong>Abstrive</strong>, an AI agent management
            platform: the compliance center, approval workflows, audit logs and observability dashboards.
            I also built a revenue operations platform in Angular that spans 7 workspaces, from lead
            generation to customer success.
          </p>
          <p>
            As an intern I built and deployed a <strong>multi-agent travel planner on Amazon Bedrock
            AgentCore</strong>: a supervisor that routes queries over A2A to sub-agents with FastMCP tools,
            semantic memory, OpenTelemetry tracing and Cognito OAuth 2.0/SigV4 auth.
          </p>
          <p>
            Outside work, I build products end to end, like Whofy, which ranks 60,000+ live tech jobs
            against your resume, and a serverless QR code service on Azure.
          </p>
        </div>

        <dl className="card facts">
          {facts.map(fact => (
            <div className="facts-row" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>
                {fact.value}
                {fact.detail && <span>{fact.detail}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  )
}

export default About
