import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import { blogPosts } from '../data/blog'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

function Blog() {
  return (
    <SectionWrapper id="blog">
      <SectionHeading title="Blog" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem"
        }}
      >
        {blogPosts.map(post => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            style={{
              backgroundColor: "#111111",
              border: "1px solid #1E1E1E",
              borderRadius: "12px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.2s ease",
              minHeight: "240px"
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#00BCD4"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1E1E1E"}
          >
            <div>
              {/* Tags */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{
                    backgroundColor: "rgba(0, 188, 212, 0.08)",
                    color: "#00BCD4",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 500
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 style={{
                color: "#F5F5F5",
                fontSize: "1.05rem",
                fontWeight: 600,
                marginBottom: "0.6rem",
                lineHeight: 1.4
              }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                color: "#888888",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {post.excerpt}
              </p>
            </div>

            {/* Bottom row */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
              paddingTop: "0.75rem",
              borderTop: "1px solid #1E1E1E"
            }}>
              <span style={{ color: "#666666", fontSize: "0.75rem" }}>
                {post.readTime}
              </span>
              <span style={{
                color: "#00BCD4",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "default",
                opacity: 0.6
              }}>
                Read More →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <p style={{
        color: "#555555",
        fontSize: "0.85rem",
        textAlign: "center",
        marginTop: "2rem",
        fontStyle: "italic"
      }}>
        Full blog posts coming soon.
      </p>
    </SectionWrapper>
  )
}

export default Blog
