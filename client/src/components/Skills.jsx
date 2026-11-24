import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading index="04" label="Skills" title="Tools I use day to day" />

      <div className="card skills">
        {skillGroups.map(group => (
          <div className="skill-row" key={group.category}>
            <h3>{group.category}</h3>
            <div className="chip-list">
              {group.skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
