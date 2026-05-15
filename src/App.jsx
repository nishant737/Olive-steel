import { useState, useCallback } from 'react'
import SplashScreen from './SplashScreen'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Clients from './Clients'
import FAQ from './FAQ'
import Assurance from './Assurance'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const handleSplashDone = useCallback(() => setShowSplash(false), [])

  return (
    <>
      <Cursor />
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <FAQ />
      <Assurance />
      <Contact />
      <Footer />
    </>
  )
}

export default App
