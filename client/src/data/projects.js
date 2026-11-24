export const projects = [
  {
    id: 1,
    title: "Whofy",
    tagline: "We hunt opportunity for you",
    kind: "Side project · Co-built",
    summary: "A platform that ranks live tech jobs against your uploaded resume. A scheduled pipeline pulls jobs twice a day from company career pages (Greenhouse, Lever, Workday) through APIs and web scraping, sped up with multithreading and multiprocessing. Includes Groq LLM resume parsing, a help chatbot and Supabase auth.",
    metrics: [
      { value: "60K+", label: "live jobs ranked" },
      { value: "260+", label: "career pages tracked" },
      { value: "60 → 12 min", label: "pipeline runtime" }
    ],
    tags: ["React", "FastAPI", "MongoDB", "Groq LLM", "Supabase", "Web scraping"],
    liveUrl: "https://whofy.vercel.app",
    githubUrl: null
  },
  {
    id: 2,
    title: "QR-as-a-Service",
    tagline: "Serverless QR code generation on Azure",
    kind: "Side project",
    summary: "A cloud-native SaaS for on-demand QR code generation. A serverless Azure Functions backend stores images in Blob Storage, and the React frontend ships to Azure Static Web Apps through GitHub Actions CI/CD.",
    metrics: [
      { value: "10K+", label: "QR codes a month, by design" },
      { value: "Free tier", label: "near-zero running cost" },
      { value: "CI/CD", label: "GitHub Actions deploys" }
    ],
    tags: ["React", "Node.js", "Azure Functions", "Blob Storage", "Static Web Apps"],
    liveUrl: "https://victorious-wave-01ebab000.3.azurestaticapps.net",
    githubUrl: "https://github.com/charangoud2004/qr-as-a-service"
  }
]
