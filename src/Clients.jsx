import nitteImg from './assets/nitte-logo.jpeg'
import tajImg from './assets/taj.png'
import madhuvanImg from './assets/madhuvan.png'
import idealImg from './assets/ideal.png'
import ullasImg from './assets/ullas.jpeg'
import ONGCImg from './assets/ONGC.jpeg'
import kiolImg from './assets/kiol.png'
import kmcImg from './assets/kmc.jpeg'
import alvaImg from './assets/alva.png'
import oceanImg from './assets/oceean.jpeg'
import ajImg from './assets/aj.png'
import craveImg from './assets/crave.jpeg'
import ratnaImg from './assets/ratna.png'
import rnsImg from './assets/rns-one.png'
import meilImg from './assets/meil.jpeg'


import './Clients.css'

const CLIENTS = [
  { name: 'Nitte University', abbr: 'TH', img: nitteImg },
  { name: 'Alvas Education Foundation ',  abbr: 'ITC', img: alvaImg},
  { name: 'ONGC',    abbr: 'OR', img: ONGCImg},
  { name: 'Kiol Limited',  abbr: 'LH', img: kiolImg},
  { name: 'KMC Hospital',   abbr: 'CCD', img: kmcImg},
  { name: 'The Ocean Pearl', abbr: 'MH', img: oceanImg},
  { name: 'Taj',     abbr: 'BG', img: tajImg},
  { name: 'Madhuvans',  abbr: 'PE', img:madhuvanImg },
  { name: 'Ideal Ice Cream',   abbr: 'MR', img: idealImg },
  { name: 'Ullas Ice Cream',  abbr: 'AP', img: ullasImg },
  { name: 'Meil',  abbr: 'AP', img: meilImg },
  { name: 'Crave',  abbr: 'AP', img: craveImg },
  { name: 'AJ Hospitals',  abbr: 'AP', img: ajImg },
  { name: 'Sagar Ratna',  abbr: 'AP', img: ratnaImg },
  { name: 'RNS One',  abbr: 'AP', img: rnsImg },
]

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients'       },
  { value: '15+',  label: 'Years of Experience' },
  { value: '99%',  label: 'Client Satisfaction' },
]

// Triple for seamless loop
const ROW1 = [...CLIENTS, ...CLIENTS, ...CLIENTS]
const ROW2 = [...CLIENTS].reverse()
const ROW2x = [...ROW2, ...ROW2, ...ROW2]

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

      {/* Stats */}
      <div className="cli-stats">
        {STATS.map((s, i) => (
          <div key={s.label} className="cli-stat">
            <span className="cli-stat__value">{s.value}</span>
            <span className="cli-stat__label">{s.label}</span>
            {i < STATS.length - 1 && <div className="cli-stat-divider" />}
          </div>
        ))}
      </div>

      {/* Marquee rows — full bleed, no horizontal padding */}
      <div className="cli-marquee-section">

        {/* Row 1 — left */}
        <div className="cli-marquee-wrap">
          <div className="cli-marquee cli-marquee--fwd">
            {ROW1.map((c, i) => (
              <div key={i} className="cli-card">
                {c.img
                  ? <img src={c.img} alt={c.name} className="cli-card__logo-img" />
                  : <span className="cli-card__abbr">{c.abbr}</span>
                }
                <span className="cli-card__name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="cli-marquee-wrap">
          <div className="cli-marquee cli-marquee--rev">
            {ROW2x.map((c, i) => (
              <div key={i} className="cli-card">
                {c.img
                  ? <img src={c.img} alt={c.name} className="cli-card__logo-img" />
                  : <span className="cli-card__abbr">{c.abbr}</span>
                }
                <span className="cli-card__name">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}
