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
            I'm a Computer Science (AI & ML) graduate from Guru Nanak Institute of Technology, Hyderabad, with a CGPA of 8.16/10.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            Currently interning as a Full-Stack AI Engineer at Clothovia,
            where I built a production multi-agent systems on the AWS Bedrock AgentCore -- a supervisor orchestrator that routes requests to dedicated sub-agents communicating via the A2A protocol, with MCP-based tool servers, Cognito OAuth2 authentication, semantic memory across sessions, and full distributed tracing with OpenTelemetry into CloudWatch. Currently working on product UI using Angular.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            I am also an Oracle Certified Developer.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "2rem"
          }}>
            I'm a fresh graduate, but I come with real systems, a solid understanding of the agent infrastructure space, and the ability to move fast.
          </p>

          {/* Info pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888888" }}>
              <FiMapPin size={18} style={{ color: "#00BCD4" }} />
              <span style={{ fontSize: "0.95rem" }}>Hyderabad, India</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888888" }}>
              <HiOutlineAcademicCap size={18} style={{ color: "#00BCD4" }} />
              <span style={{ fontSize: "0.95rem" }}>B.Tech CSE (AI & ML), GNIT — 2026</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
