// ============================================================
// SECTION — Tenants.jsx (Store Directory + kategori filter)
// Data ← tenantsData.jsx · Function ← animations.jsx (Stagger/Reveal)
// ============================================================

import React, { useState } from 'react'
import { TENANTS_HEADER, TENANT_CATEGORIES, TENANTS } from '../../data/tenantsData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'

const chipCls = (on) =>
  `rounded-full px-4 py-2 text-sm font-semibold border transition-all ${
    on
      ? 'bg-brand-dark text-white border-brand-dark shadow-lg shadow-brand-dark/30'
      : 'bg-brand-dark/5 text-brand-dark/70 border-brand-dark/20 hover:border-brand-orange hover:text-brand-dark'
  }`

const categoryOf = (id) => TENANT_CATEGORIES.find((c) => c.id === id)

const card = (t) => (
  <article className="group relative bg-white rounded-2xl border border-brand-dark/10 hover:border-brand-orange/60 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 overflow-hidden">
    {/* visual area */}
    <div
      className={`h-28 ${categoryOf(t.category).gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
    >
      <span className="text-5xl drop-shadow-lg">{t.emoji}</span>
    </div>

    {/* info */}
    <div className="p-4">
      <div className="flex items-center justify-between gap-1.5">
        <h3 className="font-bold text-brand-dark leading-snug">{t.name}</h3>
        <span className="shrink-0 text-[11px] text-white bg-brand-dark rounded-md px-1.5 py-0.5 font-semibold">
          {t.floor}
        </span>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px]">
        {t.tag && (
          <span className="bg-brand-orange/10 text-brand-orange font-semibold rounded-full px-2 py-0.5">{t.tag}</span>
        )}
        <span className="text-brand-dark/40">· {categoryOf(t.category).name}</span>
      </div>
    </div>

    {/* hover arrow */}
    <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
      →
    </div>
  </article>
)

export default function Tenants() {
  const [cat, setCat] = useState('all')
  const list = cat === 'all' ? TENANTS : TENANTS.filter((t) => t.category === cat)

  return (
    <section id="tenants" className="relative bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">{TENANTS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-dark">{TENANTS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-dark/60">{TENANTS_HEADER.subtitle}</p>
        </Reveal>

        <Reveal delay={140} className="mt-9 flex flex-wrap justify-center gap-2.5">
          <button onClick={() => setCat('all')} className={chipCls(cat === 'all')}>
            All · {TENANTS.length}
          </button>
          {TENANT_CATEGORIES.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} className={chipCls(cat === c.id)}>
              {c.emoji} {c.name} <span className="opacity-60">· {TENANTS.filter((t) => t.category === c.id).length}</span>
            </button>
          ))}
        </Reveal>

        <Stagger
          items={list}
          step={70}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          render={card}
        />
      </div>
    </section>
  )
}