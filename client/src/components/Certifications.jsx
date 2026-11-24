import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading index="05" label="Certifications" title="Certifications" />

      <div className="cert-list">
        {certifications.map(cert => (
          <article className="card cert" key={cert.title}>
            {cert.logo ? (
              <img className="cert-logo" src={cert.logo} alt={`${cert.issuerName} logo`} width="64" height="64" loading="lazy" />
            ) : (
              <span className="cert-badge" aria-hidden="true">{cert.badge}</span>
            )}
            <div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-sub">{cert.issuer}</p>
              <p className="cert-meta">{cert.date}</p>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`View credential: ${cert.title}`}
            >
              View credential <FiArrowUpRight size={14} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Certifications
