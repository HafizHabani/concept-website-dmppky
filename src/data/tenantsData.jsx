// ============================================================
// DATA — tenantsData.jsx
// Daftar tenant Duta Mall Palangka Raya — dikelompokkan per lantai,
// kartu bergradient per kategori.
// ============================================================

export const TENANTS_HEADER = {
  kicker: 'Tenant Directory',
  title: 'Daftar Tenant & Toko',
  subtitle:
    '65 tenant dari Lower Ground sampai Lantai 3 — daftar lengkap tenant di setiap lantai.',
  glossary: 'Tapkan lantai untuk filter direktori, atau lihat semua tenant di bawah.'
}

export const TENANT_CATEGORIES = [
  { id: 'fashion', name: 'Fashion', emoji: '👗', gradient: 'bg-gradient-to-br from-rose-400 to-orange-400' },
  { id: 'food', name: 'Makanan & Minuman', emoji: '🍜', gradient: 'bg-gradient-to-br from-amber-400 to-red-400' },
  { id: 'home', name: 'Habitat & Lifestyle', emoji: '🛋️', gradient: 'bg-gradient-to-br from-teal-400 to-emerald-500' },
  { id: 'fun', name: 'Bermain & Cinema', emoji: '🎡', gradient: 'bg-gradient-to-br from-fuchsia-400 to-purple-500' },
  { id: 'beauty', name: 'Kecantikan & Care', emoji: '💄', gradient: 'bg-gradient-to-br from-pink-400 to-fuchsia-400' },
  { id: 'services', name: 'Layanan', emoji: '🧾', gradient: 'bg-gradient-to-br from-sky-400 to-indigo-500' }
]

// Urutan lantai dari bawah ke atas (untuk chip filter)
export const TENANT_FLOORS = [
  { id: 'LG', name: 'Lower Ground', emoji: '🅿️' },
  { id: 'GF', name: 'Ground Floor', emoji: '🏬' },
  { id: 'UG', name: 'Upper Ground', emoji: '🛍️' },
  { id: '1F', name: 'Lantai 1', emoji: '🛒' },
  { id: '2F', name: 'Lantai 2', emoji: '🎮' },
  { id: '3F', name: 'Lantai 3', emoji: '🎬' }
]

