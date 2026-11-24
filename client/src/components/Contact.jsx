import { useState } from 'react'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const EMAIL = "k.charangoud2004@gmail.com"

const directLinks = [
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/charangoud2004", href: "https://linkedin.com/in/charangoud2004" },
  { icon: FiGithub, label: "GitHub", value: "github.com/charangoud2004", href: "https://github.com/charangoud2004" }
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const submissionData = new FormData(e.target)
    submissionData.append("access_key", "14566db6-e6ec-4848-9212-0d770714df11")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      })
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <SectionWrapper id="contact">
      <div className="contact-grid">
        <div className="contact-intro">
          <SectionHeading
            index="06"
            label="Contact"
            title="Let's work together"
            subtitle="Open to full-time roles and freelance projects. Based in Hyderabad, available for remote work worldwide."
          />

          <ul className="contact-links">
            {directLinks.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Icon size={17} aria-hidden="true" />
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                  <FiArrowUpRight size={15} className="arrow" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="card form">
          <div className="form-row">
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about the role or project"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="form-status ok">Message sent. I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status err">
                Something went wrong. Email me directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
