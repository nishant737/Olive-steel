import { useState, useCallback } from 'react'
import SplashScreen from './SplashScreen'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Clients from './Clients'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const handleSplashDone = useCallback(() => setShowSplash(false), [])

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
