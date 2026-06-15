import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
