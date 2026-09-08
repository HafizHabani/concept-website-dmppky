// ============================================================
// TopBar — welcome bar kuning di atas (gaya Festava).
// Data dari siteData.jsx, navigasi pakai function navigation.jsx.
// ============================================================

import React from 'react'
import { SITE } from '../data/siteData.jsx'
import { scrollToSection } from '../functions/navigation.jsx'

export default function TopBar() {
  return (
    <div className="bg-brand-yellow text-brand-dark">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-2 flex items-center justify-center gap-2.5">
        <span className="text-sm">🎟</span>
        <p className="text-xs md:text-sm font-semibold truncate">{SITE.topBar.message}</p>
        <button
          onClick={() => scrollToSection(SITE.topBar.link.target)}
          className="shrink-0 text-xs md:text-sm font-extrabold underline underline-offset-4 decoration-brand-orange hover:text-brand-orange transition-colors"
        >
          {SITE.topBar.link.label}
        </button>
      </div>
    </div>
  )
}