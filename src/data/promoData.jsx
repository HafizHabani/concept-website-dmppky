// ============================================================
// DATA — promoData.jsx
// Benefit & promo Duta Mall Palangka Raya.
// Countdown → FUGO Hotel Palangka Raya (4 bintang, 288 kamar, buka 2026).
// ============================================================

export const PROMO_HEADER = {
  kicker: 'Benefit & Pass',
  title: 'Kenapa lu love tempat ini',
  subtitle: 'Kada barang lu tiyak sebelum visit — entry gratit, parkiran cashless dan promo market lokal.'
}

export const COUNTDOWN_SALE = {
  label: 'FUGO HOTEL PALANGKA RAYA',
  kicker: 'Countdown ke pembukaan hotel 4 bintang',
  note: '7 lantai di atas mall · 288 kamar · target rampung 2026 · kenyamanan 4 bintang, hospitalitas lokal.',
  start: { day: 1, hour: 0, minute: 0 },
  cta: { label: 'Set reminder', target: 'contact' }
}

export const OFFERS = [
  {
    id: 'free',
    name: 'Entry Gratit',
    price: '0',
    currency: 'Rp',
    period: '/hari',
    sub: 'Including barang baik:',
    badge: 'Buka harian',
    features: [
      'Entry gratit setiap hari, 10.00–22.00 WIB',
      '6 lantai ritel, LG → 3F',
      'Makanan, fashion & bermain di satu roof',
      'Parkiran cashless — E-money & QRIS'
    ],
    cta: 'Rencana visit lu →'
  },
  {
    id: 'local',
    name: 'Market UMKM Lokal',
    price: '0',
    currency: 'Rp',
    period: '/promo',
    sub: 'Kenga ku makin mall lokal-first?',
    badge: 'Lokal pertama',
    features: [
      'Ruang shelf untuk mikro-bisnis lokal',
      'Promo produk lokal dorong oleh Wali Kota',
      'Staff: ±90% direkrut dari Palangka Raya',
      'Bertambah ke 150+ tenant di 2026'
    ],
    cta: 'Kesak di Tenant Relations →'
  }
]

export const DEALS = [
  { emoji: '🅿️', title: 'Parkiran Cashless', desc: 'E-money atau QRIS di setiap gate — tap ke park, no cash, no queue.', tag: 'PARKIRAN' },
  { emoji: '🍜', title: 'Food Garden', desc: 'Kimukatsu, Chatime, Marugame Udon, Ichiban Sushi, Pepper Lunch & many more.', tag: 'ATRIUM' },
  { emoji: '🎬', title: 'XXI Cinema Premiere', desc: 'Kursi recliner dengan peyangga kaki dan selimut nyaman di Lantai 3.', tag: 'CINEMA' }
]