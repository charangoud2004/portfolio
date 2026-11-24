import { FiArrowUpRight } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { companies, education } from '../data/experience'

function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        index="02"
        label="Experience"
        title="Work and education"
        subtitle="Joined as an intern, promoted to a full-time engineer five months later."
      />

      {companies.map(c => (
        <article className="card company" key={c.company}>
          <header className="company-head">
            <div className="company-id">
              {c.logo ? (
                <img className="company-logo" src={c.logo} alt={`${c.company} logo`} width="44" height="44" />
              ) : (
                <span className="company-logo" aria-hidden="true">{c.company[0]}</span>
              )}
              <div>
                <h3 className="company-name">
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="company-link">
                      {c.company} <FiArrowUpRight size={15} aria-hidden="true" />
                      <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                    </a>
                  ) : c.company}
                </h3>
                <p className="company-sub">{c.summary}</p>
              </div>
            </div>
            <span className="company-period">{c.period}</span>
          </header>

          <ol className="roles">
            {c.roles.map(role => (
              <li className={`role${role.current ? " is-current" : ""}`} key={role.title}>
                <div className="role-head">
                  <h4 className="role-title">
                    {role.title}
                    <span className="role-type">{role.type}</span>
                  </h4>
                  <span className="role-period">
                    {role.period}{role.location ? ` · ${role.location}` : ""}
                  </span>
                </div>
                <ul className="role-bullets">
                  {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="chip-list">
                  {role.tags.map(t => <span className="chip" key={t}>{t}</span>)}
                </div>
              </li>
            ))}
          </ol>
        </article>
      ))}

      <h3 className="subsection-title">Education</h3>
      <ul className="card edu-list">
        {education.map(edu => (
          <li className="edu" key={edu.degree}>
            <div>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-school">{edu.school}</p>
            </div>
            <div className="edu-side">
              <strong>{edu.score}</strong>
              {edu.period}
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default Experience
