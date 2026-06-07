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
      }} className="about-grid">
        {/* Left - Bio */}
        <div>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            I'm a final-year B.Tech student in Computer Science (AI & ML)
            at Guru Nanak Institute of Technology, Hyderabad,
            graduating in 2026. OCI Certified Cloud Developer
            with a CGPA of 8.05.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "1.25rem"
          }}>
            Currently interning as a Full-Stack AI Engineer at Clothovia,
            where I build multi-agent AI systems on AWS Bedrock AgentCore,
            implement A2A protocol workflows, and design product UI.
            My stack is MERN for web and Python/FastAPI for AI work.
          </p>
          <p style={{
            color: "#B0B0B0",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginBottom: "2rem"
          }}>
            When I'm not coding, I'm gaming or exploring new tools
            in the AI/cloud ecosystem.
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

        {/* Right - Photo Placeholder */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            width: "280px",
            height: "320px",
            borderRadius: "16px",
            border: "2px dashed #00BCD4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 188, 212, 0.03)"
          }}>
            <span style={{
              fontSize: "4rem",
              fontWeight: 700,
              color: "#00BCD4",
              opacity: 0.6,
              letterSpacing: "4px"
            }}>
              CG
            </span>
          </div>
          <p style={{
            color: "#555555",
            fontSize: "0.8rem",
            marginTop: "12px"
          }}>
            Profile photo coming soon
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
