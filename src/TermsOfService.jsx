import { useEffect } from 'react'
import './LegalPages.css'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="legal-section" id="terms-of-service">
      <div className="legal-container">
        <h1 className="legal-heading">Terms of Service</h1>
        <p className="legal-last-updated">Last updated: June 23, 2024</p>

        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website (the "Site") operated by Olivesteel ("we," "our," "us," or "Company"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you are not permitted to use this Site.
          </p>

          <h2>2. Site Purpose and Content</h2>
          <p>
            This Site is provided to display information about Olivesteel's stainless steel products, services, and business information. The content on this Site is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any products or services.
          </p>
          <p>
            All product descriptions, specifications, and pricing information are subject to change without notice. We reserve the right to modify, update, or discontinue any information on this Site at any time.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content on this Site, including text, graphics, logos, images, videos, and software, is the exclusive property of Olivesteel or our licensors and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not copy, reproduce, modify, distribute, display, or transmit any content on this Site without our prior written permission, except for personal, non-commercial use. Unauthorized use of any content is prohibited.
          </p>

          <h2>4. Use License and Restrictions</h2>
          <p>We grant you a limited, non-exclusive, revocable license to access and use this Site for personal purposes only.</p>

          <p>You agree not to:</p>
          <ul>
            <li>Reproduce, distribute, or transmit any content without permission</li>
            <li>Modify, adapt, or create derivative works from the Site or its content</li>
            <li>Hack, crack, or attempt unauthorized access to the Site or its systems</li>
            <li>Use automated tools (scraping, bots, crawlers) to extract data from the Site</li>
            <li>Transmit any viruses, malware, or harmful code</li>
            <li>Engage in any activity that disrupts or interferes with the Site's function</li>
            <li>Impersonate any person or entity</li>
            <li>Use the Site for illegal purposes or in violation of applicable laws</li>
            <li>Spam, harass, or engage in abusive behavior</li>
            <li>Reverse engineer or attempt to discover source code or proprietary information</li>
          </ul>

          <h2>5. Contact Form and User-Submitted Content</h2>
          <p>
            When you submit information through our contact form, you provide us with permission to use your contact information to respond to your inquiry and communicate with you about our products and services.
          </p>
          <p>
            You represent and warrant that:
          </p>
          <ul>
            <li>All information you provide is accurate, complete, and truthful</li>
            <li>You have the right to provide such information</li>
            <li>You are at least 18 years of age or have parental consent</li>
            <li>Your submission does not violate any applicable laws or third-party rights</li>
          </ul>

          <p>
            We reserve the right to remove, edit, or refuse any submission that violates these Terms or is inappropriate.
          </p>

          <h2>6. Third-Party Links and Services</h2>
          <p>
            Our Site may contain links to third-party websites, including Google Maps, social media platforms, and other external services. We do not control these third-party sites and are not responsible for their content, accuracy, or practices.
          </p>
          <p>
            Your use of third-party services is governed by their own terms and privacy policies. We recommend reviewing their terms before using these services.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            <strong>THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong> WE DISCLAIM ALL EXPRESS AND IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Merchantability or fitness for a particular purpose</li>
            <li>Non-infringement of intellectual property rights</li>
            <li>Accuracy, completeness, or reliability of content</li>
            <li>Uninterrupted or error-free operation of the Site</li>
            <li>Security or freedom from malware or harmful code</li>
          </ul>

          <p>
            We do not warrant that the Site or services will be available 24/7 or error-free. Technology failures, maintenance, and unforeseen circumstances may cause temporary unavailability.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OLIVESTEEL SHALL NOT BE LIABLE FOR:</strong>
          </p>
          <ul>
            <li>Indirect, incidental, consequential, or punitive damages</li>
            <li>Lost profits, revenue, or business opportunities</li>
            <li>Loss of data or information</li>
            <li>Any damages arising from your use of or reliance on the Site</li>
          </ul>

          <p>
            Even if we have been advised of the possibility of such damages, our total liability shall not exceed the greater of $100 or the amount you have paid to us in the past 12 months.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Olivesteel and its officers, directors, employees, and agents from any claims, damages, losses, or costs arising from:
          </p>
          <ul>
            <li>Your use of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of applicable laws</li>
            <li>Your infringement of any third-party rights</li>
            <li>Your submitted content or communications</li>
          </ul>

          <h2>10. Prohibited Activities</h2>
          <p>You are prohibited from:</p>
          <ul>
            <li>Violating any applicable federal, state, or international law</li>
            <li>Harassing, threatening, or defaming any person</li>
            <li>Transmitting content that is obscene, offensive, or illegal</li>
            <li>Attempting unauthorized access to the Site's systems or networks</li>
            <li>Distributing unsolicited commercial messages or spam</li>
            <li>Collecting or harvesting email addresses or personal data</li>
            <li>Conducting phishing attacks or fraudulent schemes</li>
          </ul>

          <h2>11. Privacy and Data Protection</h2>
          <p>
            Your use of the Site and submission of information is governed by our Privacy Policy. Please review our Privacy Policy to understand our data practices, third-party service integrations, and your privacy rights.
          </p>

          <h2>12. HTTPS and Security</h2>
          <p>
            This Site is served over HTTPS with industry-standard encryption. However, no transmission over the internet is 100% secure. You are responsible for maintaining the confidentiality of your passwords and account information.
          </p>

          <h2>13. Cookies and Tracking</h2>
          <p>
            Our Site does not use cookies for tracking or analytics. Third-party services (such as Google reCAPTCHA and Google Fonts) may use cookies or similar technologies. Please refer to their privacy policies for details on their tracking practices.
          </p>

          <h2>14. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Modifications are effective immediately upon posting to the Site. Your continued use of the Site after modifications constitutes acceptance of the modified Terms. We recommend reviewing these Terms periodically.
          </p>

          <h2>15. Termination</h2>
          <p>
            We reserve the right to terminate your access to the Site at any time, without notice, if we determine that you have violated these Terms or engaged in prohibited activity.
          </p>

          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, that provision shall be removed or modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2>17. Governing Law and Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of Karnataka, India, without regard to its conflict of laws principles. Any legal action or proceeding arising out of or relating to these Terms or your use of the Site shall be brought exclusively in the courts located in Mangaluru, Karnataka, India.
          </p>

          <h2>18. Dispute Resolution</h2>
          <p>
            Before initiating legal proceedings, we encourage you to contact us to resolve any disputes informally. If informal resolution fails, you agree to attempt resolution through arbitration or mediation as per applicable laws before pursuing litigation.
          </p>

          <h2>19. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Olivesteel regarding your use of the Site and supersede all prior agreements, understandings, and negotiations.
          </p>

          <h2>20. Contact Information</h2>
          <p>
            If you have questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@olivesteel.com">support@olivesteel.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+917353374444">+91 7353 374 444</a></li>
            <li><strong>Address:</strong> L.24, Industrial Estate, Yeyyadi, Mangaluru, Karnataka 575008, India</li>
          </ul>

          <hr className="legal-divider" />

          <p className="legal-footer-note">
            By accessing and using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </section>
  )
}
