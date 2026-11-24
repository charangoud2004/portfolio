import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { FiMapPin } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi'

function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "3rem",
        alignItems: "start"
      }}>
        {/* Bio */}
        <div>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            I'm an Associate Software Engineer at Clothovia and an Oracle Cloud Infrastructure Certified Developer Professional. I build Angular and React applications, FastAPI and Node.js backends, and multi-agent AI systems on AWS Bedrock.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            I joined Clothovia as an intern in March 2026 and moved into a full-time role in August. Today I build enterprise features for Hive Console, an AI agent management platform: the compliance center, approval workflows, audit logs and observability dashboards. I also built a revenue operations platform in Angular that spans 7 workspaces, from lead generation to customer success.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            As an intern I built and deployed a multi-agent travel planner on Amazon Bedrock AgentCore: a supervisor that routes queries over A2A to sub-agents with FastMCP tools, semantic memory, OpenTelemetry tracing and Cognito OAuth 2.0/SigV4 auth.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "2rem"
          }}>
            Outside work, I build products end to end, like Whofy, which ranks 60,000+ live tech jobs against your resume, and a serverless QR code service on Azure.
          </p>

          {/* Info pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888888" }}>
              <FiMapPin size={18} style={{ color: "#00BCD4" }} />
              <span style={{ fontSize: "0.95rem" }}>Hyderabad, India</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888888" }}>
              <HiOutlineAcademicCap size={18} style={{ color: "#00BCD4" }} />
              <span style={{ fontSize: "0.95rem" }}>B.Tech CSE (AI & ML), GNIT — 2026, CGPA 8.16</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
