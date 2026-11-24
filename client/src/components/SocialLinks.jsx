import { socials } from '../data/profile'
import { socialIcons } from './socialIcons'

/** Row of square icon buttons for GitHub, LinkedIn and email. */
function SocialLinks({ className = '', size = 16 }) {
  return (
    <div className={className}>
      {socials.map(({ id, href, label }) => {
        const Icon = socialIcons[id]
        const external = !href.startsWith('mailto')
        return (
          <a
            key={id}
            href={href}
            className="icon-link"
            aria-label={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
