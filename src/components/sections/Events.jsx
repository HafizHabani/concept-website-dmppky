// ============================================================
// SECTION — Events.jsx (Schedule grid 3 days × 3 zones)
// Data ← eventsData.jsx · Function ← animations.jsx / navigation.jsx
// ============================================================

import React from 'react'
import {
  EVENTS_HEADER,
  EVENT_ZONES,
  EVENT_DAYS,
  EVENTS_SCHEDULE,
  EMPTY_CELL_CLASSES
} from '../../data/eventsData.jsx'
import { Reveal } from '../../functions/animations.jsx'
import { scrollToSection } from '../../functions/navigation.jsx'

const cellFor = (day, zone) => EVENTS_SCHEDULE.find((c) => c.day === day && c.zone === zone)

const eventTile = (e) => (
  <div className={`relative overflow-hidden rounded-xl ${e.tile} ${e.accent}`}>
    <span className="absolute top-2 left-2 text-2xl drop-shadow-lg">{e.emoji}</span>
    <div className="pt-10 pb-6 px-3 text-left leading-tight">
      <h4 className="text-white font-extrabold text-lg">{e.title}</h4>
      <p className="text-white/75 text-xs mt-1">🕒 {e.time}</p>
      <p className="text-white/55 text-[11px]">{e.by}</p>
    </div>
  </div>
)

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-brand-dark scroll-mt-24">
      {/* orbs dekoratif */}
      <div className="absolute -left-20 bottom-10 w-80 h-80 rounded-full bg-brand-maroon/30 blur-3xl anim-float-slow" />
      <div className="absolute -right-16 top-24 w-72 h-72 rounded-full bg-brand-orange/15 blur-3xl anim-float" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">{EVENTS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">{EVENTS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65">{EVENTS_HEADER.subtitle}</p>
        </Reveal>

        {/* zone legend */}
        <Reveal delay={130} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {EVENT_ZONES.map((z) => (
            <span
              key={z.id}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/85"
            >
              {z.emoji} {z.name}
            </span>
          ))}
        </Reveal>

        {/* schedule grid */}
        <Reveal delay={200} className="mt-12">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur">
            {/* header row */}
            <div className="grid grid-cols-4 gap-2.5 px-3 py-3 bg-brand-orange/90">
              <div className="text-white text-xs font-bold uppercase tracking-widest">Date</div>
              {EVENT_ZONES.map((z) => (
                <div key={z.id} className="text-center text-white text-xs font-bold uppercase tracking-widest">
                  {z.emoji} {z.name}
                </div>
              ))}
            </div>

            {/* day rows */}
            {EVENT_DAYS.map((d, di) => (
              <div key={d.label} className="grid grid-cols-4 gap-2.5 px-3 py-4">
                <div className="bg-brand-gray rounded-xl flex flex-col justify-center text-center leading-tight">
                  <p className="text-white font-extrabold text-sm">{d.label}</p>
                  <p className="text-white/55 text-[10px] mt-0.5">{d.date}</p>
                </div>
                {EVENT_ZONES.map((_, zi) => {
                  const cell = cellFor(di, zi)
                  return cell.event ? (
                    <div key={zi} className="min-h-[9.5rem]">
                      {eventTile(cell.event)}
                    </div>
                  ) : (
                    <div key={zi} className={`${EMPTY_CELL_CLASSES[(di * 3 + zi) % 3]} min-h-[9.5rem] rounded-xl`} />
                  )
                })}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <p className="text-white/60 text-sm">{EVENTS_HEADER.note}</p>
          <button
            onClick={() => scrollToSection(EVENTS_HEADER.cta.target)}
            className="bg-brand-orange hover:bg-brand-yellow hover:text-brand-dark text-white font-bold rounded-full px-6 py-2.5 shadow-glow hover:scale-105 transition-all"
          >
            🎟 {EVENTS_HEADER.cta.label}
          </button>
        </Reveal>
      </div>
    </section>
  )
}