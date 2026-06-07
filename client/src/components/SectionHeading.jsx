function SectionHeading({ title }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#F5F5F5" }}>
        {title}
      </h2>
      <div style={{
        width: "48px",
        height: "3px",
        backgroundColor: "#00BCD4",
        marginTop: "8px",
        borderRadius: "2px"
      }} />
    </div>
  )
}

export default SectionHeading
