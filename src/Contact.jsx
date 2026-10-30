import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { trackConversion, LABELS } from './utils/gtag'
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

          <a
            href="https://wa.me/917353374444"
            target="_blank"
            rel="noopener noreferrer"
            className="ctc-detail-item"
            onClick={() => trackConversion(LABELS.whatsappClick)}
          >
            <span className="ctc-detail-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </span>
            <div>
              <span className="ctc-detail-label">WhatsApp</span>
              <span className="ctc-detail-value">Chat on WhatsApp</span>
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
