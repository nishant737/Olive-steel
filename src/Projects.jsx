import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
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

const CARD_W = 420
const GAP    = 24
const STEP   = CARD_W + GAP
const TOTAL  = PROJECTS.length

// Triple-clone so arrows always have cards ahead/behind
const ITEMS  = [...PROJECTS, ...PROJECTS, ...PROJECTS]

export default function Projects() {
  const trackRef   = useRef(null)
  const tweenRef   = useRef(null)
  const posRef     = useRef(0)           // current x offset
  const [active, setActive] = useState(0)

  // Compute active dot from current position
  function updateDot(x) {
    const idx = (Math.round(-x / STEP) % TOTAL + TOTAL) % TOTAL
    setActive(idx)
  }

  // Seamless infinite auto-scroll
  function startLoop() {
    if (tweenRef.current) tweenRef.current.kill()
    const startX   = posRef.current
    const loopDist = STEP * TOTAL          // one full set width
    const duration = (loopDist / STEP) * 4 // 4 s per card

    tweenRef.current = gsap.to(posRef, {
      current: startX - loopDist,
      duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        current: v => {
          // keep position within [-loopDist, 0] window
          let val = parseFloat(v)
          val = ((val % -loopDist) - loopDist) % -loopDist
          return val
        },
      },
      onUpdate: () => {
        gsap.set(trackRef.current, { x: posRef.current })
        updateDot(posRef.current)
      },
    })
  }

  function pause()  { tweenRef.current?.pause() }
  function resume() { tweenRef.current?.play()  }

  function jump(dir) {
    pause()
    const target = posRef.current + dir * -STEP
    gsap.to(posRef, {
      current: target,
      duration: 0.55,
      ease: 'power3.inOut',
      onUpdate: () => {
        gsap.set(trackRef.current, { x: posRef.current })
        updateDot(posRef.current)
      },
      onComplete: () => {
        // Normalise so we never drift too far
        posRef.current = ((posRef.current % (-STEP * TOTAL)) - STEP * TOTAL) % (-STEP * TOTAL)
        gsap.set(trackRef.current, { x: posRef.current })
        startLoop()
      },
    })
  }

  useEffect(() => {
    // start mid-set so left arrow always works
    posRef.current = -STEP * TOTAL
    gsap.set(trackRef.current, { x: posRef.current })
    startLoop()

    return () => tweenRef.current?.kill()
  }, [])

  return (
    <section className="proj-section" id="projects">

      {/* Header */}
      <div className="proj-header">
        <div className="proj-badge">
          <span className="proj-badge-dot" />
          Projects
        </div>
        <h2 className="proj-heading">Our <em>Work</em></h2>
        <p className="proj-sub">Built with Precision</p>
      </div>

      {/* Carousel row */}
      <div
        className="proj-carousel-row"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Left arrow */}
        <button className="proj-arrow proj-arrow--left" onClick={() => jump(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Track */}
        <div className="proj-viewport">
          <div className="proj-track" ref={trackRef}>
            {ITEMS.map((p, i) => (
              <div key={i} className="proj-card">
                <img src={p.img} alt={p.title} className="proj-card-img" />

                <div className="proj-pills">
                  <span className="proj-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    {p.style}
                  </span>
                  <span className="proj-pill">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {p.duration}
                  </span>
                </div>

                <div className="proj-card-overlay">
                  <h3 className="proj-card-title">{p.title}</h3>
                  <p className="proj-card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button className="proj-arrow proj-arrow--right" onClick={() => jump(1)} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="proj-dots">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`proj-dot${i === active ? ' proj-dot--active' : ''}`}
            onClick={() => {
              pause()
              const target = -(STEP * TOTAL + STEP * i)
              gsap.to(posRef, {
                current: target,
                duration: 0.6,
                ease: 'power3.inOut',
                onUpdate: () => {
                  gsap.set(trackRef.current, { x: posRef.current })
                  updateDot(posRef.current)
                },
                onComplete: () => {
                  posRef.current = target
                  startLoop()
                },
              })
            }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
