import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function SectionWrapper({ children, id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ padding: "5rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper
