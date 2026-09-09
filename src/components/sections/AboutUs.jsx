// ============================================================
// SECTION — AboutUs.jsx (intro split + "Why Duta Mall?" cards)
// Data ← aboutData.jsx · Function ← animations.jsx / media.jsx / navigation.jsx
// ============================================================

import React from 'react'
import { ABOUT } from '../../data/aboutData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'
import { SafeImage } from '../../functions/media.jsx'
import { scrollToSection } from '../../functions/navigation.jsx'

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-navy scroll-mt-24">
      <div className="absolute -left-24 top-1/3 w-80 h-80 rounded-full bg-brand-deep/25 blur-3xl anim-float-slow" />
      <div className="absolute -right-20 bottom-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl anim-float" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24">
        {/* split: tekst + happy moment card */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">{ABOUT.kicker}</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">{ABOUT.title}</h2>
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-white/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative rounded-3xl overflow-hidden min-h-[26rem] shadow-card border border-white/15">
              <SafeImage
                src={ABOUT.bg}
                alt="Inside Duta Mall Palangka Raya"
                emoji="🎉"
                gradient="bg-gradient-to-br from-brand-deep to-brand-navyDark"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-brand-navyDark/30" />
            </div>
          </Reveal>
        </div>

        {/* why cards */}
        <Reveal className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white">{ABOUT.whyTitle}</h3>
        </Reveal>
        <Stagger
          items={ABOUT.why}
          base={160}
          step={90}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          render={(w) => (
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-brand-gold/70 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <span className="text-4xl">{w.emoji}</span>
              <h4 className="mt-2.5 font-extrabold text-white text-lg">{w.title}</h4>
              <p className="mt-1.5 text-white/65 text-sm leading-relaxed">{w.text}</p>
            </div>
          )}
        />

        {/* visit CTA */}
        <Reveal delay={420}>
          <div className="mt-14 rounded-2xl border-2 border-dashed border-brand-gold/40 bg-white/5 backdrop-blur p-7 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-white font-extrabold text-xl">Kali pertama di Duta Mall?</p>
              <p className="mt-1 text-white/65 text-sm">Map gratit di setiap entri, layanan stroller, dan welcome gift untuk member baru.</p>
            </div>
            <button
              onClick={() => scrollToSection(ABOUT.visit.target)}
              className="bg-brand-gold hover:bg-brand-navy hover:text-white text-brand-navyDark font-bold rounded-full px-7 py-3 shadow-glow hover:scale-105 transition-all"
            >
              {ABOUT.visit.label} →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}