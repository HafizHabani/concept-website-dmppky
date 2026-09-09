// ============================================================
// SECTION — Facilities.jsx (Our Facility — kartu fasilitas mall)
// Data ← facilitiesData.jsx · Function ← animations.jsx
// ============================================================

import React from 'react'
import { FACILITIES_HEADER, FACILITIES } from '../../data/facilitiesData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'

const card = (f) => (
  <article className="group relative bg-white rounded-2xl border border-brand-navyDark/10 hover:border-brand-navy/60 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 overflow-hidden">
    {/* visual area */}
    <div className="h-24 bg-gradient-to-br from-brand-navy to-brand-deep flex items-center justify-center">
      <span className="text-4xl drop-shadow-lg">{f.emoji}</span>
    </div>

    {/* info */}
    <div className="p-4">
      <div className="flex items-center justify-between gap-1.5">
        <h3 className="font-bold text-brand-navyDark leading-snug">{f.name}</h3>
        <span className="shrink-0 text-[10px] font-semibold text-brand-navyDark bg-brand-gold rounded-md px-1.5 py-0.5">
          {f.floor}
        </span>
      </div>
      <p className="mt-2 text-xs text-brand-navyDark/60 leading-relaxed">{f.desc}</p>
    </div>
  </article>
)

export default function Facilities() {
  return (
    <section id="facility" className="relative overflow-hidden bg-gradient-to-br from-brand-deep to-brand-navy scroll-mt-24">
      {/* orbs dekoratif */}
      <div className="absolute -left-24 top-1/4 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl anim-float" />
      <div className="absolute -right-16 bottom-16 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl anim-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">{FACILITIES_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">{FACILITIES_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65">{FACILITIES_HEADER.subtitle}</p>
        </Reveal>

        <Stagger
          items={FACILITIES}
          base={140}
          step={70}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          render={card}
        />
      </div>
    </section>
  )
}