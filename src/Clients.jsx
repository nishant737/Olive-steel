import './Clients.css'

import nitteImg      from './assets/nitte-logo.jpeg'
import tajImg        from './assets/taj.png'
import madhuvanImg   from './assets/madhuvan.png'
import idealImg      from './assets/ideal.png'
import ullasImg      from './assets/ullas.jpeg'
import ONGCImg       from './assets/ONGC.jpeg'
import kiolImg       from './assets/kiol.png'
import kmcImg        from './assets/kmc.jpeg'
import alvaImg       from './assets/alva.png'
import oceanImg      from './assets/oceean.jpeg'
import ajImg         from './assets/aj.png'
import craveImg      from './assets/crave.jpeg'
import ratnaImg      from './assets/ratna.png'
import rnsImg        from './assets/rns-one.png'
import meilImg       from './assets/meil.jpeg'
import tandooImg     from './assets/Tandoo Hotel.png'
import tejasviniImg  from './assets/Tejasvini Hospital .jpeg'
import yenapoyaImg   from './assets/yenapoya.png'
import bharathImg    from './assets/bharath school.jpeg'
import cineplexImg   from './assets/cineplex.png'
import cochinImg     from './assets/cochin bakery .png'

const ALL_LOGOS = [
  { img: tajImg,       name: 'Taj Hotels'         },
  { img: kmcImg,       name: 'KMC Hospital'       },
  { img: alvaImg,      name: "Alva's"             },
  { img: nitteImg,     name: 'Nitte'              },
  { img: ONGCImg,      name: 'ONGC'               },
  { img: oceanImg,     name: 'Ocean Pearl'        },
  { img: meilImg,      name: 'Meil'               },
  { img: madhuvanImg,  name: 'Madhuvan'           },
  { img: idealImg,     name: 'Ideal'              },
  { img: kiolImg,      name: 'Kiol'               },
  { img: craveImg,     name: 'Crave'              },
  { img: ullasImg,     name: 'Ullas'              },
  { img: ajImg,        name: 'AJ Hospitals'       },
  { img: ratnaImg,     name: 'Sagar Ratna'        },
  { img: rnsImg,       name: 'RNS One'            },
  { img: tandooImg,    name: 'Tandoor Hotel'      },
  { img: tejasviniImg, name: 'Tejasvini Hospital' },
  { img: yenapoyaImg,  name: 'Yenepoya Hospital'  },
  { img: bharathImg,   name: 'Bharath School'     },
  { img: cineplexImg,  name: 'Cineplex'           },
  { img: cochinImg,    name: 'Cochin Bakery'      },
]

/*
  Desktop: 3-col × 5-row ghost grid per side.
  Gaps give the scattered floating look.
*/
const LEFT_POSITIONS = [
  [0, 0], [2, 0],
  [0, 1], [1, 1],
  [1, 2], [2, 2],
  [0, 3], [2, 3],
  [0, 4], [1, 4], [2, 4],
]
const RIGHT_POSITIONS = [
  [0, 0], [2, 0],
  [1, 1], [2, 1],
  [0, 2], [1, 2],
  [1, 3], [2, 3],
  [0, 4], [2, 4],
]

const LEFT_LOGOS  = ALL_LOGOS.slice(0, 11)
const RIGHT_LOGOS = ALL_LOGOS.slice(11, 21)

function DesktopGrid({ logos, positions, side }) {
  return (
    <div className={`cli-grid-wrap cli-grid-wrap--${side}`}>
      <div className="cli-texture" aria-hidden="true" />
      <div className="cli-grid">
        {logos.map((logo, i) => {
          const [col, row] = positions[i] || [0, 0]
          return (
            <div
              key={i}
              className="cli-logo-cell"
              style={{
                gridColumn: col + 1,
                gridRow:    row + 1,
                animationDelay: `${(col * 0.3 + row * 0.18).toFixed(2)}s`,
              }}
              title={logo.name}
            >
              <img src={logo.img} alt={logo.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="cli-section" id="clients">

      {/* ── Desktop layout: logos | center | logos ── */}
      <div className="cli-inner cli-desktop">
        <DesktopGrid logos={LEFT_LOGOS}  positions={LEFT_POSITIONS}  side="left"  />

        <div className="cli-center">
          <div className="cli-badge">
            <span className="cli-badge-dot" />
            Trusted By
          </div>
          <h2 className="cli-heading">
            Trusted by <em>industry</em><br />leaders across India
          </h2>
          <p className="cli-sub">
            Partnering with the best in hospitality, healthcare,
            education, and beyond — delivering precision steel
            solutions they rely on.
          </p>
        </div>

        <DesktopGrid logos={RIGHT_LOGOS} positions={RIGHT_POSITIONS} side="right" />
      </div>

      {/* ── Mobile layout: center text + unified grid ── */}
      <div className="cli-mobile">
        <div className="cli-center">
          <div className="cli-badge">
            <span className="cli-badge-dot" />
            Trusted By
          </div>
          <h2 className="cli-heading">
            Trusted by <em>industry</em><br />leaders across India
          </h2>
          <p className="cli-sub">
            Partnering with the best in hospitality, healthcare,
            education, and beyond — delivering precision steel
            solutions they rely on.
          </p>
        </div>

        {/* Single unified grid — all 21 logos in 3 columns */}
        <div className="cli-mobile-grid">
          {ALL_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="cli-logo-cell"
              style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }}
              title={logo.name}
            >
              <img src={logo.img} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
