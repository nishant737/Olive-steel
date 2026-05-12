import './Clients.css'

const CLIENTS = [
  { name: 'Taj Hotels',        logo: 'TH' },
  { name: 'ITC Group',         logo: 'ITC' },
  { name: 'Oberoi Resorts',    logo: 'OR' },
  { name: 'Lulu Hypermarket',  logo: 'LH' },
  { name: 'Café Coffee Day',   logo: 'CCD' },
  { name: 'Manipal Hospitals', logo: 'MH' },
  { name: 'Brigade Group',     logo: 'BG' },
  { name: 'Prestige Estates',  logo: 'PE' },
]

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '15+',  label: 'Years of Experience' },
  { value: '99%',  label: 'Client Satisfaction' },
]

// Duplicate for seamless marquee
const ROW = [...CLIENTS, ...CLIENTS]

export default function Clients() {
  return (
    <section className="cli-section" id="clients">

      {/* Header */}
      <div className="cli-header">
        <div className="cli-badge">
          <span className="cli-badge-dot" />
          Trusted By
        </div>
        <h2 className="cli-heading">Our <em>Clients</em></h2>
        <p className="cli-sub">Partnering with industry leaders across hospitality, healthcare, and beyond.</p>
      </div>

      {/* Stats row */}
      <div className="cli-stats">
        {STATS.map(s => (
          <div key={s.label} className="cli-stat">
            <span className="cli-stat__value">{s.value}</span>
            <span className="cli-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Marquee strip */}
      <div className="cli-marquee-wrap">
        <div className="cli-marquee">
          {ROW.map((c, i) => (
            <div key={i} className="cli-logo-card">
              <span className="cli-logo-abbr">{c.logo}</span>
              <span className="cli-logo-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
