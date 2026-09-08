// ============================================================
// SECTION — Home.jsx (Hero + Stats + Marquee)
// Data ← siteData.jsx · Function ← animations.jsx / counters.jsx / navigation.jsx
// ============================================================

import React from 'react'
import { SITE } from '../../data/siteData.jsx'
import { Reveal, Marquee } from '../../functions/animations.jsx'
import { Counter } from '../../functions/counters.jsx'
import { SafeImage } from '../../functions/media.jsx'
import { scrollToSection } from '../../functions/navigation.jsx'

export default function Home() {
  const { hero, stats } = SITE

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden scroll-mt-24">
      {/* background foto + overlay + orbs */}
      <SafeImage
        src={hero.bg}
        alt="Duta Mall Palangka Raya hero"
        emoji="🛍️"
        gradient="bg-gradient-to-br from-brand-dark to-brand-purple"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/55 to-brand-dark/80" />
      <div className="absolute -left-16 top-24 w-72 h-72 rounded-full bg-brand-orange/25 blur-3xl anim-float" />
      <div className="absolute -right-24 top-1/3 w-96 h-96 rounded-full bg-brand-yellow/15 blur-3xl anim-float-slow" />

      {/* tekst tengah */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-14 flex-1 text-center">
        <Reveal>
          <p className="text-brand-yellow text-xs md:text-sm font-bold tracking-[0.35em] uppercase">
            {hero.kicker}
          </p>
        </Reveal>

        <Reveal delay={110}>
          <h1 className="mt-5 text-5xl md:text-7xl font-black text-white leading-tight">
            {hero.titleA} <span className="anim-gradient">{hero.titleB}</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-base md:text-lg">{hero.subtitle}</p>
        </Reveal>

        <Reveal delay={330}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(hero.ctaPrimary.target)}
              className="bg-brand-orange hover:bg-brand-yellow hover:text-brand-dark text-white font-bold rounded-full px-8 py-3.5 shadow-glow hover:scale-105 transition-all"
            >
              🛍️ {hero.ctaPrimary.label}
            </button>
            <button
              onClick={() => scrollToSection(hero.ctaSecondary.target)}
              className="bg-white/10 backdrop-blur border border-white/25 hover:border-brand-orange text-white font-bold rounded-full px-8 py-3.5 hover:scale-105 transition-all"
            >
              {hero.ctaSecondary.label} →
            </button>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {hero.info.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3"
              >
                <span className="text-xl">{c.icon}</span>
                <div className="leading-tight text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/55">{c.label}</p>
                  <p className="text-sm font-semibold text-white">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* stats + marquee */}
      <div className="relative bg-brand-dark/70 backdrop-blur border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-3xl">{s.icon}</span>
                <p className="text-4xl font-black text-brand-orange">
                  <Counter end={s.end} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Marquee items={SITE.marquee} speed={34} />
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-32 right-4 text-brand-orange text-2xl anim-bounce" aria-hidden="true">
        ⌄
      </div>
    </section>
  )
}