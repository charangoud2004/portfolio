# Portfolio — Charan Goud Kasula

Personal portfolio site built with React 19 and Vite. Plain CSS, no UI framework.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

## Where to edit things

| What | File |
| --- | --- |
| Name, email, social links, resume path | `src/data/profile.js` |
| Work history and education | `src/data/experience.js` |
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Certifications | `src/data/certifications.js` |
| About text, hero headline and stats | `src/components/About.jsx`, `src/components/Hero.jsx` |
| Resume PDF | `public/resume.pdf` |
| Page title, description, social-preview tags | `index.html` |
| Link-preview image (1200×630) | `public/og-image.jpg` |
| Live URL (canonical, sitemap, robots) | `index.html`, `public/sitemap.xml`, `public/robots.txt` |
| Colors, fonts, spacing (design tokens) | top of `src/index.css` |

## How it fits together

- `src/App.jsx` lists the sections in page order.
- Each section is a component in `src/components/`, wrapped in `SectionWrapper`
  (section padding + scroll fade-in) with a `SectionHeading`.
- Scroll animations use `Reveal` (IntersectionObserver + a CSS transition); the hero
  uses the `.rise` CSS keyframe. Both are turned off for visitors who prefer reduced motion.
- The contact form posts to Web3Forms.
