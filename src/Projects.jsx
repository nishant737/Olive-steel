import { useEffect, useRef, useState, useCallback } from 'react'
import './Projects.css'
import bainMarie from './assets/product/Bain Marie.png'
import burner from './assets/product/Burner.png'
import closedCabinet from './assets/product/Closed Cabinet with Glass doors.png'
import endoscope from './assets/product/Endoscope-storge.png'
import oilFryer from './assets/product/Oil Fryer.png'
import sandwichGriller from './assets/product/Sandwich Griller.png'
import sink from './assets/product/Sink.jpeg'
import tawa from './assets/product/Tawa.jpeg'
import undercounterChiller from './assets/product/Undercounter Chiller.png'
import verticalChiller from './assets/product/Vertical Chiller.jpeg'
import tandoorbatti from './assets/product/tandoorbatti.jpeg'

const KITCHEN = [
  {
    title: 'Burners',
    desc: 'Heavy-duty commercial burners built for high-performance kitchen use.',
    img: burner,
  },
  {
    title: 'Tawa',
    desc: 'Large flat-top stainless steel tawa ideal for high-volume cooking.',
    img: tawa,
  },
  {
    title: 'Tandoor',
    desc: 'Traditional tandoor batti crafted with precision for authentic cooking.',
    img: tandoorbatti,
  },
  {
    title: 'Bain Marie',
    desc: 'Stainless steel bain marie for keeping food warm at the right temperature.',
    img: bainMarie,
  },
  {
    title: 'Refrigerators & Freezers',
    desc: 'Undercounter and vertical chillers for storing perishables in commercial kitchens.',
    img: undercounterChiller,
  },
  {
    title: 'Vertical Chiller',
    desc: 'Full-height vertical chiller for storing perishables in commercial kitchens.',
    img: verticalChiller,
  },
  {
    title: 'Display Counters',
    desc: 'Elegant steel display counters with glass for organized storage and display.',
    img: closedCabinet,
  },
  {
    title: 'Washing Sinks',
    desc: 'Deep stainless steel sinks built for heavy-duty commercial kitchen use.',
    img: sink,
  },
  {
    title: 'Sandwich Griller',
    desc: 'Compact and efficient sandwich griller crafted in food-grade stainless steel.',
    img: sandwichGriller,
  },
  {
    title: 'Oil Fryer',
    desc: 'Commercial-grade stainless steel oil fryer for continuous kitchen operations.',
    img: oilFryer,
  },
]

const HOSPITAL = [
  {
    title: 'Endoscope Storage',
    desc: 'Precision-built storage unit for safe and hygienic endoscope handling.',
    img: endoscope,
  },
  {
    title: 'Closed Cabinet with Glass Doors',
    desc: 'Elegant steel cabinet with glass doors for organized medical storage and display.',
    img: closedCabinet,
  },
  {
    title: 'Instrument Trolleys',
    desc: 'Stainless steel medical trolleys designed for safe and efficient instrument transport.',
    img: sink,
  },
  {
    title: 'Washing & Scrub Sinks',
    desc: 'Hygienic stainless steel scrub sinks purpose-built for hospital environments.',
    img: sink,
  },
  {
    title: 'Storage Racks & Shelving',
    desc: 'Heavy-duty stainless steel racks for sterile storage of medical supplies.',
    img: undercounterChiller,
  },
]

const TABS = [
  { key: 'kitchen',  label: 'Kitchen Appliances',  data: KITCHEN  },
  { key: 'hospital', label: 'Hospital Appliances',  data: HOSPITAL },
]

export default function Projects() {
  const [tab, setTab]           = useState('kitchen')
  const [active, setActive]     = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef   = useRef(null)
  const pausedRef  = useRef(false)
  const touchStartX = useRef(null)

  const PROJECTS = TABS.find(t => t.key === tab).data
  const N = PROJECTS.length

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setActive((idx + N) % N)
    setTimeout(() => setAnimating(false), 600)
  }, [animating, N])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setAnimating(false)
        setActive(a => (a + 1) % N)
      }
    }, 3000)
  }, [N])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  // Reset carousel when tab changes
  function handleTab(key) {
    if (key === tab) return
    clearInterval(timerRef.current)
    setAnimating(false)
    setActive(0)
    setTab(key)
  }

  function getPos(i) {
    const diff = ((i - active) % N + N) % N
    if (diff === 0) return 'active'
    if (diff === 1) return 'next'
    if (diff === N - 1) return 'prev'
    if (diff === 2) return 'far-next'
    if (diff === N - 2) return 'far-prev'
    return 'hidden'
  }

  return (
    <section className="proj-section" id="projects">

      {/* Header */}
      <div className="proj-header">
        <div className="proj-badge">
          <span className="proj-badge-dot" />
          Our Work
        </div>
        <h2 className="proj-heading">Featured <em>Products</em></h2>
        <p className="proj-sub">Built with precision, delivered on time.</p>

        {/* Tab switcher */}
        <div className="proj-tabs">
          {TABS.map(t => (
            <button
              key={t.key}
              className={`proj-tab${tab === t.key ? ' proj-tab--active' : ''}`}
              onClick={() => handleTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stack carousel */}
      <div
        className="proj-stage"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (touchStartX.current === null) return
          const diff = touchStartX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 40) goTo(diff > 0 ? (active + 1) % N : (active - 1 + N) % N)
          touchStartX.current = null
        }}
      >
        {PROJECTS.map((p, i) => {
          const pos = getPos(i)
          return (
            <div
              key={`${tab}-${i}`}
              className={`proj-card proj-card--${pos}`}
              onClick={() => pos !== 'active' && goTo(i)}
            >
              <img src={p.img} alt={p.title} className="proj-card-img" />
              <div className="proj-card-info">
                <h3 className="proj-card-title">{p.title}</h3>
                <p className="proj-card-desc">{p.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots */}
      <div className="proj-dots">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`proj-dot${i === active ? ' proj-dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
