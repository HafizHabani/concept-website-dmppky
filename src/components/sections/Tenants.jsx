// ============================================================
// SECTION — Tenants.jsx (Store Directory)
// Mobile → chip filter lantai di atas (default LG), lalu SATU baris
//          horizontal kartu tumpang tindih sesuai lantai terpilih,
//          bisa digeser pakai mouse/pointer ATAU jari (touch native).
// Desktop → grid (tetap), difilter oleh chip lantai (termasuk "All").
// Data ← tenantsData.jsx · Function ← animations.jsx (Reveal/Stagger)
// ============================================================

import React, { useState, useRef } from 'react'
import { TENANTS_HEADER, TENANT_CATEGORIES, TENANT_FLOORS, TENANTS } from '../../data/tenantsData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'

const chipCls = (on) =>
  `rounded-full px-4 py-2 text-sm font-semibold border transition-all shrink-0 ${
    on
      ? 'bg-brand-navyDark text-white border-brand-navyDark shadow-lg shadow-brand-navyDark/30'
      : 'bg-brand-navyDark/5 text-brand-navyDark/70 border-brand-navyDark/20 hover:border-brand-gold hover:text-brand-navyDark'
  }`

const categoryOf = (id) => TENANT_CATEGORIES.find((c) => c.id === id)

const Card = ({ t, className = '', compact = false }) => (
  <article
    className={`group relative bg-white rounded-2xl border border-brand-navyDark/10 hover:border-brand-gold/60 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 overflow-hidden ${className}`}
  >
    <div
      className={`relative flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 ${
        compact ? 'h-16' : 'h-28'
      } ${t.bgImage ? 'bg-brand-navyDark' : categoryOf(t.category).gradient}`}
    >
      {t.bgImage && (
        <img src={t.bgImage} alt={`${t.name} background`} className="absolute inset-0 w-full h-full object-cover" />
      )}
      {t.logo ? (
        <img
          src={t.logo}
          alt={`${t.name} logo`}
          className={`relative z-10 object-contain drop-shadow-lg ${compact ? 'max-h-10 max-w-[45%]' : 'max-h-21 max-w-[35%]'}`}
        />
      ) : (
        <span className={`relative z-10 drop-shadow-lg ${compact ? 'text-2xl' : 'text-5xl'}`}>{t.emoji}</span>
      )}
    </div>

    <div className={compact ? 'p-2.5' : 'p-4'}>
      <div className="flex items-center justify-between gap-1.5">
        <h3 className={`font-bold text-brand-navyDark leading-snug truncate ${compact ? 'text-xs' : ''}`}>{t.name}</h3>
        <span
          className={`shrink-0 text-white bg-brand-navyDark rounded-md font-semibold ${
            compact ? 'text-[9px] px-1 py-0.5' : 'text-[11px] px-1.5 py-0.5'
          }`}
        >
          {t.floor}
        </span>
      </div>
      <div className={`mt-1 flex flex-wrap items-center gap-1 ${compact ? 'text-[9px]' : 'mt-1.5 gap-1.5 text-[11px]'}`}>
        {t.tag && (
          <span className={`bg-brand-gold/10 text-brand-gold font-semibold rounded-full ${compact ? 'px-1.5 py-0.5' : 'px-2 py-0.5'}`}>
            {t.tag}
          </span>
        )}
        <span className="text-brand-navyDark/40 truncate">· {categoryOf(t.category).name}</span>
      </div>
    </div>

    {!compact && (
      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-brand-gold text-brand-navyDark flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    )}
  </article>
)

const card = (t) => <Card t={t} />

