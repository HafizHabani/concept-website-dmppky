// ============================================================
// BackToTop — tombol melayang dengan ping ring, muncul setelah scroll.
// ============================================================

import React from 'react'
import { scrollToTop, useScrolled } from '../functions/navigation.jsx'

export default function BackToTop() {
  const show = useScrolled(560)

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-gold text-brand-navyDark text-xl font-black shadow-glow hover:scale-110 hover:bg-brand-navy hover:text-white transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="absolute inset-0 rounded-full animate-ping" aria-hidden="true" />
      <span className="relative">↑</span>
    </button>
  )
}