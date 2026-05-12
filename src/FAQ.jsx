import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'What types of stainless steel do you work with?',
    a: 'We work with grades 304, 316, and 202 stainless steel — covering food-grade, marine-grade, and general-purpose applications. The grade is selected based on the environment, hygiene requirements, and budget.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects are completed within 2–6 weeks depending on complexity and scale. Custom fabrication jobs with detailed specifications may take longer. We provide a firm timeline at the quotation stage.',
  },
  {
    q: 'Do you offer installation services?',
    a: 'Yes. Our team handles full installation across Karnataka and neighbouring states. For large-scale projects, we coordinate site visits prior to fabrication to ensure precise fitment.',
  },
  {
    q: 'Can you handle bulk or ongoing commercial orders?',
    a: 'Absolutely. We have dedicated capacity for bulk orders and long-term supply agreements. Many of our hospitality and healthcare clients work with us on a recurring basis.',
  },
  {
    q: 'Do you provide a warranty on your products?',
    a: 'Yes — all fabricated products come with a 12-month warranty covering material defects and workmanship. Commercial kitchen equipment carries an extended 24-month warranty.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Fill out the contact form below or call us directly. We typically respond within one business day with a detailed estimate based on your specifications, dimensions, and material requirements.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq-section" id="faq">

      <div className="faq-header">
        <div className="faq-badge">
          <span className="faq-badge-dot" />
          FAQ
        </div>
        <h2 className="faq-heading">Common <em>Questions</em></h2>
        <p className="faq-sub">Everything you need to know before working with us.</p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={`faq-item${open === i ? ' faq-item--open' : ''}`}
          >
            <button className="faq-question" onClick={() => toggle(i)}>
              <span>{item.q}</span>
              <span className="faq-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
