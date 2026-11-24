import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const STORAGE_KEY = 'theme'
const THEME_COLORS = { dark: '#0B0B0D', light: '#FAFAF8' }

function readSaved() {
  try {
    const t = localStorage.getItem(STORAGE_KEY)
    return t === 'light' || t === 'dark' ? t : null
  } catch {
    return null
  }
}

/**
 * Dark/light switch. The first theme is chosen before React loads by the inline
 * script in index.html (saved choice, else the visitor's system setting), so there is no flash.
 */
function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  // Apply the theme to <html> and the browser UI color
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
  }, [theme])

  // Follow system changes until the visitor picks a theme themselves
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = e => { if (!readSaved()) setTheme(e.matches ? 'light' : 'dark') }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const next = theme === 'dark' ? 'light' : 'dark'
  const toggle = () => {
    setTheme(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* private mode: still switches */ }
  }

  return (
    <button
      type="button"
      className="icon-link theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

export default ThemeToggle
