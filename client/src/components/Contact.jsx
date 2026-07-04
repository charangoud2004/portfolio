import { useState, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
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
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const inputStyle = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid #1E1E1E",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#F5F5F5",
    fontSize: "0.95rem",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease"
  }

  return (
    <SectionWrapper id="contact">
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <SectionHeading title="Let's Work Together" />

        <p style={{
          color: "#888888",
          fontSize: "1rem",
          lineHeight: 1.7,
          marginBottom: "2.5rem",
          marginTop: "-1.5rem"
        }}>
          Open to full-time roles, internships, and freelance projects.
          Based in Hyderabad — available for remote work worldwide.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "#00BCD4"}
            onBlur={e => e.target.style.borderColor = "#1E1E1E"}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "#00BCD4"}
            onBlur={e => e.target.style.borderColor = "#1E1E1E"}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            onFocus={e => e.target.style.borderColor = "#00BCD4"}
            onBlur={e => e.target.style.borderColor = "#1E1E1E"}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              width: "100%",
              backgroundColor: status === 'sending' ? "#0097A7" : "#00BCD4",
              color: "#0A0A0A",
              border: "none",
              borderRadius: "8px",
              padding: "14px",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              cursor: status === 'sending' ? "not-allowed" : "pointer",
              transition: "background-color 0.2s ease",
              marginTop: "0.5rem"
            }}
            onMouseEnter={e => {
              if (status !== 'sending') e.target.style.backgroundColor = "#26C6DA"
            }}
            onMouseLeave={e => {
              if (status !== 'sending') e.target.style.backgroundColor = "#00BCD4"
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status messages */}
          {status === 'success' && (
            <p style={{
              color: "#4CAF50",
              fontSize: "0.9rem",
              textAlign: "center",
              marginTop: "0.5rem"
            }}>
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{
              color: "#F44336",
              fontSize: "0.9rem",
              textAlign: "center",
              marginTop: "0.5rem"
            }}>
              Something went wrong. Email me directly at k.charangoud2004@gmail.com
            </p>
          )}
        </form>

        {/* Direct contact links */}
        <div style={{
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid #1E1E1E",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem"
        }}>
          {[
            { icon: <FiMail size={16} />, text: "k.charangoud2004@gmail.com", href: "mailto:k.charangoud2004@gmail.com" },
            { icon: <FiLinkedin size={16} />, text: "linkedin.com/in/charangoud2004", href: "https://linkedin.com/in/charangoud2004" },
            { icon: <FiGithub size={16} />, text: "github.com/charangoud2004", href: "https://github.com/charangoud2004" }
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#888888",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#00BCD4"}
              onMouseLeave={e => e.currentTarget.style.color = "#888888"}
            >
              {link.icon}
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
