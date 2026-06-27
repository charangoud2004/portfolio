import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import useTypewriter from '../hooks/useTypewriter'

function Hero() {
  const typedText = useTypewriter([
    "Full-Stack Developer",
    "Cloud Engineer",
    "Agentic AI Builder",
    "MERN Developer"
  ])

  return (
    <section className="dot-pattern" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 1.5rem"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ maxWidth: "700px", margin: "0 auto", width: "100%", paddingLeft: "clamp(2rem, 8vw, 6rem)" }}
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #00BCD4",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
            color: "#00BCD4"
          }}
        >
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#00BCD4",
            animation: "pulse-dot 2s infinite"
          }} />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#F5F5F5",
            lineHeight: 1.1,
            marginBottom: "1rem"
          }}
        >
          Charan Goud Kasula
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "#F5F5F5",
            marginBottom: "1.25rem"
          }}
        >
          I'm a{" "}
          <span style={{ color: "#00BCD4" }}>
            {typedText}
          </span>
          <span style={{
            color: "#00BCD4",
            animation: "blink 1s step-end infinite",
            marginLeft: "2px"
          }}>|</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            color: "#888888",
            fontSize: "1.1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }}
        >
          Building scalable web apps, cloud-native systems,
          and AI-powered products from Hyderabad, India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}
        >
          <a
            href="#projects"
            className="btn-primary"
            style={{
              backgroundColor: "#00BCD4",
              color: "#0A0A0A",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              border: "none",
              cursor: "pointer"
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "#26C6DA"}
            onMouseLeave={e => e.target.style.backgroundColor = "#00BCD4"}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download="Charan_Resume.pdf"
            className="btn-secondary"
            style={{
              border: "1px solid #00BCD4",
              color: "#00BCD4",
              padding: "12px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              transition: "all 0.2s ease",
              backgroundColor: "transparent",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#00BCD4"
              e.target.style.color = "#0A0A0A"
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "transparent"
              e.target.style.color = "#00BCD4"
            }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ display: "flex", gap: "1.25rem" }}
        >
          {[
            { icon: <FiGithub size={20} />, href: "https://github.com/charangoud2004" },
            { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/charangoud2004/" },
            { icon: <FiMail size={20} />, href: "mailto:k.charangoud2004@gmail.com" }
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
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
