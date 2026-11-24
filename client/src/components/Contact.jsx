import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { socialIcons } from './socialIcons'
import { profile, socials } from '../data/profile'

// Web3Forms public access key: it only lets the form send to my inbox, so it is safe in client code.
const WEB3FORMS_KEY = "14566db6-e6ec-4848-9212-0d770714df11"
const EMAIL = profile.email

// Email first, then LinkedIn and GitHub
const directLinks = ["email", "linkedin", "github"].map(id => socials.find(s => s.id === id))

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
    submissionData.append("access_key", WEB3FORMS_KEY)

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
            {directLinks.map(({ id, label, display, href }) => {
              const Icon = socialIcons[id]
              const external = !href.startsWith("mailto")
              return (
                <li key={id}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span className="label">{label}</span>
                    <span className="value">{display}</span>
                    <FiArrowUpRight size={15} className="arrow" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
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
