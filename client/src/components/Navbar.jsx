import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const links = ["About", "Experience", "Projects", "Skills", "Certifications", "Blog", "Contact"]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 100,
      backdropFilter: "blur(10px)",
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

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}
          className="desktop-nav">
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
        </ul>
      )}
    </nav>
  )
}

export default Navbar