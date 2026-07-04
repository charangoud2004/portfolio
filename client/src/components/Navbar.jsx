import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"

const links = ["About", "Experience", "Projects", "Skills", "Certifications"]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 999,
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      backgroundColor: "rgba(10,10,10,0.8)",
      borderBottom: "1px solid rgba(0,188,212,0.1)"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        {/* Logo */}
        <span style={{ color: "#00BCD4", fontWeight: 700, fontSize: "1.25rem" }}>
          CG
        </span>

        {/* Desktop Links + GitHub Icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{
                  color: "#F5F5F5",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s"
                }}
                  onMouseEnter={e => e.target.style.color = "#00BCD4"}
                  onMouseLeave={e => e.target.style.color = "#F5F5F5"}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/charangoud2004"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.5)",
              transition: "color 0.2s ease",
              display: "flex",
              alignItems: "center"
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#00BCD4"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
          >
            <FiGithub size={18} />
          </a>
          <a
            href="#contact"
            style={{
              backgroundColor: "#00BCD4",
              color: "#0A0A0A",
              padding: "8px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.85rem",
              transition: "all 0.2s ease",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "#26C6DA"}
            onMouseLeave={e => e.target.style.backgroundColor = "#00BCD4"}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none", color: "#00BCD4", cursor: "pointer", fontSize: "1.5rem" }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul style={{
          listStyle: "none",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderTop: "1px solid rgba(0,188,212,0.1)"
        }}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                style={{ color: "#F5F5F5", textDecoration: "none" }}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: "#00BCD4",
                color: "#0A0A0A",
                padding: "8px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.85rem",
                display: "inline-block",
                transition: "all 0.2s ease"
              }}>
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar