import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [cursorGlow, setCursorGlow] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 100
    const y = (event.clientY / window.innerHeight) * 100
    setCursorGlow({ x, y })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-[background] duration-150"
        style={{
          background: `radial-gradient(circle 220px at ${cursorGlow.x}% ${cursorGlow.y}%, rgba(124, 255, 201, 0.08), transparent 65%)`,
        }}
      />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
