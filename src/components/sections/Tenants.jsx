// ============================================================
// SECTION — Tenants.jsx (Store Directory + filter per lantai + hide/show)
// Data ← tenantsData.jsx · Function ← animations.jsx (Stagger/Reveal)
// ============================================================

import React, { useState } from 'react'
import { TENANTS_HEADER, TENANT_CATEGORIES, TENANT_FLOORS, TENANTS } from '../../data/tenantsData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'

const chipCls = (on) =>
  `rounded-full px-4 py-2 text-sm font-semibold border transition-all ${
    on
      ? 'bg-brand-navyDark text-white border-brand-navyDark shadow-lg shadow-brand-navyDark/30'
      : 'bg-brand-navyDark/5 text-brand-navyDark/70 border-brand-navyDark/20 hover:border-brand-gold hover:text-brand-navyDark'
  }`

const categoryOf = (id) => TENANT_CATEGORIES.find((c) => c.id === id)

const card = (t) => (
  <article className="group relative bg-white rounded-2xl border border-brand-navyDark/10 hover:border-brand-gold/60 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 overflow-hidden">
    {/* visual area — gradient per kategori */}
    <div
      className={`h-28 ${categoryOf(t.category).gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
    >
      <span className="text-5xl drop-shadow-lg">{t.emoji}</span>
    </div>

    {/* info */}
    <div className="p-4">
      <div className="flex items-center justify-between gap-1.5">
        <h3 className="font-bold text-brand-navyDark leading-snug">{t.name}</h3>
        <span className="shrink-0 text-[11px] text-white bg-brand-navyDark rounded-md px-1.5 py-0.5 font-semibold">
          {t.floor}
        </span>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px]">
        {t.tag && (
          <span className="bg-brand-gold/10 text-brand-gold font-semibold rounded-full px-2 py-0.5">{t.tag}</span>
        )}
        <span className="text-brand-navyDark/40">· {categoryOf(t.category).name}</span>
      </div>
    </div>

    {/* hover arrow */}
    <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-brand-gold text-brand-navyDark flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
      →
    </div>
  </article>
)

const INITIAL_VISIBLE = 8

export default function Tenants() {
  const [floor, setFloor] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const list = floor === 'all' ? TENANTS : TENANTS.filter((t) => t.floor === floor)
  const visible = showAll ? list : list.slice(0, INITIAL_VISIBLE)

  const pickFloor = (f) => {
    setFloor(f)
    setShowAll(false)
  }

  return (
    <section id="tenants" className="relative bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-navy text-xs font-bold tracking-[0.3em] uppercase">{TENANTS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-navyDark">{TENANTS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-navyDark/60">{TENANTS_HEADER.subtitle}</p>
        </Reveal>

        {/* filter per lantai */}
        <Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-2.5">
          <button onClick={() => pickFloor('all')} className={chipCls(floor === 'all')}>
            All · {TENANTS.length}
          </button>
          {TENANT_FLOORS.map((f) => (
            <button key={f.id} onClick={() => pickFloor(f.id)} className={chipCls(floor === f.id)}>
              {f.emoji} {f.name} <span className="opacity-60">· {TENANTS.filter((t) => t.floor === f.id).length}</span>
            </button>
          ))}
        </Reveal>

        <Stagger
          items={visible}
          step={70}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          render={card}
        />

        {/* tombol lihat semua / lebih sedikit */}
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
    </section>
  )
}