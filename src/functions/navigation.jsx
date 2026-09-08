// ============================================================
// FUNCTIONS — navigation.jsx
// Smooth scroll + scrollspy + scrolled-state. Navbar & section panggil ini.
// ============================================================

import React, { useEffect, useState } from 'react'
import { getScrollY } from './helpers.jsx'

/** Smooth-scroll ke section berdasarkan id. */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Smooth-scroll ke paling atas. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** Hook scrollspy: return id section yang sedang aktif (untuk highlight navbar). */
export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return active
}

/** Hook: true setelah user scroll melewati threshold (untuk navbar solid / back-to-top). */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(getScrollY() > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}