// ============================================================
// DATA — facilitiesData.jsx
// Fasilitas di dalam Duta Mall Palangka Raya.
// Section "Our Facility" (sebelumnya Promo) menampilkan ini.
// ============================================================

import bgAtm from '../assets/bg-tenant/bg-atmcenter.png'

export const FACILITIES_HEADER = {
  kicker: 'Our Facility',
  title: 'Fasilitas di Duta Mall',
  subtitle:
    'Semua kebutuhan pengunjung tersedia — dari informasi, ibadah, hingga kenyamanan keluarga di setiap lantai.'
}

export const FACILITIES = [
  { id: 'info', name: 'Information', desc: 'Pusat informasi', floor: 'LT GF', emoji: 'ℹ️' },
  { id: 'hotel', name: 'Hotel', desc: 'Hotel', floor: 'LT 4', emoji: '🏨' },
  { id: 'atm', name: 'ATM Center', desc: 'Pusat ATM', floor: 'LT LG', emoji: '🏧', img: bgAtm },
  { id: 'ladies', name: 'Ladies Parking', desc: 'Parkir khusus wanita', floor: 'LT GF', emoji: '👩' },
  { id: 'disabled', name: 'Disabled Facilities', desc: 'Fasilitas untuk penyandang disabilitas', floor: 'LT GF & LT LG', emoji: '♿' },
  { id: 'clinic', name: 'Clinic', desc: 'Klinik', floor: 'LT GF', emoji: '🏥' },
  { id: 'nursery', name: 'Nursery Room', desc: 'Ruang menyusui / ruang bayi', floor: 'All Lantai', emoji: '🍼' },
  { id: 'musholla', name: 'Musholla', desc: 'Tempat ibadah', floor: 'LT 1 & UG', emoji: '🕌' },
  { id: 'parking', name: 'Parking', desc: 'Area parkir', floor: 'LT Basement, LG, GF', emoji: '🅿️' },
  { id: 'toilet', name: 'Toilet', desc: 'Toilet', floor: 'All Lantai', emoji: '🚻' },
  { id: 'sitting', name: 'Sitting Area', desc: 'Area duduk / istirahat', floor: 'LT LG, UG, LT 1, LT 2, & LT 3', emoji: '🪑' }
]