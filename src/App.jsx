import { useState, useCallback, useEffect } from 'react'
import './App.css'
import './typography.css'
import SplashScreen from './SplashScreen'
import Cursor from './Cursor'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Clients from './Clients'
import HowWeWork from './HowWeWork'
import FAQ from './FAQ'
import Assurance from './Assurance'
import Contact from './Contact'
import Footer from './Footer'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'
import CookieConsent from './CookieConsent'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  const handleSplashDone = useCallback(() => setShowSplash(false), [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === '/privacy-policy') setCurrentPage('privacy')
      else if (hash === '/terms-of-service') setCurrentPage('terms')
      else setCurrentPage('home')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isLegalPage = currentPage === 'privacy' || currentPage === 'terms'

  return (
    <>
      <Cursor />
      {!isLegalPage && showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Navbar />
      {currentPage === 'privacy' && <PrivacyPolicy />}
      {currentPage === 'terms' && <TermsOfService />}
      {currentPage === 'home' && (
        <>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Clients />
          <HowWeWork />
          <FAQ />
          <Assurance />
          <Contact />
        </>
      )}
      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  )
}

export default App
