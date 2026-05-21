import logo from './assets/finallogoolive.png'
import './Footer.css'

const NAV = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients',  href: '#clients' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#contact' },
]


export default function Footer() {
  return (
    <footer className="footer" data-nav-dark>

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Olive Steel" className="footer-logo" />
          <p className="footer-tagline">
            Precision-engineered stainless steel solutions built to outlast the industry standard.
          </p>
          <div className="footer-socials">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="footer-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {NAV.map(n => (
              <li key={n.label}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919876543210">7353374444</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:support@olivesteel.com">support@olivesteel.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>L.24, Industrial Estate, Yeyyadi, Mangaluru, Karnataka 575008</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="footer-col footer-map-col">
          <h4 className="footer-col-title">Find Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2214058458476!2d74.85805877520644!3d12.893480016585965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a173ea55c99%3A0x4d0f1bb5176e28c6!2sOlivesteel%20Solutions!5e0!3m2!1sen!2sin!4v1778740307175!5m2!1sen!2sin"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Olive Steel Location"
          />
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Olive Steel. All rights reserved.</span>
        <span>Crafted with precision.</span>
      </div>



    </footer>
  )
}
