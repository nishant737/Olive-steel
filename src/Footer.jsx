import logo from './assets/whitelogo.png'
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
          <img src={logo} alt="Olive Steel" className="footer-logo" width="260" height="180" loading="lazy" />
          <p className="footer-tagline">
            Precision-engineered stainless steel solutions built to outlast the industry standard.
          </p>
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
              <a href="tel:+917353374444">7353374444</a>
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
        
        <span className="footer-managed">
  Managed by{" "}
  
    <strong>Yatharth</strong>
  
</span>


        <span>Crafted with precision.</span>
      </div>



    </footer>
  )
}
