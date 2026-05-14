import { useState, useEffect } from 'react'
import logo from './assets/finallogoolive.png'
import heroBg from './assets/nero.jpeg'
import './Hero.css'

const HEADINGS = [
  ['Precision Steel,', 'Built to Last'],
  ['Crafted with', 'Exactitude'],
  ['Industrial Grade,', 'Built to Endure'],
  ['Quality.', 'Delivered on Time'],
]

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headIdx,  setHeadIdx]  = useState(0)
  const [phase,    setPhase]    = useState('in')

  // Heading cycle
  useEffect(() => {
    const id = setInterval(() => {
      setPhase('out')
      setTimeout(() => {
        setHeadIdx(i => (i + 1) % HEADINGS.length)
        setPhase('in')
      }, 400)
    }, 3800)
    return () => clearInterval(id)
  }, [])

  // Lock body scroll when menu is open — prevents layout shift
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <div className="hero-root" id="hero">

        {/* Background */}
        <img src={heroBg} alt="" className="hero-bg" />
        <div className="hero-overlay" />

        {/* Navbar */}
        <nav className="nav">
          <img src={logo} alt="Olive Steel" className="nav-logo" />

          <div className="nav-pill">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#clients">Clients</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-cta">Get a Quote</a>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* Hero body */}
        <div className="hero-body">
          <div className="hero-left">
            <h1 className={`hero-heading hero-heading--${phase}`}>
              {HEADINGS[headIdx].map((line, i) => (
                <span
                  key={`${headIdx}-${i}`}
                  className="hero-heading-line"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-desc">
              Backed by decades of industry experience, we specialise in fabricating
              and delivering high-quality stainless steel solutions that combine
              durability, hygiene, and operational excellence.
            </p>
            <a href="#services" className="hero-btn">
              Explore Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile menu — fixed overlay, completely outside hero-root ── */}
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`} aria-hidden={!menuOpen}>

        {/* Header row */}
        <div className="mob-menu__header">
          <img src={logo} alt="Olive Steel" className="mob-menu__logo" />
          <button className="mob-menu__close" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mob-menu__nav">
          {['about','services','projects','clients','faq'].map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className="mob-menu__link"
              style={{ animationDelay: menuOpen ? `${0.05 + i * 0.06}s` : '0s' }}
              onClick={close}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="mob-menu__cta" onClick={close}>
          Get a Quote
        </a>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mob-backdrop" onClick={close} />}
    </>
  )
}

export default Hero
