// ============================================================
// FUNCTIONS — animations.jsx
// Semua animasi scroll-reveal. Section components tinggal panggil.
// ============================================================

import React, { useRef, useState, useEffect } from 'react'

/** Hook: deteksi elemen masuk viewport (sekali saja). */
export function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

/** Wrapper reveal: anak muncul fade+slide saat discroll ke dia. */
export function Reveal({ children, as = 'div', delay = 0, threshold = 0.18, className = '' }) {
  const { ref, inView } = useInView(threshold)
  const Tag = as
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </Tag>
  )
}

/** Stagger: render list items dengan delay bertingkat (grid cards dll). */
export function Stagger({ items, render, className = '', base = 0, step = 90, threshold = 0.15 }) {
  return (
    <div className={className}>
      {items.map((item, i) => (
        <Reveal key={item.id ?? i} delay={base + i * step} threshold={threshold}>
          {render(item, i)}
        </Reveal>
      ))}
    </div>
  )
}
