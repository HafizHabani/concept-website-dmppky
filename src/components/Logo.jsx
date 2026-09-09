// ============================================================
// Logo — full logo DMPKKY dari assets/logo-dmpky.jpeg
// Dipakai di Navbar & Footer. Data brand dari siteData.jsx.
// ============================================================

import React from 'react'
import logoImg from '../assets/logo-dmpky.png'

export function LogoIcon({ size = 100, className = '' }) {
  return (
    <img
      src={logoImg}
      alt="Duta Mall Palangka Raya — logo"
      width={size}
      height={size}
      className={`shrink-0 object-cover  ${className}`}
    />
  )
}

export default function Logo({ size = 100, className = '' }) {
  return (
    <span className={`inline-flex shrink-0 group ${className}`}>
      <LogoIcon
        size={size}
        className="group-hover:rotate-3 group-hover:scale-105 transition-transform"
      />
    </span>
  )
}