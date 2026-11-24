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
  },
  {
    id: 3,
    title: "Travello",
    tagline: "Full-stack accommodation listing platform, inspired by Airbnb",
    kind: "Side project",
    wide: true,
    summary: "Users browse stays, sign up, post their own listings with photos and leave 1–5 star reviews. Built as an MVC app on Express and MongoDB Atlas with server-rendered EJS views. Passport handles login with sessions stored in MongoDB, middleware checks that only owners can edit listings and only authors can delete reviews, Joi validates every form, and deleting a listing also removes its reviews.",
    metrics: [
      { value: "Passport", label: "session login, stored in MongoDB" },
      { value: "Owner checks", label: "on listing edits and review deletes" },
      { value: "Cloudinary", label: "image uploads through Multer" }
    ],
    tags: ["Node.js", "Express", "MongoDB Atlas", "Mongoose", "EJS", "Passport.js", "Joi", "Cloudinary", "Bootstrap"],
    liveUrl: "https://travello-v7ib.onrender.com",
    githubUrl: "https://github.com/charangoud2004/travello-travel-platform"
  }
]
