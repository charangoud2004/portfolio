import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi'
import charanImg from './charan.webp'

const socials = [
  { icon: FiGithub, href: "https://github.com/charangoud2004", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/charangoud2004/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:k.charangoud2004@gmail.com", label: "Email" }
]

const stats = [
  { value: "OCI Pro", label: "Oracle Cloud Certified Developer Professional" },
  { value: "AgentCore", label: "Multi-agent system built and deployed on AWS" },
  { value: "60K+", label: "Live tech jobs ranked by Whofy" },
  { value: "7", label: "Workspaces in the RevOps platform I built" }
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
})

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.p className="hero-status" {...fadeUp(0.05)}>
              <span className="dot" aria-hidden="true" />
              Open to opportunities
            </motion.p>

            <motion.h1 className="hero-name" {...fadeUp(0.12)}>
              Charan Goud Kasula
            </motion.h1>

            <motion.p className="hero-headline" {...fadeUp(0.2)}>
              Software engineer building <strong>AI agent platforms</strong> and{" "}
              <strong>full-stack products</strong>, from Angular and React frontends
              to cloud-native backends.
            </motion.p>

            <motion.p className="hero-meta" {...fadeUp(0.26)}>
              <span><FiBriefcase size={13} aria-hidden="true" />Associate Software Engineer @ Clothovia</span>
              <span><FiMapPin size={13} aria-hidden="true" />Hyderabad, India</span>
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.34)}>
              <a href="#projects" className="btn btn-primary">
                View my work <FiArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Resume <FiArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="hero-social">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="icon-link"
                    aria-label={label}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.figure
            className="hero-photo"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={charanImg} alt="Charan Goud Kasula" width="720" height="886" fetchPriority="high" />
            <figcaption>
              <FiAward size={14} aria-hidden="true" />
              OCI Certified Developer
            </figcaption>
          </motion.figure>
        </div>

        <motion.dl className="hero-stats" {...fadeUp(0.45)}>
          {stats.map(stat => (
            <div className="hero-stat" key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export default Hero
