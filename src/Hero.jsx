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
        </div>

        {/* ── Right: video circle with decorative layer + corner cards ── */}
        <div className="hero-right">
          <div className="circle-wrapper">

            {/*
              Decorative SVG — 600×600 viewBox centred on the video-circle.
              At the design midpoint the circle occupies r≈200 units,
              so all decorations are placed outside that radius.
            */}
            <svg
              className="circle-deco"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Dot grid used for the two corner patches */}
                <pattern id="heroDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.3" fill="rgba(107,124,58,0.28)" />
                </pattern>
              </defs>

              {/* ── Dot-grid patches (top-right & bottom-left corners) ── */}
              <rect x="432" y="28"  width="130" height="130" fill="url(#heroDots)" opacity="0.75" />
              <rect x="38"  y="442" width="130" height="130" fill="url(#heroDots)" opacity="0.75" />

              {/* ── Slow-rotating outer dashed ring (olive) ── */}
              <circle
                cx="300" cy="300" r="272"
                stroke="rgba(107,124,58,0.16)" strokeWidth="1.2"
                strokeDasharray="5 18"
                className="deco-ring-spin"
              />

              {/* ── Static secondary ring for depth ── */}
              <circle
                cx="300" cy="300" r="246"
                stroke="rgba(17,19,16,0.055)" strokeWidth="0.8"
              />

              {/* ── Small square markers at cardinal points on r=246 ── */}
              {/* right */}
              <rect x="541" y="294" width="10" height="10" rx="1.5" fill="rgba(107,124,58,0.32)" />
              {/* top */}
              <rect x="294" y="49"  width="10" height="10" rx="1.5" fill="rgba(107,124,58,0.32)" />
              {/* left */}
              <rect x="49"  y="294" width="10" height="10" rx="1.5" fill="rgba(107,124,58,0.32)" />
              {/* bottom */}
              <rect x="294" y="541" width="10" height="10" rx="1.5" fill="rgba(107,124,58,0.32)" />

              {/* ── L-bracket corner accents (top-right & bottom-left) ── */}
              <path d="M 490,74 L 528,74 L 528,112"
                stroke="rgba(17,19,16,0.13)" strokeWidth="1.6"
                strokeLinecap="square"
              />
              <path d="M 110,526 L 72,526 L 72,488"
                stroke="rgba(17,19,16,0.13)" strokeWidth="1.6"
                strokeLinecap="square"
              />

              {/* ── Crosshair markers (top-left & bottom-right) ── */}
              <line x1="65" y1="82"  x2="86"  y2="82"  stroke="rgba(17,19,16,0.14)" strokeWidth="1.4" />
              <line x1="75" y1="72"  x2="75"  y2="93"  stroke="rgba(17,19,16,0.14)" strokeWidth="1.4" />

              <line x1="514" y1="518" x2="535" y2="518" stroke="rgba(17,19,16,0.14)" strokeWidth="1.4" />
              <line x1="524" y1="508" x2="524" y2="529" stroke="rgba(17,19,16,0.14)" strokeWidth="1.4" />

              {/* ── Soft partial arc strokes (suggest motion, top-left & bottom-right) ── */}
              <path d="M 148,96 A 215,215 0 0 1 96,148"
                stroke="rgba(107,124,58,0.12)" strokeWidth="1" strokeLinecap="round"
              />
              <path d="M 452,504 A 215,215 0 0 1 504,452"
                stroke="rgba(107,124,58,0.12)" strokeWidth="1" strokeLinecap="round"
              />
            </svg>

            {/* Top-right corner card */}
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

            {/* Bottom-left corner card */}
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
