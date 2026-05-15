import { useState } from 'react'
import './Clients.css'

import nitteImg    from './assets/nitte-logo.jpeg'
import tajImg      from './assets/taj.png'
import madhuvanImg from './assets/madhuvan.png'
import idealImg    from './assets/ideal.png'
import ullasImg    from './assets/ullas.jpeg'
import ONGCImg     from './assets/ONGC.jpeg'
import kiolImg     from './assets/kiol.png'
import kmcImg      from './assets/kmc.jpeg'
import alvaImg     from './assets/alva.png'
import oceanImg    from './assets/oceean.jpeg'
import ajImg       from './assets/aj.png'
import craveImg    from './assets/crave.jpeg'
import ratnaImg    from './assets/ratna.png'
import rnsImg      from './assets/rns-one.png'
import meilImg     from './assets/meil.jpeg'

/*
  Everything lives inside one SVG so logos are always
  pixel-perfect on their arc — no CSS vs SVG coordinate drift.

  ViewBox: 0 0 200 110
  Arc centre: cx=100, cy=109  (just below bottom edge so base line is visible)
  Radii: inner=34, middle=56, outer=80  (SVG units)
  Logo circle radius: LR = 6.5 SVG units
*/

const CX = 100, CY = 109
const INNER = 34, MIDDLE = 56, OUTER = 80
const LR = 6.5        // logo circle radius in SVG units
const VB = '0 0 200 110'

/** Polar → SVG cartesian. angle 90°=top, 0°=left-side, 180°=right-side */
function pt(r, deg) {
  const rad = deg * Math.PI / 180
  return { x: CX - r * Math.cos(rad), y: CY - r * Math.sin(rad) }
}

const LOGOS = [
  // Inner arc (3)
  { img: tajImg,      name: 'Taj Hotels',   ...pt(INNER,  90) },
  { img: kmcImg,      name: 'KMC Hospital', ...pt(INNER,  38) },
  { img: alvaImg,     name: "Alva's",       ...pt(INNER, 142) },

  // Middle arc (5)
  { img: nitteImg,    name: 'Nitte',        ...pt(MIDDLE,  90) },
  { img: ONGCImg,     name: 'ONGC',         ...pt(MIDDLE,  54) },
  { img: oceanImg,    name: 'Ocean Pearl',  ...pt(MIDDLE, 126) },
  { img: meilImg,     name: 'Meil',         ...pt(MIDDLE,  20) },
  { img: madhuvanImg, name: 'Madhuvan',     ...pt(MIDDLE, 160) },

  // Outer arc (7)
  { img: idealImg,    name: 'Ideal',        ...pt(OUTER,  90) },
  { img: kiolImg,     name: 'Kiol',         ...pt(OUTER,  64) },
  { img: craveImg,    name: 'Crave',        ...pt(OUTER, 116) },
  { img: ullasImg,    name: 'Ullas',        ...pt(OUTER,  39) },
  { img: ajImg,       name: 'AJ Hospitals', ...pt(OUTER, 141) },
  { img: ratnaImg,    name: 'Sagar Ratna',  ...pt(OUTER,  15) },
  { img: rnsImg,      name: 'RNS One',      ...pt(OUTER, 165) },
]

const SPOKES = [15, 20, 38, 39, 54, 64, 90, 116, 126, 141, 142, 160, 165]

