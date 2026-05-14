import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    id: '01',
    title: 'Hospital Kitchen Appliances',
    description:
      'Hygienic stainless steel kitchen appliances and equipment purpose-built for hospitals and healthcare facilities — designed to meet strict sanitation standards while ensuring safe, efficient food preparation for patients and staff.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    tags: ['Healthcare Grade', 'Hygienic Design', 'Custom Build'],
  },
  {
    id: '02',
    title: 'Commercial Kitchens',
    description:
      'Full-suite stainless steel kitchen solutions — countertops, sinks, shelving, and prep stations — engineered for hygiene and heavy daily use.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    tags: ['Worktops', 'Sinks & Drains', 'Shelving'],
  },
  {
    id: '03',
    title: 'Kitchen Appliances',
    description:
      'Premium stainless steel kitchen appliances built for performance and longevity — from heavy-duty cooking ranges and exhaust hoods to food warmers and prep equipment crafted for professional kitchens.',
    img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&q=80',
    tags: ['Cooking Ranges', 'Exhaust Hoods', 'Food Warmers'],
  },
  {
    id: '04',
    title: 'Modular Kitchen Units',
    description:
      'Pre-fabricated stainless steel modular kitchen systems designed for quick installation and seamless functionality — ideal for hotels, restaurants, and large-scale catering operations that demand consistency and hygiene.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    tags: ['Modular Design', 'Quick Install', 'Catering Ready'],
  },
]

const N = SERVICES.length

export default function Services() {
  const wrapperRef  = useRef(null)
  const imgRefs     = useRef([])
  const rowRefs     = useRef([])
  const [activeIdx, setActiveIdx] = useState(0)

  function activateItem(idx) {
    setActiveIdx(idx)

    imgRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === idx) {
        gsap.fromTo(el,
          { opacity: 0, scale: 1.03 },
          { opacity: 1, scale: 1, duration: 0.22, ease: 'power2.out' }
        )
      } else {
        gsap.to(el, { opacity: 0, scale: 1.02, duration: 0.15, ease: 'power2.in' })
      }
    })

    rowRefs.current.forEach((el, i) => {
      el?.classList.toggle('svc-row--active', i === idx)
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      imgRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.05 })
      })
      rowRefs.current[0]?.classList.add('svc-row--active')

      // ScrollTrigger per segment — spacer is 1.5vh so each step = spacer/N
      const STEP = () => wrapperRef.current.offsetHeight / (N + 1)
      SERVICES.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: () => `top+=${i * STEP()} top`,
          end:   () => `top+=${(i + 1) * STEP()} top`,
          onEnter:     () => activateItem(i),
          onEnterBack: () => activateItem(i),
        })
      })

      // Entrance animations
      gsap.from(['.svc-badge', '.svc-heading', '.svc-sub'], {
        scrollTrigger: { trigger: wrapperRef.current, start: 'top 82%' },
        opacity: 0, y: 28, duration: 0.75, ease: 'power3.out', stagger: 0.12,
      })
      gsap.from('.svc-row', {
        scrollTrigger: { trigger: wrapperRef.current, start: 'top 78%' },
        opacity: 0, x: -24, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.1,
      })
      gsap.from('.svc-img-panel', {
        scrollTrigger: { trigger: wrapperRef.current, start: 'top 78%' },
        opacity: 0, x: 36, scale: 0.96, duration: 0.85, ease: 'power3.out', delay: 0.15,
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef} className="svc-wrapper" id="services">

      {/* Sticky panel — CSS sticky, no GSAP pin */}
      <div className="svc-sticky">

        <div className="svc-header">
          <div className="svc-badge">
            <span className="svc-badge-dot" />
            What We Do
          </div>
          <h2 className="svc-heading">Crafted to <em>Perfection</em></h2>
          <p className="svc-sub">Where every detail is done right — crafted with care and precision.</p>
        </div>

        <div className="svc-body">

          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <div key={s.id} ref={el => rowRefs.current[i] = el} className="svc-row">
                {/* Image shown only on mobile, above each row */}
                <div className="svc-row__mob-img">
                  <img src={s.img} alt={s.title} />
                  <span className="svc-img-counter">
                    {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                  </span>
                </div>
                <span className="svc-row__num">{s.id}</span>
                <div className="svc-row__content">
                  <span className="svc-row__title">
                    {s.title}
                    <span className="svc-row__underline" />
                  </span>
                  <p className="svc-row__desc">{s.description}</p>
                  <div className="svc-row__tags">
                    {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
                  </div>
                </div>
                <span className="svc-row__arrow">→</span>
              </div>
            ))}
          </div>

          <div className="svc-img-panel">
            {SERVICES.map((s, i) => (
              <img
                key={s.id}
                ref={el => imgRefs.current[i] = el}
                src={s.img}
                alt={s.title}
                className="svc-img"
              />
            ))}
            <div className="svc-img-footer">
              <span className="svc-img-name">{SERVICES[activeIdx].title}</span>
              <span className="svc-img-counter">
                {String(activeIdx + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll spacer — pushes content below, creates scroll distance */}
      <div className="svc-spacer" />
    </div>
  )
}
