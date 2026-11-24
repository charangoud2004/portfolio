export const projects = [
  {
    id: 1,
    title: "Whofy — We hunt opportunity for you",
    description: "Co-built a platform that ranks 60,000+ live tech jobs against uploaded resumes. A scheduled pipeline pulls jobs twice a day from 260+ company career pages (Greenhouse, Lever, Workday) via APIs and web scraping, with runtime cut from 60+ to ~12 min using multithreading and multiprocessing. Includes Groq LLM resume parsing, a help chatbot and Supabase auth.",
    tags: ["React", "FastAPI", "MongoDB", "Groq LLM", "Supabase", "Web Scraping"],
    liveUrl: "https://whofy.vercel.app",
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "QR-as-a-Service",
    description: "Cloud-native SaaS for on-demand QR code generation. Serverless Azure Functions backend with Blob Storage for scalable QR image storage, and a React frontend on Azure Static Web Apps with GitHub Actions CI/CD. Designed to handle 10,000+ QR codes a month within Azure's free tier at near-zero cost.",
    tags: ["React", "Node.js", "Azure Functions", "Blob Storage", "GitHub Actions", "CI/CD"],
    liveUrl: "https://victorious-wave-01ebab000.3.azurestaticapps.net",
    githubUrl: "https://github.com/charangoud2004/qr-as-a-service",
    featured: true
  }
]
