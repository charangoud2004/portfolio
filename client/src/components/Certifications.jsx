import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { FiExternalLink } from 'react-icons/fi'

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading title="Certifications" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        {/* Oracle Certification */}
        <div style={{
          backgroundColor: "#111111",
          border: "1px solid #1E1E1E",
          borderLeft: "4px solid #00BCD4",
          borderRadius: "12px",
          padding: "2rem",
          transition: "border-color 0.2s ease"
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#00BCD4"}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#1E1E1E"
            e.currentTarget.style.borderLeftColor = "#00BCD4"
          }}
        >
          {/* Oracle label */}
          <p style={{
            color: "#888888",
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "0.75rem"
          }}>
            ORACLE
          </p>

          <h3 style={{
            color: "#F5F5F5",
            fontSize: "1.2rem",
            fontWeight: 600,
            marginBottom: "4px"
          }}>
            Oracle Cloud Infrastructure 2025
          </h3>
          <p style={{
            color: "#00BCD4",
            fontSize: "0.95rem",
            marginBottom: "1rem"
          }}>
            Certified Developer Professional
          </p>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.25rem"
          }}>
            <span style={{ color: "#888888", fontSize: "0.85rem" }}>
              Issued by Oracle
            </span>
            <span style={{ color: "#666666", fontSize: "0.85rem" }}>
              October 2025
            </span>
          </div>

          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CF8F8B0F11855E91610342867FEADC9B8399B4924FEFD197CB09353FC749B7C4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#00BCD4",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "opacity 0.2s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Credential
            <FiExternalLink size={14} />
          </a>
        </div>

        {/* Apna College MERN Stack Certification */}
        <div style={{
          backgroundColor: "#111111",
          border: "1px solid #1E1E1E",
          borderLeft: "4px solid #00BCD4",
          borderRadius: "12px",
          padding: "2rem",
          transition: "border-color 0.2s ease"
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#00BCD4"}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#1E1E1E"
            e.currentTarget.style.borderLeftColor = "#00BCD4"
          }}
        >
          {/* Apna College label */}
          <p style={{
            color: "#888888",
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "0.75rem"
          }}>
            APNA COLLEGE
          </p>

          <h3 style={{
            color: "#F5F5F5",
            fontSize: "1.2rem",
            fontWeight: 600,
            marginBottom: "4px"
          }}>
            Delta - Full Stack Web Development
          </h3>
          <p style={{
            color: "#00BCD4",
            fontSize: "0.95rem",
            marginBottom: "1rem"
          }}>
            Certificate of Completion
          </p>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.25rem"
          }}>
            <span style={{ color: "#888888", fontSize: "0.85rem" }}>
              Issued by Apna College
            </span>
            <span style={{ color: "#666666", fontSize: "0.85rem" }}>
              December 2024
            </span>
          </div>

          <a
            href="https://mycourse.app/YDrMJPtqP468LbE0u"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#00BCD4",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              transition: "opacity 0.2s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Credential
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Certifications
