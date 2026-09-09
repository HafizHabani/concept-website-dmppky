import React from 'react'
import { SITE } from '../data/siteData.jsx'
import { scrollToSection } from '../functions/navigation.jsx'

export default function TopBar() {
  return (
    <div className="bg-brand-gold text-brand-navyDark">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-2 flex items-center justify-center gap-2.5">
        <p className="text-xs md:text-sm font-semibold truncate">{SITE.topBar.message}</p>
        <button
          onClick={() => scrollToSection(SITE.topBar.link.target)}
          className="shrink-0 text-xs md:text-sm font-extrabold underline underline-offset-4 decoration-brand-navyDark hover:text-brand-navyDark transition-colors"
        >
          {SITE.topBar.link.label}
        </button>
      </div>
    </div>
  )
}