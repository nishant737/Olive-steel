import { useState, useEffect } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('olivesteel-cookie-consent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('olivesteel-cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('olivesteel-cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__container">
        <div className="cookie-consent__content">
          <h3 className="cookie-consent__title">Cookie & Data Consent</h3>
          <p className="cookie-consent__text">
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and improve our services.
            We also use third-party services (Google Fonts, Google Maps, EmailJS, reCAPTCHA) that may collect data as outlined in our
            <a href="#/privacy-policy" className="cookie-consent__link"> Privacy Policy</a>.
          </p>
          <p className="cookie-consent__subtext">
            By accepting, you consent to our use of cookies and third-party services in accordance with applicable laws
            (GDPR, CCPA, DPDP Act 2023).
          </p>
        </div>

        <div className="cookie-consent__actions">
          <button onClick={handleReject} className="cookie-consent__btn cookie-consent__btn--reject">
            Reject
          </button>
          <button onClick={handleAccept} className="cookie-consent__btn cookie-consent__btn--accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