export const TENANTS = [
  // ---- Lower Ground (LG) ----
  { id: 1, name: 'MR.DIY', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🔧' },
  { id: 2, name: 'Cermart', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🛒' },
  { id: 3, name: 'Maybank', category: 'services', floor: 'LG', tag: 'ANCHOR', emoji: '🏦' },
  { id: 4, name: 'Bakso Lapangan Tembak Senayan', category: 'food', floor: 'LG', tag: 'HOT', emoji: '🍜' },
  { id: 5, name: 'Zoom Watch', category: 'services', floor: 'LG', tag: '', emoji: '⌚' },
  { id: 6, name: 'The Bra House', category: 'fashion', floor: 'LG', tag: '', emoji: '👙' },
  { id: 7, name: 'OB Fitness Health', category: 'services', floor: 'LG', tag: 'GYM', emoji: '🏋️' },
  { id: 8, name: 'Willies Bakery', category: 'food', floor: 'LG', tag: '', emoji: '🥐' },

  // ---- Ground Floor (GF) ----
  { id: 9, name: 'Solaria', category: 'food', floor: 'GF', tag: '', emoji: '🌞' },
  { id: 10, name: 'Kimukatsu', category: 'food', floor: 'GF', tag: 'HOT', emoji: '🍛' },
  { id: 11, name: 'A&W', category: 'food', floor: 'GF', tag: '', emoji: '🥤' },
  { id: 12, name: 'Chatime', category: 'food', floor: 'GF', tag: '', emoji: '🧋' },
  { id: 13, name: 'Ichiban Sushi', category: 'food', floor: 'GF', tag: '', emoji: '🍣' },
  { id: 14, name: 'Marugame Udon', category: 'food', floor: 'GF', tag: '', emoji: '🍲' },
  { id: 15, name: 'Ta Wan', category: 'food', floor: 'GF', tag: '', emoji: '🥟' },
  { id: 16, name: 'Guardian', category: 'beauty', floor: 'GF', tag: '', emoji: '💊' },
  { id: 17, name: 'XO Suki', category: 'food', floor: 'GF', tag: '', emoji: '🥢' },
  { id: 18, name: 'Boost', category: 'food', floor: 'GF', tag: '', emoji: '🍹' },
  { id: 19, name: 'Optik Tunggal', category: 'beauty', floor: 'GF', tag: '', emoji: '👓' },
  { id: 20, name: 'The Palace', category: 'food', floor: 'GF', tag: '', emoji: '🍽' },
  { id: 21, name: 'DR Specs', category: 'beauty', floor: 'GF', tag: '', emoji: '🕶️' },
  { id: 22, name: 'Sociolla', category: 'beauty', floor: 'GF', tag: 'HOT', emoji: '💄' },

  // ---- Upper Ground (UG) ----
  { id: 23, name: 'Toys Kingdom', category: 'fun', floor: 'UG', tag: '', emoji: '🧸' },
  { id: 24, name: 'Adidas', category: 'fashion', floor: 'UG', tag: 'HOT', emoji: '⚡' },
  { id: 25, name: 'Skechers', category: 'fashion', floor: 'UG', tag: '', emoji: '👟' },
  { id: 26, name: 'Crocs', category: 'fashion', floor: 'UG', tag: '', emoji: '🥿' },
  { id: 27, name: 'Pepper Lunch', category: 'food', floor: 'UG', tag: '', emoji: '🍳' },
  { id: 28, name: 'Gramedia', category: 'home', floor: 'UG', tag: '', emoji: '📚' },
  { id: 29, name: 'Puma', category: 'fashion', floor: 'UG', tag: '', emoji: '🐆' },
  { id: 30, name: 'Giordano', category: 'fashion', floor: 'UG', tag: '', emoji: '👕' },
  { id: 31, name: 'New Balance', category: 'fashion', floor: 'UG', tag: '', emoji: '🏃' },
  { id: 32, name: 'Ramen 1', category: 'food', floor: 'UG', tag: '', emoji: '🍜' },
  { id: 33, name: 'Yakiniku Like', category: 'food', floor: 'UG', tag: '', emoji: '🥩' },
  { id: 34, name: 'AZKO', category: 'fashion', floor: 'UG', tag: '', emoji: '👘' },
  { id: 35, name: 'OH!SOME', category: 'food', floor: 'UG', tag: '', emoji: '🍟' },
  { id: 36, name: 'Everbest Studio', category: 'services', floor: 'UG', tag: '', emoji: '🖼️' },
  { id: 37, name: 'Delami Brands', category: 'fashion', floor: 'UG', tag: '', emoji: '🛍️' },

  // ---- Lantai 1 (1F) ----
  { id: 38, name: 'iBox', category: 'home', floor: '1F', tag: '', emoji: '📱' },
  { id: 39, name: 'Erafone', category: 'home', floor: '1F', tag: '', emoji: '📲' },
  { id: 40, name: 'Informa', category: 'home', floor: '1F', tag: '', emoji: '🛋️' },
  { id: 41, name: 'Samsung', category: 'home', floor: '1F', tag: '', emoji: '📺' },
  { id: 42, name: 'Miniso', category: 'home', floor: '1F', tag: '', emoji: '🎀' },
  { id: 43, name: 'Blibli', category: 'home', floor: '1F', tag: '', emoji: '🛍️' },
  { id: 44, name: 'Kidzoona', category: 'fun', floor: '1F', tag: '', emoji: '🎠' },
  { id: 45, name: 'Ria Miranda', category: 'fashion', floor: '1F', tag: '', emoji: '👗' },
  { id: 46, name: 'Naughty', category: 'fashion', floor: '1F', tag: '', emoji: '👚' },
  { id: 47, name: 'Sushi OK!', category: 'food', floor: '1F', tag: '', emoji: '🍱' },
  { id: 48, name: 'Xiaomi', category: 'home', floor: '1F', tag: '', emoji: '📱' },
  { id: 49, name: 'Digi Plus', category: 'home', floor: '1F', tag: '', emoji: '🎧' },
  { id: 50, name: 'Colorbox', category: 'fashion', floor: '1F', tag: '', emoji: '🎨' },
  { id: 51, name: 'Benang Jarum', category: 'fashion', floor: '1F', tag: '', emoji: '🧵' },
  { id: 52, name: 'Buttonscarves', category: 'fashion', floor: '1F', tag: '', emoji: '🧣' },
  { id: 53, name: 'Celcius', category: 'fashion', floor: '1F', tag: '', emoji: '🧥' },
  { id: 54, name: 'Optik Melawai', category: 'beauty', floor: '1F', tag: '', emoji: '👓' },
  { id: 55, name: 'Larusso', category: 'fashion', floor: '1F', tag: '', emoji: '👞' },
  { id: 56, name: 'Wrangler', category: 'fashion', floor: '1F', tag: '', emoji: '👖' },
  { id: 57, name: 'Sport Station', category: 'fashion', floor: '1F', tag: '', emoji: '⚽' },
  { id: 58, name: 'Payless', category: 'fashion', floor: '1F', tag: '', emoji: '👟' },

  // ---- Lantai 2 (2F) ----
  { id: 59, name: 'Timezone', category: 'fun', floor: '2F', tag: '', emoji: '🎮' },
  { id: 60, name: 'Chikuro', category: 'food', floor: '2F', tag: '', emoji: '🍥' },
  { id: 61, name: 'Rona Nona', category: 'beauty', floor: '2F', tag: '', emoji: '💅' },

  // ---- Lantai 3 (3F) ----
  { id: 62, name: 'XXI Premiere', category: 'fun', floor: '3F', tag: 'CINEMA', emoji: '🎬' },
  { id: 63, name: 'Kidzlander', category: 'fun', floor: '3F', tag: '', emoji: '🎡' },
  { id: 64, name: 'Yopie Salon', category: 'beauty', floor: '3F', tag: '', emoji: '💇' },
  { id: 65, name: 'Dwidaya Tour', category: 'services', floor: '3F', tag: '', emoji: '✈️' }
]