export default function Clients() {
  const [tooltip, setTooltip] = useState(null) // { name, x, y }

  return (
    <section className="cli-section" id="clients">

      <div className="cli-header">
        <div className="cli-badge">
          <span className="cli-badge-dot" />
          Trusted By
        </div>
        <h2 className="cli-heading">Our <em>Clients</em></h2>
        <p className="cli-sub">
          Partnering with industry leaders across hospitality, healthcare, and beyond.
        </p>
      </div>

      <div className="cli-svg-wrap">
        <svg
          viewBox={VB}
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
          onMouseLeave={() => setTooltip(null)}
        >
          <defs>
            {/* One clipPath per logo — centred at origin, applied via transform */}
            {LOGOS.map((_, i) => (
              <clipPath key={i} id={`lc${i}`}>
                <circle cx="0" cy="0" r={LR} />
              </clipPath>
            ))}

            {/* Glow gradient */}
            <radialGradient id="glow" cx="50%" cy="100%" r="60%">
              <stop offset="0%"   stopColor="#c8d48a" stopOpacity="0.13" />
              <stop offset="100%" stopColor="#c8d48a" stopOpacity="0"    />
            </radialGradient>
          </defs>

          {/* ── Rotating group: bands + arcs + spokes ── */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${CX} ${CY}`}
              to={`360 ${CX} ${CY}`}
              dur="8s"
              repeatCount="indefinite"
            />

            {/* Filled bands between arcs */}
            {[
              { o: OUTER,  i: MIDDLE },
              { o: MIDDLE, i: INNER  },
              { o: INNER,  i: 0      },
            ].map(({ o, i }, idx) => (
              <path
                key={idx}
                d={
                  i > 0
                    ? `M ${CX-o} ${CY} A ${o} ${o} 0 0 1 ${CX+o} ${CY}
                       L ${CX+i} ${CY} A ${i} ${i} 0 0 0 ${CX-i} ${CY} Z`
                    : `M ${CX-o} ${CY} A ${o} ${o} 0 0 1 ${CX+o} ${CY} L ${CX} ${CY} Z`
                }
                fill="url(#glow)"
                opacity={0.35 + idx * 0.25}
              />
            ))}

            {/* Arc ring lines */}
            {[INNER, MIDDLE, OUTER].map(r => (
              <path
                key={r}
                d={`M ${CX-r} ${CY} A ${r} ${r} 0 0 1 ${CX+r} ${CY}`}
                fill="none"
                stroke="rgba(200,212,138,0.38)"
                strokeWidth="0.4"
              />
            ))}

            {/* Spoke lines */}
            {SPOKES.map(deg => {
              const rad = deg * Math.PI / 180
              return (
                <line
                  key={deg}
                  x1={CX} y1={CY}
                  x2={CX - OUTER * Math.cos(rad)}
                  y2={CY - OUTER * Math.sin(rad)}
                  stroke="rgba(200,212,138,0.11)"
                  strokeWidth="0.28"
                />
              )
            })}
          </g>

          {/* ── Base line (static) ── */}
          <line
            x1={CX - OUTER - 8} y1={CY}
            x2={CX + OUTER + 8} y2={CY}
            stroke="rgba(200,212,138,0.35)"
            strokeWidth="0.4"
          />

          {/* ── Centre dot (static) ── */}
          <circle cx={CX} cy={CY} r="1.2" fill="#c8d48a" opacity="0.85" />

          {/* ── Logo bubbles — rendered INSIDE the SVG ── */}
          {LOGOS.map((logo, i) => (
            <g
              key={i}
              transform={`translate(${logo.x},${logo.y})`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setTooltip({ name: logo.name, x: logo.x, y: logo.y })}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Olive glow ring */}
              <circle r={LR + 0.7} fill="rgba(200,212,138,0.18)" />
              {/* White background */}
              <circle r={LR} fill="#ffffff" />
              {/* Logo image, clipped to circle */}
              <image
                href={logo.img}
                x={-LR} y={-LR}
                width={LR * 2} height={LR * 2}
                clipPath={`url(#lc${i})`}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          ))}

          {/* ── Tooltip rendered inside SVG ── */}
          {tooltip && (() => {
            const tx = Math.min(Math.max(tooltip.x, 20), 180)
            const ty = tooltip.y - LR - 3.5
            return (
              <g>
                <rect
                  x={tx - 14} y={ty - 4.5}
                  width="28" height="6"
                  rx="1.5"
                  fill="rgba(6,6,6,0.92)"
                  stroke="rgba(200,212,138,0.3)"
                  strokeWidth="0.3"
                />
                <text
                  x={tx} y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="2.6"
                  fontFamily="DM Sans, system-ui, sans-serif"
                  fontWeight="500"
                  fill="#f5f0e8"
                  letterSpacing="0.05"
                >
                  {tooltip.name}
                </text>
              </g>
            )
          })()}

        </svg>
      </div>

    </section>
  )
}
