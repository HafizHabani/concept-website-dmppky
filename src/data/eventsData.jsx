// ============================================================
// DATA — eventsData.jsx
// Jadwal event grid: 3 "days" (chapter) × 3 zones (lantai).
// cell.event = null → pastel empty cell.
// ============================================================

export const EVENTS_HEADER = {
  kicker: 'Sedang Da',
  title: 'Jadwal Event',
  subtitle:
    'Sekedar pembukaan grand sampai kehidupan harian — tiga chapter mall paling besar di Palangka Raya, lantai by lantai.',
  note: '★ Soft opening 3 Okt 2025 · buka harian 10.00–22.00 WIB · entry gratit · parkiran cashless (E-money & QRIS).',
  cta: { label: 'Rencana visit lu', target: 'contact' }
}

export const EVENT_ZONES = [
  { id: 'lg', name: 'Lower Ground', emoji: '🛒' },
  { id: 'g', name: 'Ground', emoji: '🍜' },
  { id: 'ug', name: 'Lantai 1–3', emoji: '🛍️' }
]

export const EVENT_DAYS = [
  { label: 'Opening', date: '3 Okt 2025' },
  { label: 'Buka Harian', date: '10.00–22.00 WIB' },
  { label: 'Berjalan', date: '2026' }
]

export const EMPTY_CELL_CLASSES = ['bg-brand-pink', 'bg-brand-mint', 'bg-brand-beige']

export const EVENTS_SCHEDULE = [
  // ---- Chapter 1: Opening, 3 Okt 2025 ----
  {
    day: 0, zone: 0,
    event: {
      title: 'Grand Opening', time: '3 Okt 2025 · soft opening', by: 'Diresmikan Govindo Group', emoji: '🎉',
      tile: 'bg-gradient-to-br from-brand-dark to-brand-purple',
      accent: 'border-b-4 border-brand-orange'
    }
  },
  {
    day: 0, zone: 1,
    event: {
      title: 'Pembukaan Resmi', time: '10.00 WIB', by: 'Wagub Edy Pratowo & Wali Kota Fairid Naparin', emoji: '🎊',
      tile: 'bg-gradient-to-br from-brand-maroon to-brand-purple',
      accent: 'border-b-4 border-brand-yellow'
    }
  },
  { day: 0, zone: 2, event: null },
  // ---- Chapter 2: Buka Harian ----
  {
    day: 1, zone: 0,
    event: {
      title: '40 Tenant Operasional', time: 'LG → 3F', by: 'Sekedar Cermart sampai Yakiniku Like', emoji: '🛒',
      tile: 'bg-gradient-to-br from-brand-purple to-brand-dark',
      accent: 'border-b-4 border-brand-pink'
    }
  },
  { day: 1, zone: 1, event: null },
  {
    day: 1, zone: 2,
    event: {
      title: 'Flagships Fashion', time: 'UG & Lantai 1–3', by: 'Puma · Adidas · New Balance', emoji: '👟',
      tile: 'bg-gradient-to-br from-brand-maroon to-brand-dark',
      accent: 'border-b-4 border-brand-mint'
    }
  },
  // ---- Chapter 3: Berjalan 2026 ----
  {
    day: 2, zone: 0,
    event: {
      title: 'Kecantikan & Cinema', time: 'Tiba baru 2026', by: 'Sociolla · XXI Premiere', emoji: '💄',
      tile: 'bg-gradient-to-br from-brand-dark to-brand-maroon',
      accent: 'border-b-4 border-brand-orange'
    }
  },
  { day: 2, zone: 1, event: null },
  {
    day: 2, zone: 2,
    event: {
      title: 'Flagships Baru', time: 'Grand opening 2026', by: 'Executive · Colorbox · Wrangler', emoji: '✨',
      tile: 'bg-gradient-to-br from-brand-purple to-brand-maroon',
      accent: 'border-b-4 border-brand-yellow'
    }
  }
]