import { useEffect, useState } from 'react'
import splashLogo from './assets/finallogoolive.png'
import './SplashScreen.css'

function SegmentedRing() {
  const segments = 20
  const radius = 42
  const cx = 54
  const cy = 54
  const segmentAngle = (2 * Math.PI) / segments
  const gap = 0.18

  return (
    <svg className="splash-ring" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: segments }).map((_, i) => {
        const startAngle = i * segmentAngle + gap / 2 - Math.PI / 2
        const endAngle = (i + 1) * segmentAngle - gap / 2 - Math.PI / 2
        const thickness = 9
        const outerR = radius
        const innerR = radius - thickness

        const x1 = cx + outerR * Math.cos(startAngle)
        const y1 = cy + outerR * Math.sin(startAngle)
        const x2 = cx + outerR * Math.cos(endAngle)
        const y2 = cy + outerR * Math.sin(endAngle)
        const x3 = cx + innerR * Math.cos(endAngle)
        const y3 = cy + innerR * Math.sin(endAngle)
        const x4 = cx + innerR * Math.cos(startAngle)
        const y4 = cy + innerR * Math.sin(startAngle)

        const d = `M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 0 0 ${x4} ${y4} Z`

        return (
          <path
            key={i}
            d={d}
            className="splash-ring-segment"
            style={{ animationDelay: `${(i / segments) * 1.2}s` }}
          />
        )
      })}
    </svg>
  )
}

function SplashScreen({ onDone }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800)
    const doneTimer = setTimeout(() => onDone(), 2000)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`splash-overlay ${fading ? 'splash-fade-out' : ''}`}>
      <div className="splash-content">
        <img src={splashLogo} alt="Olive Steel" className="splash-logo" width="200" height="120" loading="eager" />
        <SegmentedRing />
      </div>
    </div>
  )
}

export default SplashScreen
