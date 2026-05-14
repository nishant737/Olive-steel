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
  { name: 'Nitte University',           img: nitteImg   },
  { name: 'Alvas Education Foundation', img: alvaImg    },
  { name: 'ONGC',                        img: ONGCImg    },
  { name: 'Kiol Limited',               img: kiolImg    },
  { name: 'KMC Hospital',               img: kmcImg     },
  { name: 'The Ocean Pearl',            img: oceanImg   },
  { name: 'Taj',                         img: tajImg     },
  { name: 'Madhuvans',                  img: madhuvanImg},
  { name: 'Ideal Ice Cream',            img: idealImg   },
  { name: 'Ullas Ice Cream',            img: ullasImg   },
  { name: 'Meil',                        img: meilImg    },
  { name: 'Crave',                       img: craveImg   },
  { name: 'AJ Hospitals',               img: ajImg      },
  { name: 'Sagar Ratna',                img: ratnaImg   },
  { name: 'RNS One',                    img: rnsImg     },
]

const ROW1  = [...CLIENTS,          ...CLIENTS,          ...CLIENTS         ]
const ROW2  = [...[...CLIENTS].reverse(), ...[...CLIENTS].reverse(), ...[...CLIENTS].reverse()]
const ROW3  = [...CLIENTS.slice(5), ...CLIENTS, ...CLIENTS, ...CLIENTS.slice(0,5)]

export default function Clients() {
  return (
    <section className="cli-section" id="clients">

      <div className="cli-header">
        <div className="cli-badge">
          <span className="cli-badge-dot" />
          Trusted By
        </div>
        <h2 className="cli-heading">Our <em>Clients</em></h2>
        <p className="cli-sub">Partnering with industry leaders across hospitality, healthcare, and beyond.</p>
      </div>

      {/* Diagonal marquee area */}
      <div className="cli-diagonal-wrap">
        <div className="cli-diagonal-inner">

          <div className="cli-row cli-row--fwd">
            {ROW1.map((c, i) => (
              <div key={i} className="cli-logo">
                <img src={c.img} alt={c.name} />
              </div>
            ))}
          </div>

          <div className="cli-row cli-row--rev">
            {ROW2.map((c, i) => (
              <div key={i} className="cli-logo">
                <img src={c.img} alt={c.name} />
              </div>
            ))}
          </div>

          <div className="cli-row cli-row--fwd cli-row--slow">
            {ROW3.map((c, i) => (
              <div key={i} className="cli-logo">
                <img src={c.img} alt={c.name} />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}
