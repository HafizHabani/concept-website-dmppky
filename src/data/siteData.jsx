// ============================================================
// DATA — siteData.jsx
// SEMUA const data global mall. App.jsx & komponent IMPORT dari sini.
// Duta Mall Palangka Raya · Kalimantan Tengah · soft opening 3 Okt 2025
// ============================================================

export const SITE = {
  brand: 'Duta Mall',
  brandFull: 'Duta Mall Palangka Raya',
  tagline: 'Pusat perbelanjaan paling besar di Kalimantan Tengah',

  topBar: {
    message: '🎟  Selamat datang di Duta Mall Palangka Raya — buka harian 10.00–22.00 WIB',
    link: { label: 'Lihat promo & event →', target: 'events' }
  },

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'tenants', label: 'Tenants' },
    { id: 'events', label: 'Events' },
    { id: 'promo', label: 'Promo' },
    { id: 'news', label: 'News' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'contact', label: 'Contact' }
  ],

  cta: { label: 'Rute ke Mall', target: 'contact' },

  hero: {
    bg: 'https://commons.wikimedia.org/wiki/Special:FilePath/Duta%20Mall%20Palangka%20Raya%20(20260117%20145431).jpg?width=1920',
    kicker: 'GOVINDO GROUP PRESENTA',
    titleA: 'Duta',
    titleB: 'Mall',
    subtitle:
      'Pusat perbelanjaan paling besar dan paling lengkap di Palangka Raya dan Kalimantan Tengah — 200+ brand national dan international, favorit food garden, XXI Cinema Premiere dan hotel 4 bintang, semua di Jalan Adonis Samad.',
    ctaPrimary: { label: 'Kunjungi Toko', target: 'tenants' },
    ctaSecondary: { label: 'Lihat Event', target: 'events' },
    info: [
      { icon: '🕙', label: 'Buka Harian', value: '10.00 – 22.00 WIB' },
      { icon: '📍', label: 'Lokasi', value: 'Jl. Adonis Samad, Langkai' },
      { icon: '🅿️', label: 'Parkiran', value: 'Cashless · E-money & QRIS' }
    ]
  },

  stats: [
    { icon: '🏢', end: 6, suffix: '', label: 'Lantai Ritel' },
    { icon: '🛍️', end: 200, suffix: '+', label: 'Toko & Brand' },
    { icon: '📏', end: 150000, suffix: ' m²', label: 'Luas Lantai' },
    { icon: '🏨', end: 288, suffix: '', label: 'Kamar FUGO Hotel' }
  ],

  marquee: [
    '🎉 Soft opening 3 Okt 2025 — diresmikan Wagub Edy Pratowo & Wali Kota Fairid Naparin',
    '🛍️ 40 tenant operasional di launch, bertambah ke 150+ — mall paling besar di Kalteng',
    '🎬 XXI Cinema Premiere: kursi recliner dengan peyangga kaki & selimut nyaman',
    '🅿️ Parkiran 100% cashless — bayar dengan E-money atau QRIS',
    '🏨 FUGO Hotel Palangka Raya (4 bintang, 288 kamar) buka 2026',
    '🛒 Anchors di LG: Cermart · MR DIY · Maybank · OB Fitness'
  ],

  socials: [
    { id: 'ig', label: 'IG' },
    { id: 'fb', label: 'FB' },
    { id: 'web', label: 'W' },
    { id: 'tt', label: 'TT' }
  ],

  footer: {
    linksLabel: 'Link',
    questionTitle: 'Kilau gatu sual?',
    phone: '0511 327 8888',
    email: 'management@dutamallpky.co.id',
    locationTitle: 'Lokasi',
    address: 'Jl. Adonis Samad No. 8, Langkai, Pahandut, Palangka Raya, Kalimantan Tengah 74874, Indonesia',
    mapLabel: 'Map Kami →',
    newsletter: {
      label: 'Gabung newsletter mall',
      placeholder: 'Adres email lu',
      button: 'Gabung'
    },
    copyright: 'Copyright © 2026 Duta Mall Palangka Raya · Govindo Group',
    legal: [
      { label: 'Termin & Kondisi', target: '#' },
      { label: 'Policy Privasi', target: '#' },
      { label: 'Feedback Lu', target: '#' }
    ]
  }
}