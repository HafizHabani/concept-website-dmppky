// ============================================================
// SECTION — News.jsx (Artikel cards)
// Data ← newsData.jsx · Function ← animations.jsx / media.jsx
// ============================================================

import React from 'react'
import { NEWS_HEADER, NEWS } from '../../data/newsData.jsx'
import { Reveal, Stagger } from '../../functions/animations.jsx'
import { SafeImage } from '../../functions/media.jsx'

const card = (n) => (
  <article className="group flex flex-col bg-white rounded-2xl border border-brand-navyDark/10 overflow-hidden hover:shadow-card hover:-translate-y-1.5 hover:border-brand-navy/50 transition-all duration-300">
    <div className="relative h-44 overflow-hidden shrink-0">
      <SafeImage
        src={n.img}
        alt={n.title}
        gradient={n.gradient}
        emoji={n.emoji}
        imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        className="h-full w-full"
      />
      <span className="absolute top-3 left-3 text-[11px] font-bold text-brand-navyDark bg-white/90 rounded-full px-2.5 py-1">
        {n.category}
      </span>
      <span className="absolute bottom-3 right-3 text-[10px] text-white bg-brand-navyDark/70 rounded-md px-2 py-1">
        📖 {n.readTime}
      </span>
    </div>

    <div className="p-5 flex-1">
      <p className="text-[11px] text-brand-navyDark/45">🗓 {n.date}</p>
      <h3 className="mt-1.5 font-extrabold text-brand-navyDark leading-snug group-hover:text-brand-navy transition-colors">
        {n.title}
      </h3>
      <p className="mt-2 text-sm text-brand-navyDark/60 line-clamp-2">{n.excerpt}</p>
      <p className="mt-3 text-brand-navy font-bold text-sm group-hover:tracking-wide transition-all">
            Baca artikel →
          </p>
    </div>
  </article>
)

export default function News() {
  return (
    <section id="news" className="relative bg-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-navy text-xs font-bold tracking-[0.3em] uppercase">{NEWS_HEADER.kicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-navyDark">{NEWS_HEADER.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-navyDark/60">{NEWS_HEADER.subtitle}</p>
        </Reveal>

        <Stagger
          items={NEWS}
          base={140}
          step={90}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          render={card}
        />
      </div>
    </section>
  )
}