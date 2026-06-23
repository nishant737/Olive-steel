import { useEffect } from 'react'
import './LegalPages.css'
import { ObfuscatedEmail, ObfuscatedPhoneText } from './components/ObfuscatedContact'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="legal-section" id="privacy-policy">
      <div className="legal-container">
        <h1 className="legal-heading">Privacy Policy</h1>
        <p className="legal-last-updated">Last updated: June 23, 2024</p>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            Olivesteel ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any related services, applications, and products offered through our website (the "Site").
          </p>
          <p>
            We comply with the Digital Personal Data Protection (DPDP) Act, 2023, and other applicable privacy laws including GDPR, CCPA, and international privacy regulations.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information you voluntarily provide and information collected automatically:</p>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Contact Form Data:</strong> When you submit our contact form, we collect your name, email address, phone number (optional), and message content</li>
            <li><strong>Communication Data:</strong> Any communications you send to our email address (support@olivesteel.com) or phone number</li>
            <li><strong>Location Data:</strong> If you interact with our Google Maps embed, Google may collect your location and interaction data</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Google reCAPTCHA:</strong> When you use our contact form, Google reCAPTCHA processes interaction data to verify you are human. This is subject to Google's Privacy Policy and Terms of Service</li>
            <li><strong>Server Logs:</strong> Our hosting provider (Vercel) may collect standard server logs including IP addresses, browser type, pages visited, and timestamps</li>
            <li><strong>Font Services:</strong> Google Fonts may collect your IP address and user-agent data when loading fonts from fonts.googleapis.com</li>
          </ul>

          <h2>3. Third-Party Services and Data Processing</h2>
          <p>Our Site uses the following third-party services that may process your data:</p>

          <h3>3.1 EmailJS</h3>
          <p>
            Contact form submissions are transmitted to EmailJS, a third-party email delivery service. EmailJS processes and delivers your message to our email. Your data is transmitted over HTTPS encryption. EmailJS's privacy policy is available at <a href="https://www.emailjs.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.emailjs.com/legal/privacy/</a>
          </p>

          <h3>3.2 Google reCAPTCHA</h3>
          <p>
            We use Google reCAPTCHA to protect our contact form from automated abuse. Google reCAPTCHA collects your IP address, user-agent, and interaction data. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </p>

          <h3>3.3 Google Maps</h3>
          <p>
            Our contact page includes an embedded Google Maps showing our business location. Google Maps may collect your location data and interaction history. Google's privacy policy applies to this data.
          </p>

          <h3>3.4 Google Fonts</h3>
          <p>
            We use Google Fonts for typography. Google Fonts may collect your IP address and user-agent information. This is standard web font delivery.
          </p>

          <h3>3.5 Vercel Hosting</h3>
          <p>
            Our website is hosted on Vercel. Vercel may collect server logs, request data, and analytics. See Vercel's privacy policy at <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
          </p>

          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you requested information and quotes</li>
            <li>To improve our website and services</li>
            <li>To protect against fraud and abuse</li>
            <li>To comply with legal obligations</li>
            <li>To send you transactional communications (e.g., confirmation of your message)</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            Contact form submissions are retained in our email inbox and EmailJS's systems for business and legal purposes. You may request deletion of your data as outlined in the "Your Rights" section below. Server logs are typically retained for 30-90 days by our hosting provider.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>Under applicable privacy laws (DPDP Act 2023, GDPR, CCPA), you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
            <li><strong>Portability:</strong> Request your data in a portable format</li>
            <li><strong>Objection:</strong> Object to processing of your data</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
          </ul>

          <p>
            To exercise these rights, please contact us at <ObfuscatedEmail /> with your request and proof of identity. We will respond within 30 days (or as required by applicable law).
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data:
          </p>
          <ul>
            <li>All data transmission uses HTTPS encryption</li>
            <li>Contact form data is transmitted over encrypted channels to EmailJS</li>
            <li>Email communications are secured through standard email encryption</li>
            <li>Access to collected data is restricted to authorized personnel only</li>
          </ul>
          <p>
            However, no data transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>

          <h2>8. Data Location and Transfer</h2>
          <p>
            Your data may be processed and stored in India and other countries where our service providers operate. By using our Site, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete such information.
          </p>

          <h2>10. Cookies and Tracking</h2>
          <p>
            Our Site currently does not use cookies for tracking or analytics. Third-party services (Google reCAPTCHA, Google Fonts, Google Maps) may use cookies or similar technologies. Please refer to their privacy policies for details.
          </p>
          <p>
            If we implement analytics or tracking technologies in the future, we will update this policy and obtain appropriate consent.
          </p>

          <h2>11. Contact Information Disclosure</h2>
          <p>
            Our business contact information (phone number, email address, physical address) is publicly displayed for customer communication purposes. This information is not protected from automated collection. If you have concerns about spam, we recommend using our contact form instead of direct email/phone contact when possible.
          </p>

          <h2>12. Policy Updates</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last Updated" date. Your continued use of the Site constitutes your acceptance of the updated Privacy Policy.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <ObfuscatedEmail /></li>
            <li><strong>Phone:</strong> <ObfuscatedPhoneText /></li>
            <li><strong>Address:</strong> L.24, Industrial Estate, Yeyyadi, Mangaluru, Karnataka 575008, India</li>
          </ul>

          <h2>14. Additional Rights for Specific Jurisdictions</h2>

          <h3>14.1 India (DPDP Act 2023)</h3>
          <p>
            Under the Digital Personal Data Protection Act, 2023, you have the right to grievance redressal. If you are not satisfied with our response to your data request, you can file a complaint with the Data Protection Board.
          </p>

          <h3>14.2 EU (GDPR)</h3>
          <p>
            If you are in the EU, you have the right to lodge a complaint with your local data protection authority.
          </p>

          <h3>14.3 California (CCPA)</h3>
          <p>
            If you are a California resident, you have specific rights under the California Consumer Privacy Act, including the right to know, delete, and opt-out rights.
          </p>

          <hr className="legal-divider" />

          <p className="legal-footer-note">
            This Privacy Policy is effective as of the date stated above and applies to all visitors and users of our Site.
          </p>
        </div>
      </div>
    </section>
  )
}
