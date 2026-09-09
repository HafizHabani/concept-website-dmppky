// ============================================================
// Footer — orange band (brand + newsletter + social) + black 3-col footer.
// Data dari siteData.jsx, scroll pakai navigation.jsx.
// ============================================================

import React, { useState } from 'react'
import { SITE } from '../data/siteData.jsx'
import { LogoIcon } from './Logo.jsx'
import { scrollToSection } from '../functions/navigation.jsx'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)
  const f = SITE.footer

  const join = (e) => {
    e.preventDefault()
    if (email.trim()) setJoined(true)
  }

  return (
    <footer>
      {/* orange band */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-deep overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <LogoIcon size={110} />
            <p className="mt-2 text-white/85 text-sm">{SITE.tagline} — buka harian 10.00–22.00 WIB.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <form onSubmit={join} className="flex items-center gap-2">
              {joined ? (
                <p className="bg-white/95 text-brand-navyDark font-bold text-sm rounded-full px-5 py-2.5">
                  🎉 Lu gabung! Kasiki inbox lu.
                </p>
              ) : (
                <>
                  <span className="hidden md:inline text-white text-sm font-semibold">{f.newsletter.label}</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={f.newsletter.placeholder}
                    className="w-52 rounded-full bg-white/95 placeholder-brand-navyDark/40 text-brand-navyDark text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-navyDark"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-brand-gold hover:bg-brand-gold/85 text-brand-navyDark font-bold text-sm px-5 py-2.5 transition-colors"
                  >
                    {f.newsletter.button}
                  </button>
                </>
              )}
            </form>

            <div className="flex items-center gap-2.5" aria-label="Social media">
              {SITE.socials.map((s) => (
                <a
                  key={s.id}
                  href="#"
                  title={s.label}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white font-extrabold text-xs flex items-center justify-center transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="bg-brand-navyDark">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-brand-gold font-extrabold tracking-widest uppercase text-sm">{f.linksLabel}</h4>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              {SITE.navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollToSection(l.id)}
                    className="text-white/70 hover:text-brand-gold text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-extrabold tracking-widest uppercase text-sm">{f.questionTitle}</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">📞</span>
                <a href={`tel:${f.phone.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors">
                  {f.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">✉️</span>
                <a href={`mailto:${f.email}`} className="hover:text-brand-gold transition-colors">
                  {f.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-extrabold tracking-widest uppercase text-sm">{f.locationTitle}</h4>
            <p className="mt-5 text-sm text-white/75 leading-relaxed">📍 {f.address}</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-3 text-brand-gold font-bold text-sm hover:underline decoration-brand-gold underline-offset-4"
            >
              🗺 {f.mapLabel}
            </button>
          </div>
        </div>

        {/* copyright bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs">{f.copyright}</p>
            <ul className="flex items-center gap-5">
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.target} className="text-white/50 hover:text-brand-gold text-xs transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}