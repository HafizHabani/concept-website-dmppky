// ============================================================
// Navbar — sticky, scrollspy highlight, mobile hamburger.
// Liquid glass style: frosted blur, translucent layers, inner glow.
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
    <header className={`sticky top-0 z-50 transition-all duration-500 ${sticky ? 'py-3' : 'py-0'}`}>
      <div className={`mx-auto transition-all duration-500 ${sticky ? 'max-w-6xl px-4' : 'max-w-full px-0'}`}>
        <nav
          className={`relative mx-auto flex items-center justify-between gap-4 h-20 px-4 lg:px-8 overflow-hidden transition-all duration-500 ${
            sticky ? 'rounded-3xl' : 'rounded-none'
          }`}
          style={{
            background: sticky
              ? 'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
            backdropFilter: 'blur(22px) saturate(180%)',
            WebkitBackdropFilter: 'blur(22px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: sticky
              ? 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(4,12,30,0.35)'
              : 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 24px rgba(4,12,30,0.15)'
          }}
        >
          {/* base tint so text stays readable over any page content */}
          <div className="absolute inset-0 -z-10 bg-brand-navyDark/40" />

          {/* glass sheen — soft diagonal highlight */}
          <div
            className="pointer-events-none absolute -inset-x-10 -top-10 h-32 -z-10 opacity-60"
            style={{
              background: 'linear-gradient(115deg, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%)'
            }}
          />

          {/* logo */}
          <button onClick={() => go('home')} className="relative shrink-0">
            <Logo size={150} />
          </button>

          {/* desktop links */}
          <ul className="hidden lg:flex items-center gap-2">
            {SITE.navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === l.id
                      ? 'text-white bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* desktop CTA + mobile hamburger */}
          <div className="relative flex items-center gap-3">
            <button
              onClick={() => go(SITE.cta.target)}
              className="hidden lg:inline-flex items-center gap-2 text-brand-navyDark text-sm font-bold rounded-full px-5 py-2.5 transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,209,102,1), rgba(255,190,60,0.9))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 4px 16px rgba(255,190,60,0.35)'
              }}
            >
              🧭 {SITE.cta.label}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden w-11 h-11 rounded-2xl text-white text-xl flex items-center justify-center transition-colors"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* mobile panel */}
        {open && (
          <div
            className="lg:hidden anim-fade mt-2 rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(20,30,55,0.75), rgba(20,30,55,0.55))',
              backdropFilter: 'blur(22px) saturate(180%)',
              WebkitBackdropFilter: 'blur(22px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 12px 32px rgba(4,12,30,0.45)'
            }}
          >
            <div className="px-4 py-3">
              {SITE.navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    active === l.id ? 'bg-white/15 text-brand-gold' : 'text-white/85 hover:bg-white/10 hover:text-brand-gold'
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go(SITE.cta.target)}
                className="mt-2 w-full text-center text-brand-navyDark font-bold rounded-full px-5 py-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,209,102,1), rgba(255,190,60,0.9))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)'
                }}
              >
                🧭 {SITE.cta.label}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}