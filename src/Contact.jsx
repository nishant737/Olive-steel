import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { trackConversion, LABELS } from '../utils/gtag'
import './Contact.css'

const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [form,         setForm]         = useState(EMPTY)
  const [captchaToken, setCaptchaToken] = useState(null)
  const [status,       setStatus]       = useState('idle') // idle | sending | sent | error
  const recaptchaRef = useRef(null)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    if (RECAPTCHA_KEY && !captchaToken) return

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name:  form.name,
          user_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      )
      trackConversion(LABELS.contactForm)
      setStatus('sent')
      setForm(EMPTY)
      setCaptchaToken(null)
      recaptchaRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  const canSubmit = (!RECAPTCHA_KEY || captchaToken) && form.name && form.email && form.message

  return (
    <section className="ctc-section" id="contact">

      {/* Left: info */}
      <div className="ctc-left">
        <div className="ctc-badge">
          <span className="ctc-badge-dot" />
          Get in Touch
        </div>
        <h2 className="ctc-heading">Let's Build<br />Something <em>Great</em></h2>
        <p className="ctc-desc">
          Have a project in mind? Fill out the form and our team will get back
          to you within one business day with a detailed quote.
        </p>
        <p className="ctc-privacy-notice">
          Your information is protected. We use industry-standard encryption and only process your data to respond to your inquiry.
          <a href="#/privacy-policy"> Read our Privacy Policy</a> to learn more about how we handle your data.
        </p>

        <div className="ctc-details">
          <a href="tel:+917353374444" className="ctc-detail-item">
            <span className="ctc-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <div>
              <span className="ctc-detail-label">Phone</span>
              <span className="ctc-detail-value">+91 7353 374 444</span>
            </div>
          </a>

          <a href="mailto:support@olivesteel.com" className="ctc-detail-item">
            <span className="ctc-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <div>
              <span className="ctc-detail-label">Email</span>
              <span className="ctc-detail-value">support@olivesteel.com</span>
            </div>
          </a>

          <div className="ctc-detail-item">
            <span className="ctc-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <div>
              <span className="ctc-detail-label">Location</span>
              <span className="ctc-detail-value">L.24, Industrial Estate, Yeyyadi, Mangaluru, Karnataka 575008</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="ctc-right">
        {status === 'sent' ? (
          <div className="ctc-success">
            <span className="ctc-success-icon">✓</span>
            <h3>Message Sent!</h3>
            <p>We'll be in touch within one business day.</p>
            <button className="ctc-reset" onClick={() => setStatus('idle')}>
              Send Another
            </button>
          </div>
        ) : (
          <form className="ctc-form" onSubmit={submit} noValidate>
            <div className="ctc-row">
              <div className="ctc-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handle} required />
              </div>
              <div className="ctc-field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handle} required />
              </div>
            </div>
            <div className="ctc-field">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows={5} placeholder="Describe your project, materials needed, timeline…" value={form.message} onChange={handle} required />
            </div>

            {RECAPTCHA_KEY ? (
              <div className="ctc-captcha">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_KEY}
                  onChange={token => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
            ) : (
              <p style={{ fontSize: '0.8rem', color: '#999', margin: '8px 0' }}>
                ⚠️ reCAPTCHA not configured (VITE_RECAPTCHA_SITE_KEY missing)
              </p>
            )}

            {status === 'error' && (
              <p className="ctc-error">Something went wrong. Please try again.</p>
            )}

            <button type="submit" className="ctc-submit" disabled={!canSubmit || status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              {status !== 'sending' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              )}
            </button>
          </form>
        )}
      </div>

    </section>
  )
}
