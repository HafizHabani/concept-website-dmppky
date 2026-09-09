# 🏬 Duta Mall Palangka Raya — Single-Page Website (React + Tailwind)

Single-scroll mall website untuk **Duta Mall Palangka Raya** (Kalimantan Tengah). Tema **navy + gold** (`#10315f` / `#081b36` + aksen `#e2aa45`), logo image, dan section dinamis: directory tenant per lantai, video looping event, fasilitas mall, serta contact form + map live berdampingan.

## 🚀 Run

```bash
cd concept-website-dmppky
npm install
npm run dev
```

Dev server default Vite (`http://localhost:5173`). Build production: `npm run build` → folder `dist/` (base path `/concept-website-dmppky/`). Preview: `npm run preview`.

## 🧱 Arsitektur (important!)

```
src/
├── App.jsx                      ← DASHBOARD: hanya import + panggil
├── data/                        ← 📦 SEMUA const data terpisah di sini
│   ├── siteData.jsx             ←   brand, navLinks, hero, stats, topBar, footer
│   ├── tenantsData.jsx          ←   65 tenant per lantai (LG/GF/UG/1F/2F/3F) + kategori
│   ├── eventsData.jsx           ←   header section Events (konten video)
│   ├── facilitiesData.jsx       ←   11 fasilitas di dalam mall (Our Facility)
│   ├── newsData.jsx             ←   artikel
│   ├── aboutData.jsx            ←   about content
│   └── contactData.jsx          ←   form fields + live map
├── functions/                   ← ⚙️ SEMUA function terpisah di sini
│   ├── animations.jsx           ←   useInView, Reveal, Stagger
│   ├── navigation.jsx           ←   scrollToSection, scrollToTop, useScrollSpy, useScrolled
│   ├── counters.jsx             ←   Counter (animated number)
│   ├── media.jsx                ←   SafeImage (fallback gradient + emoji)
│   └── helpers.jsx              ←   getScrollY, formatNumber
├── assets/                      ← 🖼️logo-dmpky.png, COE.mp4 (looping video Events)
└── components/
    ├── TopBar.jsx, Navbar.jsx, Footer.jsx, BackToTop.jsx
    └── sections/                ← each section = 1 jsx
        ├── Home.jsx  Tenants.jsx  Events.jsx  Facilities.jsx
        └── News.jsx  AboutUs.jsx  Contact.jsx
```

**Rule:** section components tidak berisi data — mereka `import` const data dari `data/` dan `import` component/function dari `functions/`, lalu hanya **panggil**. Edit content → edit `data/*.jsx`, no need to touch section JSX.

## 🎪 Feature & Animation

- **Tema navy + gold** — konsisten di seluruh section (tombol, badge, hover, gradient)
- **Logo image** — `src/assets/logo-dmpky.png`, dipakai di Navbar & Footer (bukan SVG storefront lagi)
- **Tenants (directory)** — filter per **lantai** (LG, GF, UG, 1F, 2F, 3F) + tombol "Lihat Semua Tenant" (hide/show awal 8 card), kartu bergradient per kategori
- **Events** — video looping `src/assets/COE.mp4` (autoplay, muted, playsinline, tanpa controls & tanpa audio)
- **Our Facility** — 11 kartu fasilitas mall (Information, Hotel, ATM Center, Ladies Parking, Disabled, Clinic, Nursery, Musholla, Parking, Toilet, Sitting Area) dengan badge lantai
- **News** — cards artikel (fallback image / gradient + emoji, offline-safe)
- **Contact** — form + **live map side-by-side** (OSM embed, tanpa toggle), form → success state
- **Back-to-top** button dengan ping ring

## 🖼️ Images & Media

- Foto hero/news dari URL eksternal (Wikimedia/placeholder). Di `data/*.jsx` set `bg`/`img` field — replace dengan URL foto sendiri. Jika offline, `SafeImage` auto-switch ke gradient + emoji (100% offline-safe).
- Logo & video disimpan lokal di `src/assets/` dan di-import langsung oleh komponen.
- Video COE (~9 MB) otomatis di-hash & di-bundle Vite saat build.
