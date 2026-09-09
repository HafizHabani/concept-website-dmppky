// ============================================================
// DATA — siteData.jsx
// SEMUA const data global mall. App.jsx & komponent IMPORT dari sini.
// Duta Mall Palangka Raya · Kalimantan Tengah · soft opening 3 Okt 2025
// ============================================================

export const SITE = {
  brandFull: 'Duta Mall Palangka Raya',
  tagline: 'Pusat perbelanjaan paling besar di Kalimantan Tengah',

  topBar: {
    message: 'Selamat datang di Duta Mall Palangka Raya — buka harian 10.00–22.00 WIB',
    link: { label: 'Lihat fasilitas & event →', target: 'events' }
  },

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'tenants', label: 'Tenants' },
    { id: 'events', label: 'Events' },
    { id: 'facility', label: 'Fasilitas' },
    { id: 'news', label: 'News' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'contact', label: 'Contact' }
  ],

  cta: { label: 'Rute ke Mall', target: 'contact' },

  hero: {
    bg: 'https://commons.wikimedia.org/wiki/Special:FilePath/Duta%20Mall%20Palangka%20Raya%20(20260117%20145431).jpg?width=1920',
    kicker: 'Palangkaraya',
    titleA: 'Duta',
    titleB: 'Mall',
    subtitle:
      'Pusat perbelanjaan terbesar dan terlengkap di Palangka Raya dan Kalimantan Tengah',
    ctaPrimary: { label: 'Kunjungi Toko', target: 'tenants' },
    ctaSecondary: { label: 'Lihat Event', target: 'events' },
    info: [
      { icon: '🕙', label: 'Buka Harian', value: '10.00 – 22.00 WIB' },
      { icon: '📍', label: 'Lokasi', value: 'Jl. Adonis Samad, Langkai' },
      { icon: '🅿️', label: 'Parkiran', value: 'Cash, E-money & QRIS' }
    ]
  },

  stats: [
    { icon: '🏢', end: 6, suffix: '', label: 'Lantai Ritel' },
    { icon: '🛍️', end: 60, suffix: '+', label: 'Tenants' },
    { icon: '📏', end: 150000, suffix: ' m²', label: 'Luas Parkiran' },
    { icon: '🏨', end: 30, suffix: '', label: 'Open Booth' }
  ],

  socials: [
    { id: 'ig', label: 'IG' },
    { id: 'fb', label: 'FB' },
    { id: 'web', label: 'W' },
    { id: 'tt', label: 'TT' }
  ],

  footer: {
    linksLabel: 'Link',
    questionTitle: 'Hubungi Kami',
    phone: '0511 327 8888',
    email: 'management@dutamallpky.co.id',
    locationTitle: 'Lokasi',
    address: 'Jl. Adonis Samad No. 8, Langkai, Pahandut, Palangka Raya, Kalimantan Tengah 74874, Indonesia',
    mapLabel: 'Map Kami →',
    newsletter: {
      label: 'Bergabung Bersama Kami',
      placeholder: 'Address email',
      button: 'Gabung'
    },
    copyright: 'Copyright © 2026 Duta Mall Palangka Raya · Govindo Group',
    legal: [
      { label: 'Term & Condition', target: '#' },
      { label: 'Policy Privasi', target: '#' },
      { label: 'Feedback', target: '#' }
    ]
  }
}