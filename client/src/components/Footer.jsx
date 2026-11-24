import SocialLinks from './SocialLinks'
import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
        <SocialLinks className="footer-social" />
      </div>
    </footer>
  )
}

export default Footer
