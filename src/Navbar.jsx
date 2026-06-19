import { useState, useEffect } from 'react'
import logo from './assets/Olive.png'
import './Navbar.css'

const LINKS = [
  { label: 'Home',    href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients',  href: '#clients' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [visible,  setVisible]  = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Show navbar only after scrolling past hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`sn${visible ? ' sn--visible' : ''}`}>
        {/* Logo */}
        <a href="#" className="sn__logo-wrap">
          <img src={logo} alt="Olivesteel" className="sn__logo" width="150" height="50" loading="eager" />
        </a>

        {/* Hamburger — always visible */}
        <button
          className={`sn__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Slide-in drawer */}
      <div className={`sn-drawer${menuOpen ? ' sn-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="sn-drawer__head">
          <img src={logo} alt="Olivesteel" className="sn-drawer__logo" width="160" height="56" loading="lazy" />
          <button className="sn-drawer__close" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="sn-drawer__nav">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="sn-drawer__link"
              style={{ animationDelay: menuOpen ? `${0.04 + i * 0.055}s` : '0s' }}
              onClick={close}
            >
              {l.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </nav>

        <a href="#contact" className="sn-drawer__cta" onClick={close}>Get a Quote</a>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="sn-backdrop" onClick={close} />}
    </>
  )
}
