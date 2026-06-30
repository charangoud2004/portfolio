import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Charan Goud Kasula — Full-Stack & AI Engineer</title>
        <meta
          name="description"
          content="Portfolio of Charan Goud Kasula, Full-Stack Developer, Cloud Engineer and Agentic AI Builder based in Hyderabad, India."
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default App