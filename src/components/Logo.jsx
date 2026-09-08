// ============================================================
// Logo — ikon storefront/toko putih (relevan konteks mall)
// Dipakai di Navbar & Footer. Data brand dari siteData.jsx.
// ============================================================

import React from 'react'
import { SITE } from '../data/siteData.jsx'

export function LogoIcon({ size = 40, className = '' }) {
  return (
    <span
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow shadow-glow ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size * 0.6, height: size * 0.6 }}>
        {/* atap toko */}
        <path d="M2 7l1.6-3.2A2 2 0 0 1 5.4 2.8h13.2a2 2 0 0 1 1.8 1L22 7" />
        {/* badan toko */}
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        {/* pintu */}
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        {/* garis awning */}
        <path d="M2 7h20" />
        <path d="M4 12v3a1.5 1.5 0 0 0 3 0v-3M9 12v3a1.5 1.5 0 0 0 3 0v-3M14 12v3a1.5 1.5 0 0 0 3 0v-3M19 12v3a1.5 1.5 0 0 0 1 .0" />
      </svg>
    </span>
  )
}

export default function Logo({ size = 40, className = '' }) {
  const [w1, w2] = SITE.brand.split(' ')
  return (
    <span className={`inline-flex items-center gap-2.5 group ${className}`}>
      <LogoIcon size={size} className="group-hover:rotate-6 group-hover:scale-105 transition-transform" />
      <span style={{ fontSize: size * 0.55 }} className="font-extrabold tracking-tight text-white leading-none">
        {w1}
        <span className="text-brand-orange">{w2}</span>
      </span>
    </span>
  )
}