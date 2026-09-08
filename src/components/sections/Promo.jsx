// ============================================================
// SECTION — Promo.jsx (Countdown + Offers + Deals)
// Data ← promoData.jsx · Function ← countdown.jsx / animations.jsx / navigation.jsx
// ============================================================

import React from 'react'
import { PROMO_HEADER, COUNTDOWN_SALE, OFFERS, DEALS } from '../../data/promoData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'
import { CountdownTimer } from '../../functions/countdown.jsx'
import { scrollToSection } from '../../functions/navigation.jsx'

export default function Promo() {
  return (
    <section id="promo" className="relative overflow-hidden bg-gradient-to-br from-brand-maroon to-brand-purple scroll-mt-24">
      <div className="absolute -left-24 top-1/4 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl anim-float" />
      <div className="absolute -right-16 bottom-16 w-80 h-80 rounded-full bg-brand-yellow/10 blur-3xl anim-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">{PROMO_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">{PROMO_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/65">{PROMO_HEADER.subtitle}</p>
        </Reveal>

        {/* countdown panel */}
        <Reveal delay={140} className="mt-12">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 md:p-10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/15 via-transparent to-brand-yellow/10" />
            <p className="relative text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">
              {COUNTDOWN_SALE.kicker}
            </p>
            <h3 className="relative mt-2 text-3xl md:text-4xl font-black text-white">{COUNTDOWN_SALE.label}</h3>

            <div className="relative mt-7 flex flex-wrap items-center gap-4">
              <CountdownTimer start={COUNTDOWN_SALE.start} labels={['days', 'hours', 'mins', 'secs']} className="flex items-center" />
              <button
                onClick={() => scrollToSection(COUNTDOWN_SALE.cta.target)}
                className="shrink-0 bg-brand-orange hover:bg-brand-yellow hover:text-brand-dark text-white font-bold rounded-full px-6 py-3 shadow-glow hover:scale-105 transition-all"
              >
                🔔 {COUNTDOWN_SALE.cta.label}
              </button>
            </div>

            <p className="relative mt-5 text-white/60 text-sm">{COUNTDOWN_SALE.note}</p>
          </div>
        </Reveal>

        {/* offer cards — gaya pricing Festava (dotted border) */}
        <Stagger
          items={OFFERS}
          base={220}
          step={120}
          className="mt-14 grid gap-8 md:grid-cols-2"
          render={(o) => (
            <div className="relative flex flex-col bg-white rounded-2xl border-2 border-dashed border-brand-dark/40 p-7 shadow-card hover:-translate-y-1 transition-transform duration-300">
              <span
                className={`absolute -top-3.5 -right-3 rotate-12 text-[11px] font-extrabold rounded-full px-3 py-1 shadow-lg ${
                  o.id === 'vip' ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-orange text-white'
                }`}
              >
                {o.badge}
              </span>

              <h3 className="text-2xl font-extrabold text-brand-dark">{o.name}</h3>
              <p className="mt-2 text-5xl font-black text-brand-orange leading-none">
                {o.currency}
                {o.price}
                <span className="text-sm text-brand-dark/50"> {o.period}</span>
              </p>
              <p className="mt-3 text-xs text-brand-dark/50">{o.sub}</p>

              <ul className="mt-5 space-y-2.5">
                {o.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-brand-dark/80 text-sm">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] font-black flex items-center justify-center">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('contact')}
                className="mt-auto self-start inline-flex mt-6 text-brand-orange font-extrabold text-sm hover:underline decoration-brand-orange underline-offset-4 transition-all"
              >
                {o.cta}
              </button>
            </div>
          )}
        />

        {/* deals strip */}
        <Stagger
          items={DEALS}
          base={520}
          step={100}
          className="mt-14 grid gap-6 md:grid-cols-3"
          render={(d) => (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-brand-orange hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{d.emoji}</span>
                <span className="text-[10px] font-extrabold text-brand-orange bg-brand-orange/15 rounded-full px-2.5 py-1">
                  {d.tag}
                </span>
              </div>
              <h4 className="mt-2.5 font-extrabold text-white text-lg">{d.title}</h4>
              <p className="mt-1.5 text-white/65 text-sm leading-relaxed">{d.desc}</p>
            </div>
          )}
        />
      </div>
    </section>
  )
}