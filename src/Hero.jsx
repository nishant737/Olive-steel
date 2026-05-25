import { useState, useEffect, useRef, useCallback } from 'react'
import logo from './assets/finallogoolive.png'
import heroBg from './assets/nero.jpeg'
import heroVideo from './assets/hero section video 01.mp4'
import './Hero.css'

const HEADINGS = [
  ['Precision Steel,', 'Built to Last'],
  ['Crafted with', 'Exactitude'],
  ['Industrial Grade,', 'Built to Endure'],
  ['Quality.', 'Delivered on Time'],
]

function Hero({ onReady }) {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [headIdx,       setHeadIdx]       = useState(0)
  const [phase,         setPhase]         = useState('in')
  const [contentReady,  setContentReady]  = useState(false)
  const [navVisible,    setNavVisible]    = useState(false)
  const [videoEnded,    setVideoEnded]    = useState(false)
  const videoRef = useRef(null)

  // Set playback speed and handle autoplay fallback
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.playbackRate = 2.5

    // If autoplay is blocked or video can't play → show content immediately
    const fallback = setTimeout(() => {
      if (!contentReady) revealContent()
    }, 8000)

    vid.addEventListener('timeupdate', () => {
      if (!vid.duration) return
      const remaining = vid.duration - vid.currentTime
      if (remaining < 2) {
        const t = remaining / 2
        vid.playbackRate = Math.max(1.2, t * 2.5)
      }
      // Reveal navbar in last 0.5s
      if (remaining <= 0.5) setNavVisible(true)
    })

    vid.play().catch(() => revealContent())

    return () => clearTimeout(fallback)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function revealContent() {
    setNavVisible(true)
    setVideoEnded(true)
    setTimeout(() => {
      setContentReady(true)
      onReady?.()
    }, 200)
  }

  // Heading cycle — only after content is visible
  useEffect(() => {
    if (!contentReady) return
    const id = setInterval(() => {
      setPhase('out')
      setTimeout(() => {
        setHeadIdx(i => (i + 1) % HEADINGS.length)
        setPhase('in')
      }, 400)
    }, 3800)
    return () => clearInterval(id)
  }, [contentReady])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <div className="hero-root" id="hero" data-nav-dark>

        {/* ── Video background ── */}
        <video
          ref={videoRef}
          className="hero-video"
          src={heroVideo}
          muted
          playsInline
          preload="metadata"
          onEnded={revealContent}
          poster={heroBg}
        />


        {/* Dark overlay */}
        <div className={`hero-overlay${contentReady ? ' hero-overlay--content' : ''}`} />

        {/* ── Navbar — always visible ── */}
        <nav className={`nav${navVisible ? ' nav--visible' : ' nav--hidden'}`}>
          <img src={logo} alt="Olive Steel" className="nav-logo" width="180" height="60" loading="eager" />

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

        {/* ── Hero body — revealed after video ── */}
        <div className="hero-body">
          <div className="hero-left">
            <h1 className={`hero-heading hero-heading--${phase} ${contentReady ? 'hero-el--visible' : 'hero-el'}`} style={{ '--d': '0.1s' }}>
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
            <p className={`hero-desc ${contentReady ? 'hero-el--visible' : 'hero-el'}`} style={{ '--d': '0.38s' }}>
              Backed by decades of industry experience, we specialise in fabricating
              and delivering high-quality stainless steel solutions that combine
              durability, hygiene, and operational excellence.
            </p>
            <a href="#services" className={`hero-btn ${contentReady ? 'hero-el--visible' : 'hero-el'}`} style={{ '--d': '0.62s' }}>
              Explore Products
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile full-screen overlay menu ── */}
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mob-menu__header">
          <img src={logo} alt="Olive Steel" className="mob-menu__logo" width="160" height="52" loading="lazy" />
          <button className="mob-menu__close" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="mob-menu__nav">
          {[
            { label: 'Home',     href: '#hero'     },
            { label: 'About',    href: '#about'    },
            { label: 'Services', href: '#services' },
            { label: 'Projects', href: '#projects' },
            { label: 'Clients',  href: '#clients'  },
            { label: 'FAQ',      href: '#faq'      },
            { label: 'Contact',  href: '#contact'  },
          ].map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              className="mob-menu__link"
              style={{ animationDelay: menuOpen ? `${0.04 + i * 0.055}s` : '0s' }}
              onClick={close}
            >
              {label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </nav>

        <a href="#contact" className="mob-menu__cta" onClick={close}>
          Get a Quote
        </a>
      </div>

      {menuOpen && <div className="mob-backdrop" onClick={close} />}
    </>
  )
}

export default Hero
