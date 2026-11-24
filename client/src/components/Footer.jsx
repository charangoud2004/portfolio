import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: "https://github.com/charangoud2004", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/charangoud2004", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:k.charangoud2004@gmail.com", label: "Email" }
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Charan Goud Kasula · Hyderabad, India</p>
        <div className="footer-social">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="icon-link"
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
