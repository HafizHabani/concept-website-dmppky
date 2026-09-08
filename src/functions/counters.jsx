// ============================================================
// FUNCTIONS — counters.jsx
// Angka animasi (count up) saat masuk viewport. Home.jsx panggil ini.
// ============================================================

import React, { useEffect, useState } from 'react'
import { useInView } from './animations.jsx'
import { formatNumber } from './helpers.jsx'

export function Counter({ end, decimals = 0, suffix = '', duration = 1600, className = '' }) {
  const { ref, inView } = useInView(0.35)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setVal(end * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {formatNumber(val, decimals)}
      {suffix}
    </span>
  )
}