import { useEffect, useRef, useState, useCallback } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Industrial Kitchen Suite',
    desc: 'Full stainless steel build for a high-volume restaurant chain.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    style: 'Commercial',
    duration: '4 weeks',
  },
  {
    title: 'The Modern Touch',
    desc: 'Modern kitchen with quartz counters and white cabinetry.',
    img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80',
    style: 'Modern',
    duration: '3 weeks',
  },
  {
    title: 'Steel Lab Workstation',
    desc: 'Precision fabricated workbenches for a pharmaceutical lab.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    style: 'Industrial',
    duration: '6 weeks',
  },
  {
    title: 'Luxury Open Concept',
    desc: 'Refined concept with marble surfaces and custom steel fixtures.',
    img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80',
    style: 'Luxury',
    duration: '2 weeks',
  },
  {
    title: 'Coastal Prep Kitchen',
    desc: 'Hygienic stainless steel prep area for a seafood processing plant.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    style: 'Hygiene+',
    duration: '5 weeks',
  },
  {
    title: 'Architectural Facade',
    desc: 'Custom steel cladding and handrails for a hospitality venue.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    style: 'Architectural',
    duration: '8 weeks',
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
        <h2 className="proj-heading">Featured <em>Projects</em></h2>
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

              <div className="proj-card-glass">
                <div className="proj-pills">
                  <span className="proj-pill">{p.style}</span>
                  <span className="proj-pill proj-pill--time">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {p.duration}
                  </span>
                </div>
              </div>

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
