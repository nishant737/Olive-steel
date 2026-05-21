import { useEffect, useRef, useState } from 'react'
import './About.css'
import hero01 from './assets/my03.jpeg'
import hero02 from './assets/my02.jpeg'
import hero03 from './assets/my01.jpeg'

const DUMMY_IMGS = [hero01, hero02, hero03]

const STATS = [
  { end: 11,   suffix: '+', label: 'Years of Service' },
  { end: 5000, suffix: '+', label: 'Projects' },
  { end: 10000,suffix: '+', label: 'Clients' },
  { end: 100,  suffix: '%', label: 'Satisfaction' },
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

      {/* ── Top header (badge + heading) — order 1 on mobile ── */}
      <div className="about-header">
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
      </div>

      {/* ── Image grid — order 2 on mobile ── */}
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

      {/* ── Description + stats — order 3 on mobile ── */}
      <div className="about-content">
        <p className={`about-desc${visible ? ' about-desc--in' : ''}`}>
         We are a leading provider of stainless-steel solutions in coastal Karnataka. In the last 11  years, we have been cafering to the custom made stainless steel requirements of reputed enterprises of two key industries of our region namely hospitality and hospitals. Situated in the heart of Mangaluru's Industrial estate, our state-of-the-art operations and commitment to process improvements and customer satisfaction have made us one among the top sought commercial kitchen and hospital equipment suppliers in the region.
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
