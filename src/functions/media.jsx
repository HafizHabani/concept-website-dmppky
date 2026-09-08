// ============================================================
// FUNCTIONS — media.jsx
// SafeImage: gambar dengan fallback gradient + emoji (offline-safe).
// ============================================================

import React, { useState } from 'react'

export function SafeImage({
  src,
  alt = '',
  gradient = 'bg-brand-gray',
  emoji = '🏬',
  className = '',
  imgClassName = 'w-full h-full object-cover'
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`${gradient} ${className} flex items-center justify-center`}>
        <span className="text-6xl drop-shadow-lg">{emoji}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${imgClassName} ${className}`}
    />
  )
}