import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { FiArrowUpRight } from "react-icons/fi"

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certification" }
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = ["top", ...links.map(l => l.id), "contact"]
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`} aria-label="Main">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={close}>
          <span className="nav-mark" aria-hidden="true">CG</span>
          Charan Goud Kasula
        </a>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link${active === link.id ? " is-active" : ""}`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            Resume <FiArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-primary btn-sm">Contact</a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen(o => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      <div className="nav-mobile" id="mobile-menu">
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={close}
                className={`nav-link${active === link.id ? " is-active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" onClick={close}>
              Resume
            </a>
            <a href="#contact" className="btn btn-primary" onClick={close}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
