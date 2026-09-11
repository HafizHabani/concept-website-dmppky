import bgMrDIY from '../assets/bg-tenant/bg-mrdiy.jpeg'
import logoMrDIY from '../assets/logo-tenant/mrdiy.png'
import bgCermat from '../assets/bg-tenant/bg-cermat.png'
import logoCermat from '../assets/logo-tenant/cermat.png'
import bgBraHouse from '../assets/bg-tenant/bg-brahouse.png'
import logoBraHouse from '../assets/logo-tenant/brahouse.png'
import bgOBFitness from '../assets/bg-tenant/bg-obfitness.png'
import logoOBFitness from '../assets/logo-tenant/obfitness.png'
import bgWillies from '../assets/bg-tenant/bg-willies.png'
import logoWillies from '../assets/logo-tenant/willies.png'
import bgZoomWatch from '../assets/bg-tenant/bg-zoomwatch.png'
import logoZoomWatch from '../assets/logo-tenant/zoomwatch.png'
import bgFunCity from '../assets/bg-tenant/bg-funcity.png'
import logoFunCity from '../assets/logo-tenant/funcity.png'
import bgMontato from '../assets/bg-tenant/bg-montato.png'
import logoMontato from '../assets/logo-tenant/montato.png'
import bgRedDog from '../assets/bg-tenant/bg-reddog.png'
import logoRedDog from '../assets/logo-tenant/reddog.png'
import bgRotiBoy from '../assets/bg-tenant/bg-rotiboy.png'
import logoRotiBoy from '../assets/logo-tenant/rotiboy.png'
import bgAW from '../assets/bg-tenant/GF AW.png'
import logoAW from '../assets/logo-tenant/AW.png'
import bgBoost from '../assets/bg-tenant/GF Boost.png'
import logoBoost from '../assets/logo-tenant/boost.png'
import bgCandF from '../assets/bg-tenant/GF C & F.png'
import logoCandF from '../assets/logo-tenant/C & F.png'
import bgChatime from '../assets/bg-tenant/GF Chatime.png'
import logoChatime from '../assets/logo-tenant/Chatime.png'
import bgDRSpecs from '../assets/bg-tenant/GF DR Specs.png'
import logoDRSpecs from '../assets/logo-tenant/DR Specs.png'
import bgGuardian from '../assets/bg-tenant/GF Gurardian.png'
import logoGuardian from '../assets/logo-tenant/Gurardian.png'
import bgKFC from '../assets/bg-tenant/GF KFC.png'
import logoKFC from '../assets/logo-tenant/KFC.png'
import bgKimukatsu from '../assets/bg-tenant/GF Kimukatsu.png'
import logoKimukatsu from '../assets/logo-tenant/Kimukatsu.png'
import bgKordinat from '../assets/bg-tenant/GF Kordinat.png'
import logoKordinat from '../assets/logo-tenant/Kordinat.png'
import bgMarugame from '../assets/bg-tenant/GF Marugame.png'
import logoMarugame from '../assets/logo-tenant/Marugame.png'
import bgOptikMelawai from '../assets/bg-tenant/GF Optik Melawai.png'
import logoOptikMelawai from '../assets/logo-tenant/Optik Melawai.png'
import bgOptikSeis from '../assets/bg-tenant/GF Optik Seis.png'
import logoOptikSeis from '../assets/logo-tenant/Optik Seis.png'
import bgOptikTunggal from '../assets/bg-tenant/GF Optik Tunggal.png'
import logoOptikTunggal from '../assets/logo-tenant/Optik Tunggal.png'
import bgOWL from '../assets/bg-tenant/GF OWL.png'
import logoOWL from '../assets/logo-tenant/OWL.png'
import bgSancha from '../assets/bg-tenant/GF sancha.png'
import logoSancha from '../assets/logo-tenant/sancha.png'
import bgSociolla from '../assets/bg-tenant/GF Sociolla.png'
import logoSociolla from '../assets/logo-tenant/Sociolla.png'
import bgSolaria from '../assets/bg-tenant/GF solaria.png'
import logoSolaria from '../assets/logo-tenant/solaria.png'
import bgSourSally from '../assets/bg-tenant/GF Sour Sally.png'
import logoSourSally from '../assets/logo-tenant/Sour Sally.png'
import bgTaWan from '../assets/bg-tenant/GF Ta Wan.png'
import logoTaWan from '../assets/logo-tenant/Ta Wan.png'
import bgTeazzi from '../assets/bg-tenant/GF Teazzi.png'
import logoTeazzi from '../assets/logo-tenant/Teazzi.png'
import bgThePalace from '../assets/bg-tenant/GF The Palace.png'
import logoThePalace from '../assets/logo-tenant/The Palace.png'
import bgWatsons from '../assets/bg-tenant/GF watsons.png'
import logoWatsons from '../assets/logo-tenant/watsons.png'
import bgXoSuki from '../assets/bg-tenant/GF xo suki.png'
import logoXoSuki from '../assets/logo-tenant/xo suki.png'

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
  { id: 1, name: 'MR.DIY', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🔧', logo: logoMrDIY, bgImage: bgMrDIY },
  { id: 2, name: 'Cermart', category: 'home', floor: 'LG', tag: 'ANCHOR', emoji: '🛒', logo: logoCermat, bgImage: bgCermat },
  { id: 3, name: 'Maybank', category: 'services', floor: 'LG', tag: 'ANCHOR', emoji: '🏦' },
  { id: 4, name: 'Bakso Lapangan Tembak Senayan', category: 'food', floor: 'LG', tag: 'HOT', emoji: '🍜' },
  { id: 5, name: 'Zoom Watch', category: 'services', floor: 'LG', tag: '', emoji: '⌚', logo: logoZoomWatch, bgImage: bgZoomWatch },
  { id: 6, name: 'The Bra House', category: 'fashion', floor: 'LG', tag: '', emoji: '👙', logo: logoBraHouse, bgImage: bgBraHouse },
  { id: 7, name: 'OB Fitness Health', category: 'services', floor: 'LG', tag: 'GYM', emoji: '🏋️', logo: logoOBFitness, bgImage: bgOBFitness },
  { id: 8, name: 'Willies Bakery', category: 'food', floor: 'LG', tag: '', emoji: '🥐', logo: logoWillies, bgImage: bgWillies },
  { id: 66, name: 'Fun City', category: 'fun', floor: 'LG', tag: '', emoji: '🎠', logo: logoFunCity, bgImage: bgFunCity },
  { id: 67, name: 'Montato', category: 'food', floor: 'LG', tag: '', emoji: '🍞', logo: logoMontato, bgImage: bgMontato },
  { id: 68, name: 'Red Dog', category: 'food', floor: 'LG', tag: '', emoji: '🌭', logo: logoRedDog, bgImage: bgRedDog },
  { id: 69, name: 'Roti Boy', category: 'food', floor: 'LG', tag: '', emoji: '🥖', logo: logoRotiBoy, bgImage: bgRotiBoy },

    // ---- Ground Floor (GF) ----
      { id: 9, name: 'Solaria', category: 'food', floor: 'GF', tag: '', emoji: '🌞', logo: logoSolaria, bgImage: bgSolaria },
      { id: 10, name: 'Kimukatsu', category: 'food', floor: 'GF', tag: 'HOT', emoji: '🍛', logo: logoKimukatsu, bgImage: bgKimukatsu },
      { id: 11, name: 'A&W', category: 'food', floor: 'GF', tag: '', emoji: '🥤', logo: logoAW, bgImage: bgAW },
      { id: 12, name: 'Chatime', category: 'food', floor: 'GF', tag: '', emoji: '🧋', logo: logoChatime, bgImage: bgChatime },
      { id: 13, name: 'Ichiban Sushi', category: 'food', floor: 'GF', tag: '', emoji: '🍣' },
      { id: 14, name: 'Marugame Udon', category: 'food', floor: 'GF', tag: '', emoji: '🍲', logo: logoMarugame, bgImage: bgMarugame },
      { id: 15, name: 'Ta Wan', category: 'food', floor: 'GF', tag: '', emoji: '🥟', logo: logoTaWan, bgImage: bgTaWan },
      { id: 16, name: 'Guardian', category: 'beauty', floor: 'GF', tag: '', emoji: '💊', logo: logoGuardian, bgImage: bgGuardian },
      { id: 17, name: 'XO Suki', category: 'food', floor: 'GF', tag: '', emoji: '🥢', logo: logoXoSuki, bgImage: bgXoSuki },
      { id: 18, name: 'Boost', category: 'food', floor: 'GF', tag: '', emoji: '🍹', logo: logoBoost, bgImage: bgBoost },
      { id: 19, name: 'Optik Tunggal', category: 'beauty', floor: 'GF', tag: '', emoji: '👓', logo: logoOptikTunggal, bgImage: bgOptikTunggal },
      { id: 20, name: 'The Palace', category: 'food', floor: 'GF', tag: '', emoji: '🍽', logo: logoThePalace, bgImage: bgThePalace },
      { id: 21, name: 'DR Specs', category: 'beauty', floor: 'GF', tag: '', emoji: '🕶️', logo: logoDRSpecs, bgImage: bgDRSpecs },
      { id: 22, name: 'Sociolla', category: 'beauty', floor: 'GF', tag: 'HOT', emoji: '💄', logo: logoSociolla, bgImage: bgSociolla },
      { id: 71, name: 'KFC', category: 'food', floor: 'GF', tag: '', emoji: '🍗', logo: logoKFC, bgImage: bgKFC },
      { id: 72, name: 'C&F', category: 'beauty', floor: 'GF', tag: '', emoji: '🌸', logo: logoCandF, bgImage: bgCandF },
      { id: 73, name: 'Kordinat', category: 'food', floor: 'GF', tag: '', emoji: '🍳', logo: logoKordinat, bgImage: bgKordinat },
      { id: 74, name: 'OWL', category: 'beauty', floor: 'GF', tag: '', emoji: '🦉', logo: logoOWL, bgImage: bgOWL },
      { id: 75, name: 'Sancha', category: 'food', floor: 'GF', tag: '', emoji: '🍵', logo: logoSancha, bgImage: bgSancha },
      { id: 76, name: 'Sour Sally', category: 'food', floor: 'GF', tag: '', emoji: '🍨', logo: logoSourSally, bgImage: bgSourSally },
      { id: 77, name: 'Teazzi', category: 'food', floor: 'GF', tag: '', emoji: '🧋', logo: logoTeazzi, bgImage: bgTeazzi },
      { id: 78, name: 'Watsons', category: 'beauty', floor: 'GF', tag: '', emoji: '🧴', logo: logoWatsons, bgImage: bgWatsons },
      { id: 79, name: 'Optik Melawai', category: 'beauty', floor: 'GF', tag: '', emoji: '👓', logo: logoOptikMelawai, bgImage: bgOptikMelawai },
      { id: 80, name: 'Optik Seis', category: 'beauty', floor: 'GF', tag: '', emoji: '👓', logo: logoOptikSeis, bgImage: bgOptikSeis },

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