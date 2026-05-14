import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const pos      = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const ring     = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const raf      = useRef(null)
  const hovering = useRef(false)

  useEffect(() => {
    const dot  = dotRef.current
    const ringEl = ringRef.current

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = () => {
      hovering.current = true
      dot.classList.add('cursor-dot--hover')
      ringEl.classList.add('cursor-ring--hover')
    }

    const onLeave = () => {
      hovering.current = false
      dot.classList.remove('cursor-dot--hover')
      ringEl.classList.remove('cursor-ring--hover')
    }

    const onDown = () => ringEl.classList.add('cursor-ring--click')
    const onUp   = () => ringEl.classList.remove('cursor-ring--click')

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    // Attach hover listeners to interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, label, .proj-card, .svc-row')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnter)
          el.addEventListener('mouseleave', onLeave)
        })
    }
    addHover()

    // Smooth ring follow with lerp
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1

      dot.style.transform   = `translate(${pos.current.x}px, ${pos.current.y}px)`
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`

      raf.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
