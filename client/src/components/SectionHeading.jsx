function SectionHeading({ index, label, title, subtitle }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{index} / {label}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
