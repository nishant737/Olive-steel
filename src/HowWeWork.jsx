import { useEffect, useRef, useState } from 'react'
import './HowWeWork.css'

const STEPS = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We begin with an in-depth discussion to understand your requirements, space constraints, and project goals — ensuring every detail is captured before we proceed.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our team drafts precise technical drawings and material specifications tailored to your needs, giving you a clear picture of the final product before fabrication begins.',
  },
  {
    number: '03',
    title: 'Fabrication',
    description:
      'Using state-of-the-art machinery at our Mangaluru facility, we fabricate each piece to exact tolerances — combining skilled craftsmanship with modern manufacturing.',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description:
      'Every unit undergoes a rigorous multi-point quality inspection before leaving our facility, ensuring it meets both our standards and yours.',
  },
  {
    number: '05',
    title: 'Delivery & Installation',
    description:
      'We handle end-to-end logistics and on-site installation, ensuring a seamless fit and leaving your space ready for operation — on time, every time.',
  },
]

export default function HowWeWork() {
  const trailRef     = useRef(null)
  const trailWrapRef = useRef(null)
  const stepRefs     = useRef([])
  const [active, setActive] = useState(new Array(STEPS.length).fill(false))
  const rafRef = useRef(null)

  useEffect(() => {
    const trail = trailRef.current
    const wrap  = trailWrapRef.current
    if (!trail || !wrap) return

    function update() {
      rafRef.current = null

      const wrapRect = wrap.getBoundingClientRect()
      const winH     = window.innerHeight

      const progress = Math.min(1, Math.max(0,
        (winH - wrapRect.top) / (wrapRect.height + winH * 0.4)
      ))
      trail.style.transform = `scaleY(${progress})`

      const trailTipOffset = wrapRect.height * progress

      setActive(prev => {
        const next = prev.slice()
        let changed = false
        stepRefs.current.forEach((el, i) => {
          if (!el) return
          const nodeTop = el.offsetTop + 10
          const should  = trailTipOffset >= nodeTop
          if (next[i] !== should) { next[i] = should; changed = true }
        })
        return changed ? next : prev
      })
    }

    function onScroll() {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="hww-section" id="how-we-work">
      <div className="hww-inner">

        {/* Header */}
        <div className="hww-header">
          <div className="hww-badge">
            <span className="hww-badge-dot" />
            How We Work
          </div>
          <h2 className="hww-heading">From concept to <em>completion</em></h2>
          <p className="hww-sub">
            A streamlined process built around precision, transparency, and zero compromise on quality.
          </p>
        </div>

        {/* Timeline */}
        <div className="hww-timeline" ref={trailWrapRef}>

          <div className="hww-trail-track">
            <div className="hww-trail" ref={trailRef} />
          </div>

          <div className="hww-steps">
            {STEPS.map((step, i) => (
              <div
                key={i}
                data-index={i}
                ref={el => { stepRefs.current[i] = el }}
                className={`hww-step${active[i] ? ' hww-step--active' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className={`hww-node${active[i] ? ' hww-node--active' : ''}`} />
                <div className="hww-step__content">
                  <span className="hww-step__number">{step.number}</span>
                  <h3 className="hww-step__title">{step.title}</h3>
                  <p className="hww-step__desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
