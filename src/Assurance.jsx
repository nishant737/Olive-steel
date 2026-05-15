import { ShieldCheck, Clock, BadgeDollarSign, Boxes, Settings2, HeadsetIcon } from 'lucide-react'
import './Assurance.css'

const ITEMS = [
  {
    icon: ShieldCheck,
    label: 'Quality Assurance',
    desc: 'Every product is manufactured to the highest standards with rigorous quality checks at each stage.',
  },
  {
    icon: Clock,
    label: 'On Time Delivery',
    desc: 'We honor every deadline — your projects stay on schedule, every time.',
  },
  {
    icon: BadgeDollarSign,
    label: 'Competitive Prices',
    desc: 'Premium stainless steel solutions crafted without compromising on affordability.',
  },
  {
    icon: Boxes,
    label: 'Inventory Management',
    desc: 'Robust stock control ensures your orders are fulfilled without delays or shortages.',
  },
  {
    icon: Settings2,
    label: 'Customized Product Offering',
    desc: 'Bespoke fabrication tailored precisely to your space, specifications, and requirements.',
  },
  {
    icon: HeadsetIcon,
    label: 'Technical Support',
    desc: 'Our expert team is always available to guide you from consultation through installation.',
  },
]

export default function Assurance() {
  return (
    <section className="asr-section">
      {/* Background decoration */}
      <div className="asr-bg-glow" />

      <div className="asr-inner">
        {/* Header */}
        <div className="asr-header">
          <div className="asr-badge">
            <span className="asr-badge-dot" />
            Our Promise
          </div>
          <h2 className="asr-heading">
            At <em>Olive</em> You Are<br />Assured Of
          </h2>
          <p className="asr-sub">
            Six pillars that define every project we deliver.
          </p>
        </div>

        {/* Grid */}
        <div className="asr-grid">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <div className="asr-card" key={i} style={{ '--i': i }}>
                <div className="asr-icon-wrap">
                  <div className="asr-icon-ring" />
                  <Icon className="asr-icon" strokeWidth={1.4} />
                </div>
                <div className="asr-text">
                  <h3 className="asr-label">{item.label}</h3>
                  <p className="asr-desc">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
