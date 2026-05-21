import { useEffect, useRef, useState, useCallback } from 'react'
import './Projects.css'

import dressingTrolley from './assets/Dressing Trolley.jpeg'
import petBathStation from './assets/Pet Bath Station.jpeg'
import cadaverTank from './assets/Cadaver Tank.jpeg'
import catheterWashSink from './assets/Catheter Wash Sink.jpeg'
import crashCart from './assets/Crash Cart.jpeg'
import disectionTable from './assets/Disection Table.jpeg'
import instrumentTrolley from './assets/Instrument Trolley.jpeg'
import kneeOperatedSink from './assets/Knee Operated Sink.jpeg'
import medicalUtilityTrolley from './assets/Medical Utility Trolley.jpeg'
import sensorScrubSink from './assets/Sensor Operated Scrub Sink.jpeg'
import sinkHighBacksplash from './assets/Sink With High Backsplash.jpeg'
import surgicalScrubSink from './assets/Surgical Scrub Sink.jpeg'
import closedCabinet from './assets/Closed Cabinet with Glass doors.png'
import sink from './assets/Sink.jpeg'
import undercounterChiller from './assets/Undercounter Chiller.png'
import pulverizer from './assets/Pulverizer.jpeg'
import shawrmaCounter from './assets/Shawrma Counter.jpeg'
import grinder from './assets/Grinder.jpeg'
import exhaust from './assets/Exhaust.jpeg'
import bainMarie from './assets/Bain Marie.png'
import burner from './assets/Burner.png'
import oilFryer from './assets/Oil Fryer.png'
import sandwichGriller from './assets/Sandwich Griller.png'
import tandoorbatti from './assets/tandoorbatti.jpeg'
import tawa from './assets/Tawa.jpeg'
import verticalChiller from './assets/Vertical Chiller.jpeg'

const KITCHEN = [
  {
    title: 'Bain Marie',
    desc: 'Commercial stainless steel bain marie for keeping food warm at precise serving temperatures.',
    img: bainMarie,
  },
  {
    title: 'Burner',
    desc: 'High-output commercial burner built for rapid heating and consistent flame in busy kitchens.',
    img: burner,
  },
  {
    title: 'Closed Cabinet With Glass Door',
    desc: 'Elegant steel cabinet with glass doors for organized display and easy-access storage.',
    img: closedCabinet,
  },
  {
    title: 'Exhaust',
    desc: 'Heavy-duty kitchen exhaust system designed to maintain clean air and ventilation in commercial kitchens.',
    img: exhaust,
  },
  {
    title: 'Grinder',
    desc: 'Commercial-grade stainless steel grinder engineered for durability and consistent performance.',
    img: grinder,
  },
  {
    title: 'Oil Fryer',
    desc: 'Professional oil fryer with precise temperature control for high-volume commercial frying.',
    img: oilFryer,
  },
  {
    title: 'Pulverizer',
    desc: 'Heavy-duty stainless steel pulverizer built for continuous commercial grinding operations.',
    img: pulverizer,
  },
  {
    title: 'Sandwich Griller',
    desc: 'Stainless steel sandwich griller delivering even heat and perfect grill marks every time.',
    img: sandwichGriller,
  },
  {
    title: 'Shawrma Counter',
    desc: 'Precision-crafted shawarma counter designed for high-volume street food and restaurant use.',
    img: shawrmaCounter,
    imgPos: 'top center',
  },
  {
    title: 'Sink',
    desc: 'Heavy-gauge stainless steel commercial sink built for rigorous kitchen washing demands.',
    img: sink,
  },
  {
    title: 'Tandoorbatti',
    desc: 'Traditional tandoor batti crafted for authentic high-heat cooking in commercial kitchens.',
    img: tandoorbatti,
  },
  {
    title: 'Tawa',
    desc: 'Large-format commercial tawa for flat breads, dosas, and high-volume griddle cooking.',
    img: tawa,
  },
  {
    title: 'Undercounter Chiller',
    desc: 'Space-saving undercounter chiller with consistent cooling for commercial refrigeration needs.',
    img: undercounterChiller,
  },
  {
    title: 'Vertical Chiller',
    desc: 'Full-height vertical chiller offering maximum storage capacity with energy-efficient cooling.',
    img: verticalChiller,
  },
]

const HOSPITAL = [
  {
    title: 'Dressing Trolley',
    desc: 'Stainless steel dressing trolley designed for hygienic and efficient wound care in clinical settings.',
    img: dressingTrolley,
  },
  {
    title: 'Pet Bath Station',
    desc: 'Purpose-built stainless steel pet bath station for safe and comfortable veterinary grooming.',
    img: petBathStation,
    imgPos: 'top center',
  },
  {
    title: 'Cadaver Tank',
    desc: 'Heavy-duty stainless steel cadaver tank engineered for secure and hygienic preservation.',
    img: cadaverTank,
  },
  {
    title: 'Catheter Wash Sink',
    desc: 'Stainless steel catheter wash sink designed for safe and hygienic cleaning of medical catheters in healthcare settings.',
    img: catheterWashSink,
    imgPos: 'top center',
  },
  {
    title: 'Crash Cart',
    desc: 'Heavy-duty stainless steel crash cart built for rapid emergency response, with secure lockable drawers and smooth mobility.',
    img: crashCart,
  },
  {
    title: 'Disection Table',
    desc: 'Precision-crafted stainless steel dissection table engineered for sterile, efficient use in medical and laboratory environments.',
    img: disectionTable,
  },
  {
    title: 'Instrument Trolley',
    desc: 'Durable stainless steel instrument trolley offering organized, hygienic storage and easy mobility across clinical areas.',
    img: instrumentTrolley,
  },
  {
    title: 'Knee Operated Sink',
    desc: 'Hands-free knee-operated sink built for infection control, enabling hygienic handwashing without touch in clinical environments.',
    img: kneeOperatedSink,
  },
  {
    title: 'Medical Utility Trolley',
    desc: 'Versatile stainless steel medical utility trolley designed for efficient transport of supplies and equipment across hospital departments.',
    img: medicalUtilityTrolley,
  },
  {
    title: 'Sensor Operated Scrub Sink',
    desc: 'Touchless sensor-operated scrub sink for hands-free surgical scrubbing, maintaining strict hygiene protocols in OT areas.',
    img: sensorScrubSink,
  },
  {
    title: 'Sink With High Backsplash',
    desc: 'Heavy-gauge stainless steel sink with a high backsplash, ideal for preventing wall contamination in clinical wash areas.',
    img: sinkHighBacksplash,
  },
  {
    title: 'Surgical Scrub Sink',
    desc: 'Purpose-built surgical scrub sink engineered for thorough pre-operative hand and arm scrubbing in sterile environments.',
    img: surgicalScrubSink,
  },
]

const TABS = [
  { key: 'kitchen',  label: 'Kitchen Equipments',  data: KITCHEN  },
  { key: 'hospital', label: 'Hospital Equipments',  data: HOSPITAL },
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
              <img src={p.img} alt={p.title} className="proj-card-img" style={p.imgPos ? { objectPosition: p.imgPos } : undefined} />
              <div className="proj-card-info">
                <h3 className="proj-card-title">{p.title}</h3>
                <p className="proj-card-desc">{p.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dots + counter */}
      <div className="proj-nav">
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
      </div>

    </section>
  )
}
