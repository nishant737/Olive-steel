import { useState, useEffect, useCallback, useRef } from 'react'
import logo from './assets/finallogoolive.png'
import heroVideo from './assets/herovedio.mp4'
import './Hero.css'

const HEADINGS = [
  ['Precision', 'Stainless Steel', 'Solutions'],
  ['Built for Modern', 'Commercial', 'Kitchens'],
  ['Engineering', 'Strength with', 'Innovation'],
  ['Quality.', 'Commitment.', 'Timely Delivery.'],
]

const STATIC_DESC =
  'Delivering high-performance stainless steel fabrication and industrial-grade solutions engineered for durability, hygiene, and operational excellence.'

// Orbit period = 2 × INTERVAL so each image hits the front showcase position
// exactly when its paired headings are active. img-b starts mid-cycle (back).
const INTERVAL   = 4500
const HEADING_MS = 420

function Hero() {
  const idxRef = useRef(0)
  const [headingIdx, setHeadingIdx] = useState(0)
  const [headPhase,  setHeadPhase]  = useState('in')
  const [menuOpen,   setMenuOpen]   = useState(false)

  const advance = useCallback(() => {
    setHeadPhase('out')
    setTimeout(() => {
      const next = (idxRef.current + 1) % HEADINGS.length
      idxRef.current = next
      setHeadingIdx(next)
      setHeadPhase('in')
    }, HEADING_MS)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, INTERVAL)
    return () => clearInterval(id)
  }, [advance])

  return (
    <div className="hero-root">

      {/* ── Navbar ── */}
      <nav className="nav">
        <img src={logo} alt="Olive Steel" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get a Quote</a>

        {/* Hamburger — mobile only */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Mobile drawer */}
        <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      </nav>

      {/* ── Hero body ── */}
      <div className="hero-body">

        {/* ── Left: text ── */}
        <div className="hero-left">
          <p className="hero-static-heading">Industrial Grade Fabrication</p>

          <div className={`slide-content slide-${headPhase}`}>
            <h1 className="hero-heading">
              {HEADINGS[headingIdx].map((line, i) => (
                <span
                  key={`${headingIdx}-${i}`}
                  className="heading-line"
                  style={{ animationDelay: `${i * 0.08 + 0.05}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <p className="hero-desc">{STATIC_DESC}</p>
          <a href="#contact" className="hero-btn">Get a Quote</a>
        </div>

        {/* ── Right: large olive circle bg + overlapping video circle ── */}
        <div className="hero-right">

          {/* Large solid olive circle — bleeds off the right edge */}
          <div className="circle-bg" />

          {/* Video circle straddling the left edge of circle-bg */}
          <div className="circle-wrapper">

            <div className="circle-card circle-card--tr">
              <span className="circle-card__value">15+</span>
              <span className="circle-card__label">Years of Excellence</span>
            </div>

            <div className="video-circle">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="circle-card circle-card--bl">
              <span className="circle-card__value">500+</span>
              <span className="circle-card__label">Projects Delivered</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
