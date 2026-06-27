import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #1E1E1E",
      padding: "2.5rem 1.5rem",
      textAlign: "center"
    }}>
      {/* Hire Me CTA */}
      <p style={{
        color: "rgba(255,255,255,0.4)",
        fontSize: "0.85rem",
        marginBottom: "1rem"
      }}>
        Open to full-time roles & freelance projects
      </p>
      <a
        href="#contact"
        style={{
          display: "inline-block",
          background: "#00BCD4",
          color: "#0A0A0A",
          fontWeight: 700,
          fontSize: "1rem",
          padding: "0.75rem 2.5rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          transition: "all 0.2s ease",
          marginBottom: "2rem"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#00ACC1"
          e.currentTarget.style.transform = "translateY(-2px)"
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,188,212,0.35)"
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#00BCD4"
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        Hire Me →
      </a>

      {/* Social icons */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        marginBottom: "1.25rem"
      }}>
        {[
          { icon: <FiGithub size={22} />, href: "https://github.com/charangoud2004" },
          { icon: <FiLinkedin size={22} />, href: "https://linkedin.com/in/charangoud2004" },
          { icon: <FiMail size={22} />, href: "mailto:k.charangoud2004@gmail.com" }
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              color: "#888888",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#00BCD4"}
            onMouseLeave={e => e.currentTarget.style.color = "#888888"}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Attribution */}
      <p style={{
        color: "#888888",
        fontSize: "0.85rem",
        marginBottom: "0.4rem"
      }}>
        Designed & Built by Charan Goud Kasula
      </p>

      {/* Copyright */}
      <p style={{
        color: "#555555",
        fontSize: "0.75rem"
      }}>
        © 2026 — Hyderabad, India
      </p>
    </footer>
  )
}

export default Footer
