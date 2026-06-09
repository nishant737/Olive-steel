import { useRef } from 'react'
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
import wineGatesImg  from './assets/wine gates.jpeg'
import pavoorImg     from './assets/Pavoor education trust.jpeg'
import nitkImg       from './assets/Nitk logo.png'
import milagresImg   from './assets/Milagres logo .jpeg'

const LOGOS = [
  { img: tajImg,       name: 'Taj Hotels'             },
  { img: kmcImg,       name: 'KMC Hospital'           },
  { img: alvaImg,      name: "Alva's"                 },
  { img: nitteImg,     name: 'Nitte'                  },
  { img: ONGCImg,      name: 'ONGC'                   },
  { img: oceanImg,     name: 'Ocean Pearl'            },
  { img: meilImg,      name: 'Meil'                   },
  { img: madhuvanImg,  name: 'Madhuvan'               },
  { img: idealImg,     name: 'Ideal'                  },
  { img: kiolImg,      name: 'Kiol'                   },
  { img: craveImg,     name: 'Crave'                  },
  { img: ullasImg,     name: 'Ullas'                  },
  { img: ajImg,        name: 'AJ Hospitals'           },
  { img: ratnaImg,     name: 'Sagar Ratna'            },
  { img: rnsImg,       name: 'RNS One'                },
  { img: tandooImg,    name: 'Tandoor Hotel'          },
  { img: tejasviniImg, name: 'Tejasvini Hospital'     },
  { img: yenapoyaImg,  name: 'Yenepoya Hospital'      },
  { img: bharathImg,   name: 'Bharath School'         },
  { img: cineplexImg,  name: 'Cineplex'               },
  { img: cochinImg,    name: 'Cochin Bakery'          },
  { img: wineGatesImg, name: 'Wine Gates'             },
  { img: pavoorImg,    name: 'Pavoor Education Trust' },
  { img: nitkImg,      name: 'NITK'                   },
  { img: milagresImg,  name: 'Milagres'               },
]

const ROW_ONE = LOGOS.slice(0, 13)
const ROW_TWO = LOGOS.slice(13)

function MarqueeRow({ logos, direction, rowIndex }) {
  const containerRef = useRef(null)
  const doubled = [...logos, ...logos]

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'paused'
    }
  }

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = 'running'
    }
  }

  return (
    <div
      className="cli-marquee-track"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className={`cli-marquee-inner cli-marquee-inner--${direction}`}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="cli-logo-card" title={logo.name}>
            <img src={logo.img} alt={logo.name} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="cli-section" id="clients" data-nav-dark>
      {/* 🔴 TEST ELEMENT - VERIFY DEPLOYMENT */}
      <div style={{
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
        borderBottom: '4px solid #cc0000'
      }}>
        🔴 TEST JUNE 9 - VERCEL DEPLOYMENT TEST 🔴
      </div>
      <div className="cli-inner">

        <div className="cli-header">
          <div className="cli-badge">
            <span className="cli-badge-dot" />
            Our Clients
          </div>
          <h2 className="cli-heading">
            Trusted by <em>Industry Leaders</em><br />Across India
          </h2>
          <p className="cli-sub">
            From premier hotels and hospitals to educational institutions and industrial giants — we deliver precision stainless steel solutions to names that demand the very best.
          </p>
        </div>

        {/* Marquee rows: row 1 scrolls left, row 2 scrolls right */}
        <div className="cli-marquee-wrap">
          <MarqueeRow logos={ROW_ONE} direction="left" rowIndex={1} />
          <MarqueeRow logos={ROW_TWO} direction="right" rowIndex={2} />
        </div>

      </div>
    </section>
  )
}