// ------------------------------------------------------------
// FloorRow — satu baris horizontal kartu tumpang tindih untuk
// lantai yang sedang aktif. Digeser via drag mouse (pointer
// events custom) ATAU jari (native touch scroll, lebih mulus).
// ------------------------------------------------------------
const FloorRow = ({ tenants }) => {
  const scrollRef = useRef(null)
  const drag = useRef({ down: false, startX: 0, startScroll: 0 })

  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = scrollRef.current
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft }
    el.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.down) return
    const el = scrollRef.current
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }
  const onPointerUp = () => {
    drag.current.down = false
  }

  if (tenants.length === 0) {
    return <p className="px-4 text-center text-sm text-brand-navyDark/40">Belum ada tenant di lantai ini.</p>
  }

  return (
    <div
      ref={scrollRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerUp}
      className="flex overflow-x-auto scrollbar-none pl-4 pr-8 py-1 cursor-grab active:cursor-grabbing select-none"
      style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
    >
      {tenants.map((t, i) => (
        <div key={t.id} className={i === 0 ? 'shrink-0' : 'shrink-0 -ml-9'} style={{ zIndex: i + 1 }}>
          <Card t={t} compact className="w-32 border-2 border-white shadow-lg shadow-brand-navyDark/10" />
        </div>
      ))}
    </div>
  )
}

const INITIAL_VISIBLE = 8

export default function Tenants() {
  const [floor, setFloor] = useState('all') // desktop: default All
  const [mobileFloor, setMobileFloor] = useState(TENANT_FLOORS[0].id) // mobile: default LG
  const [showAll, setShowAll] = useState(false)

  const list = floor === 'all' ? TENANTS : TENANTS.filter((t) => t.floor === floor)
  const visible = showAll ? list : list.slice(0, INITIAL_VISIBLE)
  const mobileList = TENANTS.filter((t) => t.floor === mobileFloor)

  const pickFloor = (f) => {
    setFloor(f)
    setShowAll(false)
  }

  return (
    <section id="tenants" className="relative bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl lg:px-8 py-16 md:py-24">
        <Reveal className="text-center px-4">
          <p className="text-brand-navy text-xs font-bold tracking-[0.3em] uppercase">{TENANTS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-navyDark">{TENANTS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-navyDark/60">{TENANTS_HEADER.subtitle}</p>
        </Reveal>

        {/* ===== DESKTOP — filter chip (termasuk All) ===== */}
        <Reveal delay={140} className="mt-9 px-4 hidden md:block">
          <div className="flex flex-wrap justify-center gap-2.5">
            <button onClick={() => pickFloor('all')} className={chipCls(floor === 'all')}>
              All · {TENANTS.length}
            </button>
            {TENANT_FLOORS.map((f) => (
              <button key={f.id} onClick={() => pickFloor(f.id)} className={chipCls(floor === f.id)}>
                {f.emoji} {f.name} <span className="opacity-60">· {TENANTS.filter((t) => t.floor === f.id).length}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* ===== MOBILE / ANDROID ===== */}
        <div className="md:hidden mt-9">
          {/* filter chip lantai — tanpa "All", default lantai pertama (LG) */}
          <Reveal delay={140}>
            <div className="flex gap-2.5 overflow-x-auto scrollbar-none px-4 pb-2">
              {TENANT_FLOORS.map((f) => (
                <button key={f.id} onClick={() => setMobileFloor(f.id)} className={chipCls(mobileFloor === f.id)}>
                  {f.emoji} {f.name} <span className="opacity-60">· {TENANTS.filter((t) => t.floor === f.id).length}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* satu baris tumpang tindih sesuai lantai terpilih */}
          <div className="mt-6">
            <FloorRow tenants={mobileList} />
          </div>
        </div>

        {/* ===== DESKTOP — grid (tetap seperti semula) ===== */}
        <div className="hidden md:block px-4 lg:px-0">
          <Stagger items={visible} step={70} className="mt-12 grid grid-cols-3 lg:grid-cols-4 gap-5" render={card} />

          {list.length > INITIAL_VISIBLE && (
            <Reveal delay={120} className="mt-10 text-center">
              <button
                onClick={() => setShowAll((s) => !s)}
                className="inline-flex items-center gap-2 bg-brand-navyDark hover:bg-brand-navy text-white font-bold rounded-full px-7 py-3 transition-all hover:scale-105"
              >
                {showAll ? 'Tampilkan Lebih Sedikit ↑' : `Lihat Semua Tenant (${list.length}) ↓`}
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}