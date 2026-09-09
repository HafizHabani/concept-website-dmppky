// ============================================================
// SECTION — Events.jsx (video looping COE + header)
// Data ← eventsData.jsx · Function ← animations.jsx / navigation.jsx
// ============================================================

import React from 'react'
import { EVENTS_HEADER } from '../../data/eventsData.jsx'
import { Reveal } from '../../functions/animations.jsx'
import { scrollToSection } from '../../functions/navigation.jsx'
import coeVideo from '../../assets/COE.mp4'

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-brand-navyDark scroll-mt-24">
      {/* orbs dekoratif */}
      <div className="absolute -left-20 bottom-10 w-80 h-80 rounded-full bg-brand-deep/30 blur-3xl anim-float-slow" />
      <div className="absolute -right-16 top-24 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl anim-float" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">{EVENTS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">{EVENTS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65">{EVENTS_HEADER.subtitle}</p>
        </Reveal>

        {/* video looping — tanpa controls & tanpa audio */}
        <Reveal delay={200} className="mt-12">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur shadow-card">
            <video
              src={coeVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto max-h-[75vh] object-contain"
            />
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <p className="text-white/60 text-sm">{EVENTS_HEADER.note}</p>
        </Reveal>
      </div>
    </section>
  )
}