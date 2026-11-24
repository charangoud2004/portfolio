/** The "C" mark: white C on a teal circle. Same drawing as public/favicon.svg. */
function Logo({ size = 30 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#0D9488" />
      <path d="M41.6 22.4A13.5 13.5 0 1 0 41.6 41.6" fill="none" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

export default Logo
