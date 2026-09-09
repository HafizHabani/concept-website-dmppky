// ============================================================
// SECTION — Home.jsx (Hero + Stats)
// Data ← siteData.jsx · Function ← animations.jsx / counters.jsx / navigation.jsx
// ============================================================

import React from 'react'
import { SITE } from '../../data/siteData.jsx'
import { Reveal } from '../../functions/animations.jsx'
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
        gradient="bg-gradient-to-br from-brand-navyDark to-brand-navy"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navyDark/85 via-brand-navyDark/55 to-brand-navyDark/80" />
      <div className="absolute -left-16 top-24 w-72 h-72 rounded-full bg-brand-gold/25 blur-3xl anim-float" />
      <div className="absolute -right-24 top-1/3 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl anim-float-slow" />

      {/* tekst tengah */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-14 flex-1 text-center">
        

        <Reveal delay={110}>
          <h1 className="mt-5 text-5xl md:text-7xl font-black text-white leading-tight">
            <span className="anim-gradient">{hero.titleA} {hero.titleB}</span>
          </h1>
        </Reveal>
        
        <Reveal>
          <p className="text-brand-gold text-xl md:text-xl font-bold tracking-[0.35em] uppercase">
            {hero.kicker}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-base md:text-lg">{hero.subtitle}</p>
        </Reveal>

        <Reveal delay={330}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection(hero.ctaPrimary.target)}
              className="bg-brand-gold hover:bg-brand-navy hover:text-white text-brand-navyDark font-bold rounded-full px-8 py-3.5 shadow-glow hover:scale-105 transition-all"
            >
              🛍️ {hero.ctaPrimary.label}
            </button>
            <button
              onClick={() => scrollToSection(hero.ctaSecondary.target)}
              className="bg-white/10 backdrop-blur border border-white/25 hover:border-brand-gold text-white font-bold rounded-full px-8 py-3.5 hover:scale-105 transition-all"
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

      {/* stats */}
      <div className="relative bg-brand-navyDark/70 backdrop-blur border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-3xl">{s.icon}</span>
                <p className="text-4xl font-black text-brand-gold">
                  <Counter end={s.end} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-32 right-4 text-brand-gold text-2xl anim-bounce" aria-hidden="true">
        ⌄
      </div>
    </section>
  )
}