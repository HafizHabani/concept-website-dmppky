// ============================================================
// DATA — tenantsData.jsx
// Dahtar tenant Duta Mall Palangka Raya — tenant real per lantai
// (sumber: Kalteng Pos 3/10/2025 dahtar tenant, kaltengdaily, Instagram
//  @dutamall_plkraya). Tenants.jsx ber-filter dari sini.
// ============================================================

export const TENANTS_HEADER = {
  kicker: 'Direktori Toko',
  title: 'Dahtar Tenant & Toko',
  subtitle:
    '40 tenant operasional di soft opening, dari Lower Ground sampai 3F — bertambah ke 150+, dengan 200+ brand ke rencana.',
  glossary: 'Tapkan kategori untuk filter direktori.'
}

export const TENANT_CATEGORIES = [
  { id: 'fashion', name: 'Fashion', emoji: '👗', gradient: 'bg-gradient-to-br from-rose-400 to-orange-400' },
  { id: 'food', name: 'Makanan & Minuman', emoji: '🍜', gradient: 'bg-gradient-to-br from-amber-400 to-red-400' },
  { id: 'home', name: 'Habitat & Lifestyle', emoji: '🛋️', gradient: 'bg-gradient-to-br from-teal-400 to-emerald-500' },
  { id: 'fun', name: 'Bermain & Cinema', emoji: '🎡', gradient: 'bg-gradient-to-br from-fuchsia-400 to-purple-500' },
  { id: 'beauty', name: 'Kecantikan & Care', emoji: '💄', gradient: 'bg-gradient-to-br from-pink-400 to-fuchsia-400' },
  { id: 'services', name: 'Layanan', emoji: '🧾', gradient: 'bg-gradient-to-br from-sky-400 to-indigo-500' }
]

export const TENANTS = [
  // ---- Lower Ground (LG) ----
  { id: 1, name: 'Cermart', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🛒' },
  { id: 2, name: 'MR DIY', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🔧' },
  { id: 3, name: 'The Bra House', category: 'fashion', floor: 'LG', tag: '', emoji: '👙' },
  { id: 4, name: 'Bakso Lapangan Tembak', category: 'food', floor: 'LG', tag: 'HOT', emoji: '🍜' },
  { id: 5, name: 'Maybank', category: 'services', floor: 'LG', tag: 'ANCHOR', emoji: '🏦' },
  { id: 6, name: 'Zoom Watch', category: 'services', floor: 'LG', tag: '', emoji: '⌚' },
  { id: 7, name: 'OB Fitness Health', category: 'services', floor: 'LG', tag: 'GYM', emoji: '🏋️' },
  { id: 8, name: 'Willies Bakery', category: 'food', floor: 'LG', tag: '', emoji: '🥐' },

  // ---- Ground Floor (G) ----
  { id: 9, name: 'Solaria', category: 'food', floor: 'G', tag: '', emoji: '🌞' },
  { id: 10, name: 'Kimukatsu', category: 'food', floor: 'G', tag: 'HOT', emoji: '🍛' },
  { id: 11, name: 'Chatime', category: 'food', floor: 'G', tag: 'MILK TEA', emoji: '🧋' },
  { id: 12, name: 'Marugame Udon', category: 'food', floor: 'G', tag: '', emoji: '🍲' },
  { id: 13, name: 'Ichiban Sushi', category: 'food', floor: 'G', tag: '', emoji: '🍣' },
  { id: 14, name: 'Optik Tunggal', category: 'beauty', floor: 'G', tag: '', emoji: '👓' },
  { id: 15, name: 'The Palace', category: 'food', floor: 'G', tag: '', emoji: '🍽' },
  { id: 16, name: 'Guardian', category: 'beauty', floor: 'G', tag: '', emoji: '💊' },
  { id: 17, name: 'Xo Suki', category: 'food', floor: 'G', tag: '', emoji: '🥢' },
  { id: 18, name: 'Boost', category: 'food', floor: 'G', tag: '', emoji: '🍹' },
  { id: 19, name: 'DR Specs', category: 'beauty', floor: 'G', tag: '', emoji: '🕶️' },

  // ---- Upper Ground / Lantai 1–3 ----
  { id: 20, name: 'Puma', category: 'fashion', floor: '1F', tag: 'HOT', emoji: '👟' },
  { id: 21, name: 'Adidas', category: 'fashion', floor: '1F', tag: 'HOT', emoji: '⚡' },
  { id: 22, name: 'New Balance', category: 'fashion', floor: '1F', tag: '', emoji: '🏃' },
  { id: 23, name: 'Executive', category: 'fashion', floor: '2F', tag: 'NEW', emoji: '🤵' },
  { id: 24, name: 'Colorbox', category: 'fashion', floor: '2F', tag: 'NEW', emoji: '🎨' },
  { id: 25, name: 'Wrangler', category: 'fashion', floor: '2F', tag: 'NEW', emoji: '👖' },
  { id: 26, name: 'Delami Brands', category: 'fashion', floor: '2F', tag: '', emoji: '🛍️' },
  { id: 27, name: 'Azko', category: 'fashion', floor: '2F', tag: '', emoji: '👘' },
  { id: 28, name: 'Sociolla', category: 'beauty', floor: '2F', tag: 'HOT', emoji: '💄' },
  { id: 29, name: 'Ramen I', category: 'food', floor: '1F', tag: '', emoji: '🍜' },
  { id: 30, name: 'Pepper Lunch', category: 'food', floor: '3F', tag: '', emoji: '🍳' },
  { id: 31, name: 'Oh Some', category: 'food', floor: '3F', tag: '', emoji: '🍟' },
  { id: 32, name: 'Yakiniku Like', category: 'food', floor: '3F', tag: '', emoji: '🥩' },
  { id: 33, name: 'Gramedia', category: 'home', floor: '2F', tag: '', emoji: '📚' },
  { id: 34, name: 'Everbest Studio', category: 'services', floor: '2F', tag: '', emoji: '🖼️' },
  { id: 35, name: 'Toys Kingdom', category: 'fun', floor: '3F', tag: '', emoji: '🧸' },
  { id: 36, name: 'XXI Cinema Premiere', category: 'fun', floor: '3F', tag: 'PLUS', emoji: '🎬' }
]