import Reveal from './Reveal'

function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="section">
      <Reveal className="container">{children}</Reveal>
    </section>
  )
}

export default SectionWrapper
