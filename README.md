# 🏬 Duta Mall Palangka Raya — Single-Page Mall Dashboard (React + Tailwind)

Single-scroll mall dashboard website, UI konsep diadapt dari template **Festava Live** (navbar dark maroon/purple, accent orange `#ff6b2b`, yellow top-bar, schedule grid, pricing cards dotted border, contact form/map toggle, footer orange band).

**Content**: real facts of Duta Mall Palangka Raya (Kalimantan Tengah) — soft opening 3 Okt 2025, Govindo Group developer, PT Tata Optima Property management, 6 floors / 150.000 m² / 200+ stores, real tenants per floor (Cermart, MR DIY, Maybank, Puma, Adidas, Sociolla, XXI Cinema Premiere…), FUGO Hotel 4★ 288 kamar 2026, cashless parking E-money/QRIS, open daily 10.00–22.00 WIB.

## 🚀 Run

```bash
cd grandmetro-mall
npm install
npm run dev
```

Auto-open di `http://localhost:3000`. Build production: `npm run build` → folder `dist/`.

## 🧱 Arsitektur (important!)

```
src/
├── App.jsx                      ← DASHBOARD: hanya import + panggil
├── data/                        ← 📦 SEMUA const data terpisah di sini
│   ├── siteData.jsx             ←   brand, navLinks, hero, stats, marquee, footer
│   ├── tenantsData.jsx          ←   store directory + categories
│   ├── eventsData.jsx           ←   event schedule grid
│   ├── promoData.jsx            ←   countdown, offers, deals
│   ├── newsData.jsx             ←   artikel
│   ├── aboutData.jsx            ←   about content
│   └── contactData.jsx          ←   form fields + map
├── functions/                   ← ⚙️ SEMUA function terpisah di sini
│   ├── animations.jsx           ←   useInView, Reveal, Stagger, Marquee
│   ├── navigation.jsx           ←   scrollToSection, useScrollSpy, useScrolled
│   ├── counters.jsx             ←   Counter (animated number)
│   ├── countdown.jsx            ←   CountdownTimer
│   ├── media.jsx                ←   SafeImage (fallback gradient + emoji)
│   └── helpers.jsx              ←   pad2, formatNumber, getScrollY, clamp
└── components/
    ├── TopBar.jsx, Navbar.jsx, Footer.jsx, BackToTop.jsx
    └── sections/                ← each section = 1 jsx
        ├── Home.jsx  Tenants.jsx  Events.jsx  Promo.jsx
        └── News.jsx  AboutUs.jsx  Contact.jsx
```

**Rule:** section components tidak berisi data — mereka `import` const data dari `data/` dan `import` komponent/function dari `functions/`, lalu hanya **panggil**. Edit content → edit `data/*.jsx`, no need touch section JSX.

## 🎪 Feature & Animation

- Single scroll + smooth scrollspy (navbar highlight aktif section)
- Navbar sticky → solid dark + blur after scroll; mobile hamburger
- Hero: gradient-animated word, floating orbs, glass info chips, animated counters
- Marquee ticker promo strip
- Tenants: kategori filter chips + hover-lift cards
- Events: schedule grid 3 days × 3 zones (mirror Festava, pastel empty cells)
- Promo: live countdown timer (digits pop every second), 2 offers card + 3 deals
- News: cards (fallback image / gradient + emoji)
- Contact: toggle Contact Form ⇄ Live Map (OSM embed), form → success state
- Back-to-top button dengan ping ring

## 🖼️ Images

Placeholder foto dari `picsum.photos` (random). Di `data/*.jsx` set `bg`/`img` field — replace dengan URL foto mall sendiri. Jika offline, `SafeImage` auto-switch ke gradient + emoji (100% offline-safe).