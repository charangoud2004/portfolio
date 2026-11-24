import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const certifications = [
  {
    badge: "OCI",
    badgeClass: "is-oracle",
    title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
    issuer: "Oracle · Professional certification",
    date: "Oct 2025",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CF8F8B0F11855E91610342867FEADC9B8399B4924FEFD197CB09353FC749B7C4"
  },
  {
    badge: "MERN",
    badgeClass: "",
    title: "Delta — Full Stack Web Development",
    issuer: "Apna College · Certificate of completion",
    date: "Dec 2024",
    url: "https://mycourse.app/YDrMJPtqP468LbE0u"
  }
]

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading index="05" label="Certifications" title="Certifications" />

      <div className="cert-list">
        {certifications.map(cert => (
          <article className="card cert" key={cert.title}>
            <span className={`cert-badge ${cert.badgeClass}`} aria-hidden="true">{cert.badge}</span>
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
