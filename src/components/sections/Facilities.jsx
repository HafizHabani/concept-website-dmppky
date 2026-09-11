// ============================================================
// SECTION — Facilities.jsx (Our Facility — kartu fasilitas mall)
// Mobile → peek carousel (sama seperti Tenants mobile).
// Desktop → grid (tetap).
// Data ← facilitiesData.jsx · Function ← animations.jsx
// ============================================================

import React, { useRef, useEffect } from 'react'
import { FACILITIES_HEADER, FACILITIES } from '../../data/facilitiesData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'

const FacilityCard = ({ f, className = '', compact = false }) => (
  <article
    className={`group relative bg-white rounded-2xl border border-brand-navyDark/10 hover:border-brand-navy/60 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 overflow-hidden ${className}`}
  >
    {/* visual area */}
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        compact ? 'h-16' : 'h-24'
      } ${f.img ? '' : 'bg-gradient-to-br from-brand-navy to-brand-deep'}`}
    >
      {f.img ? (
        <img src={f.img} alt={`${f.name} — fasilitas`} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <span className={`drop-shadow-lg ${compact ? 'text-2xl' : 'text-4xl'}`}>{f.emoji}</span>
      )}
    </div>

    {/* info */}
    <div className={compact ? 'p-2.5' : 'p-4'}>
      <div className="flex items-center justify-between gap-1.5">
        <h3 className={`font-bold text-brand-navyDark leading-snug truncate ${compact ? 'text-xs' : ''}`}>
          {f.name}
        </h3>
        <span
          className={`shrink-0 font-semibold text-brand-navyDark bg-brand-gold rounded-md ${
            compact ? 'text-[9px] px-1 py-0.5' : 'text-[10px] px-1.5 py-0.5'
          }`}
        >
          {f.floor}
        </span>
      </div>
      {!compact && <p className="mt-2 text-xs text-brand-navyDark/60 leading-relaxed">{f.desc}</p>}
    </div>
  </article>
)

const card = (f) => <FacilityCard f={f} />

// ------------------------------------------------------------
// FacilityRow — peek carousel (mobile): kartu seragam, kartu
// tengah utuh, neighbors crop di tepi (peek hint), swipe
// horizontal + snap-center. Card design tidak berubah.
// ------------------------------------------------------------
const FacilityRow = ({ items }) => {
  const scrollRef = useRef(null)
  const cardRefs = useRef([])
  const drag = useRef({ down: false, startX: 0, startScroll: 0 })

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = scrollRef.current
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft }
    el.style.scrollSnapType = 'none' // drag smooth tanpa snap
    el.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.down) return
    const el = scrollRef.current
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }
  const onPointerUp = () => {
    const el = scrollRef.current
    drag.current.down = false
    if (el) el.style.scrollSnapType = ''
  }

  const goTo = (i) => {
    const el = scrollRef.current
    const c = cardRefs.current[i]
    if (!el || !c) return
    const target = c.getBoundingClientRect().left - el.getBoundingClientRect().left - (el.clientWidth - c.offsetWidth) / 2
    el.scrollTo({ left: el.scrollLeft + target, behavior: 'smooth' })
  }

  // Center-kan kartu pertama saat mount — mulai dari tengah dengan peek.
  useEffect(() => {
    const el = scrollRef.current
    if (el && cardRefs.current[0]) {
      const first = cardRefs.current[0]
      const target = first.getBoundingClientRect().left - el.getBoundingClientRect().left - (el.clientWidth - first.offsetWidth) / 2
      el.scrollTo({ left: Math.max(0, el.scrollLeft + target), behavior: 'instant' })
    }
  }, [items])

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerUp}
      className="flex items-stretch overflow-x-auto scrollbar-none snap-x snap-mandatory snap-center pl-10 pr-10 pt-2 pb-1 cursor-grab active:cursor-grabbing select-none"
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
    >
      {items.map((f, i) => (
        <div
          key={f.id}
          ref={(n) => {
            cardRefs.current[i] = n
          }}
          onClick={() => goTo(i)}
          className="shrink-0 snap-center py-2 mx-2"
        >
          <FacilityCard f={f} compact className="w-44 border-2 border-white shadow-lg shadow-brand-navyDark/10" />
        </div>
      ))}
    </div>
  )
}

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

        {/* ===== MOBILE — peek carousel ===== */}
        <div className="md:hidden mt-12">
          <FacilityRow items={FACILITIES} />
        </div>

        {/* ===== DESKTOP — grid ===== */}
        <div className="hidden md:block">
          <Stagger
            items={FACILITIES}
            base={140}
            step={70}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            render={card}
          />
        </div>
      </div>
    </section>
  )
}