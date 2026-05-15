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

const PROJECTS = [
  {
    title: 'Bain Marie',
    desc: 'Stainless steel bain marie for keeping food warm at the right temperature.',
    img: bainMarie,
    style: 'Commercial',
    duration: '2 weeks',
  },
  {
    title: 'Burner',
    desc: 'Heavy-duty commercial burner built for high-performance kitchen use.',
    img: burner,
    style: 'Industrial',
    duration: '1 week',
  },
  {
    title: 'Closed Cabinet with Glass Doors',
    desc: 'Elegant steel cabinet with glass doors for organized storage and display.',
    img: closedCabinet,
    style: 'Storage',
    duration: '2 weeks',
  },
  {
    title: 'Endoscope Storage',
    desc: 'Precision-built storage unit for safe and hygienic endoscope handling.',
    img: endoscope,
    style: 'Medical',
    duration: '3 weeks',
  },
  {
    title: 'Oil Fryer',
    desc: 'Commercial-grade stainless steel oil fryer for continuous kitchen operations.',
    img: oilFryer,
    style: 'Commercial',
    duration: '1 week',
  },
  {
    title: 'Sandwich Griller',
    desc: 'Compact and efficient sandwich griller crafted in food-grade stainless steel.',
    img: sandwichGriller,
    style: 'Appliance',
    duration: '1 week',
  },
  {
    title: 'Sink',
    desc: 'Deep stainless steel sink built for heavy-duty commercial kitchen use.',
    img: sink,
    style: 'Hygiene+',
    duration: '1 week',
  },
  {
    title: 'Tawa',
    desc: 'Large flat-top stainless steel tawa ideal for high-volume cooking.',
    img: tawa,
    style: 'Commercial',
    duration: '1 week',
  },
  {
    title: 'Undercounter Chiller',
    desc: 'Space-saving undercounter chiller with stainless steel finish for kitchens.',
    img: undercounterChiller,
    style: 'Refrigeration',
    duration: '2 weeks',
  },
  {
    title: 'Vertical Chiller',
    desc: 'Full-height vertical chiller for storing perishables in commercial kitchens.',
    img: verticalChiller,
    style: 'Refrigeration',
    duration: '2 weeks',
  },
  {
    title: 'Tandoor Batti',
    desc: 'Traditional tandoor batti crafted with precision for authentic cooking.',
    img: tandoorbatti,
    style: 'Traditional',
    duration: '2 weeks',
  },
]

const N = PROJECTS.length

export default function Projects() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setActive((idx + N) % N)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setAnimating(false)
        setActive(a => (a + 1) % N)
      }
    }, 3000)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  function getPos(i) {
    const diff = ((i - active) % N + N) % N
    if (diff === 0) return 'active'
    if (diff === 1 || diff === N - (N - 1)) return 'next'
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
      </div>

      {/* Stack carousel */}
      <div
        className="proj-stage"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        {PROJECTS.map((p, i) => {
          const pos = getPos(i)
          return (
            <div
              key={i}
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
