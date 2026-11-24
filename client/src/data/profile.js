// Single source of truth for personal details used across the site.
export const profile = {
  name: "Charan Goud Kasula",
  role: "Associate Software Engineer",
  company: "Clothovia",
  location: "Hyderabad, India",
  email: "k.charangoud2004@gmail.com",
  resumeUrl: "/resume.pdf"
}

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/charangoud2004", display: "github.com/charangoud2004" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/charangoud2004/", display: "linkedin.com/in/charangoud2004" },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, display: profile.email }
]
