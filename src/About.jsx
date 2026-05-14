import { useEffect, useRef, useState } from 'react'
import './About.css'

const DUMMY_IMGS = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
]

const STATS = [
  { end: 500, suffix: '+', label: 'Projects' },
  { end: 99,  suffix: '%', label: 'Satisfaction' },
  { end: 200, suffix: '+', label: 'Clients' },
]

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Counter({ end, suffix, visible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = end / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [visible, end])
  return <>{count}{suffix}</>
}

export default function About() {
  const [sectionRef, visible] = useInView(0.2)

  return (
    <section className="about-section" id="about" ref={sectionRef}>

      {/* ── Left: image grid ── */}
      <div className={`about-images${visible ? ' about-images--in' : ''}`}>
        <div className="about-img-tall">
          <img src={DUMMY_IMGS[0]} alt="Steel fabrication" />
        </div>
        <div className="about-img-stack">
          <div className="about-img-small">
            <img src={DUMMY_IMGS[1]} alt="Commercial kitchen" />
          </div>
          <div className="about-img-small">
            <img src={DUMMY_IMGS[2]} alt="Steel products" />
          </div>
        </div>
      </div>

      {/* ── Right: content ── */}
      <div className="about-content">

        <div className={`about-badge${visible ? ' about-badge--in' : ''}`}>
          <span className="about-badge-dot" />
          Welcome to Olive Steel
        </div>

        <h2 className="about-heading">
          {['Crafting Steel', 'Into'].map((line, i) => (
            <span
              key={i}
              className={`about-line${visible ? ' about-line--in' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {line}{i === 1 && <> <em>Excellence</em></>}
            </span>
          ))}
        </h2>

        <p className={`about-desc${visible ? ' about-desc--in' : ''}`}>
          Olive Steel delivers precision-engineered stainless steel solutions with lasting
          durability &amp; hygiene — where every cut is measured with intention, every weld
          executed with care, and every product built to outlast the industry standard.
        </p>

        <div className="about-stats">
          {STATS.map(({ end, suffix, label }, i) => (
            <div
              key={label}
              className={`about-stat${visible ? ' about-stat--in' : ''}`}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              <span className="about-stat__value">
                <Counter end={end} suffix={suffix} visible={visible} />
              </span>
              <span className="about-stat__label">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
