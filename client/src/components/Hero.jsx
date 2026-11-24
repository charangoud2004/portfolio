import { FiArrowRight, FiArrowUpRight, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi'
import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'
import charanImg from './charan.webp'

const stats = [
  { value: "Abstrive", label: "AI agent management platform for B2B and B2C users" },
  { value: "AgentCore", label: "Multi-agent system built and deployed on AWS" },
  { value: "60K+", label: "Live tech jobs ranked by Whofy" },
  { value: "7", label: "Workspaces in the RevOps platform I built" }
]

// Elements with .rise animate in on page load; --d staggers them (see index.css)
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 className="hero-name rise" style={{ '--d': '80ms' }}>
              {profile.name}
            </h1>

            <p className="hero-headline rise" style={{ '--d': '200ms' }}>
              Software engineer building <strong>AI agent platforms</strong> and{" "}
              <strong>full-stack products</strong>, from Angular and React frontends
              to cloud-native backends.
            </p>

            <p className="hero-meta rise" style={{ '--d': '260ms' }}>
              <span><FiBriefcase size={13} aria-hidden="true" />{profile.role} @ {profile.company}</span>
              <span><FiMapPin size={13} aria-hidden="true" />{profile.location}</span>
            </p>

            <div className="hero-actions rise" style={{ '--d': '340ms' }}>
              <a href="#projects" className="btn btn-primary">
                View my work <FiArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Resume <FiArrowUpRight size={16} aria-hidden="true" />
              </a>
              <SocialLinks className="hero-social" size={17} />
            </div>
          </div>

          <figure className="hero-photo rise" style={{ '--d': '150ms' }}>
            <img src={charanImg} alt={profile.name} width="720" height="886" fetchPriority="high" />
            <figcaption>
              <FiAward size={14} aria-hidden="true" />
              OCI Certified Developer
            </figcaption>
          </figure>
        </div>

        <dl className="hero-stats rise" style={{ '--d': '450ms' }}>
          {stats.map(stat => (
            <div className="hero-stat" key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
