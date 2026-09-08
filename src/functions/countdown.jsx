// ============================================================
// FUNCTIONS — countdown.jsx
// Live countdown timer. Promo.jsx panggil ini.
// start = { day, hour, minute } → helper menghitung "next occurrence"
// (misal day:1 → tanggal 1 bulan depan jam 00:00).
// ============================================================

import React, { useEffect, useState } from 'react'
import { pad2 } from './helpers.jsx'

function nextStart({ day = 1, hour = 0, minute = 0 }) {
  const now = new Date()
  let target = new Date(now.getFullYear(), now.getMonth(), day, hour, minute, 0)
  if (target.getTime() <= now.getTime()) {
    target = new Date(now.getFullYear(), now.getMonth() + 1, day, hour, minute, 0)
  }
  return target
}

export function CountdownTimer({ start, labels = ['days', 'hours', 'mins', 'secs'], className = '' }) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const target = nextStart(start)
    const tick = () => {
      const ms = Math.max(0, target.getTime() - Date.now())
      const s = Math.floor(ms / 1000)
      setLeft({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(start)])

  const cells = [left.d, left.h, left.m, left.s]

  return (
    <div className={className}>
      {cells.map((v, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-brand-orange text-4xl font-black px-1.5">:</span>}
          <div className="countdown-cell">
            {/* key berubah tiap detik → anim-pop re-trigger */}
            <span key={`${v}-${i}`} className="anim-pop text-5xl font-black text-brand-orange">
              {pad2(v)}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-white/60">{labels[i]}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}