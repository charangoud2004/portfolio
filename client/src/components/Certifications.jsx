import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading index="05" label="Certification" title="Verified by Oracle" />

      <article className="card cert">
        <span className="cert-badge" aria-hidden="true">OCI</span>
        <div>
          <h3 className="cert-title">Oracle Cloud Infrastructure 2025 Certified Developer Professional</h3>
          <p className="cert-sub">Issued by Oracle</p>
          <p className="cert-meta">Oct 2025</p>
        </div>
        <a
          href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=CF8F8B0F11855E91610342867FEADC9B8399B4924FEFD197CB09353FC749B7C4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
        >
          View credential <FiArrowUpRight size={14} aria-hidden="true" />
        </a>
      </article>
    </SectionWrapper>
  )
}

export default Certifications
