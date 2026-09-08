// ============================================================
// Navbar — sticky, scrollspy highlight, mobile hamburger.
// Semua data dari siteData.jsx; semua logic dari navigation.jsx.
// ============================================================

import React, { useState } from 'react'
import { SITE } from '../data/siteData.jsx'
import Logo from './Logo.jsx'
import { scrollToSection, useScrollSpy, useScrolled } from '../functions/navigation.jsx'

export default function Navbar() {
  const ids = SITE.navLinks.map((l) => l.id)
  const active = useScrollSpy(ids, 150)
  const sticky = useScrolled(30)
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        sticky
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-brand-dark/40'
          : 'bg-gradient-to-r from-brand-maroon to-brand-purple'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* logo */}
        <button onClick={() => go('home')} className="shrink-0">
          <Logo size={44} />
        </button>

        {/* desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {SITE.navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative text-sm font-medium text-white/85 hover:text-white transition-colors ${
                  active === l.id ? 'text-white' : ''
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
                    active === l.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(SITE.cta.target)}
            className="hidden lg:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-yellow hover:text-brand-dark text-white text-sm font-bold rounded-full px-5 py-2.5 shadow-glow hover:scale-105 transition-all"
          >
            🧭 {SITE.cta.label}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="lg:hidden anim-fade absolute left-0 right-0 top-full bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
          <div className="px-4 py-3">
            {SITE.navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                  active === l.id ? 'bg-brand-orange/15 text-brand-orange' : 'text-white/85 hover:text-brand-orange'
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go(SITE.cta.target)}
              className="mt-2 w-full text-center bg-brand-orange text-white font-bold rounded-full px-5 py-3"
            >
              🧭 {SITE.cta.label}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}