import React, { useEffect } from 'react'

// ============================================================
// DASHBOARD — App.jsx
// Semua section dipisah di components/sections/, semua const data
// di data/, semua function di functions/. Dashboard hanya:
//   IMPORT data   → dari ./data/siteData.jsx
//   IMPORT section → dari ./components/sections/*.jsx
//   Panggil panggil → yep, itu saja.
// ============================================================

import { SITE } from './data/siteData.jsx'

import TopBar from './components/TopBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

import Home from './components/sections/Home.jsx'
import Tenants from './components/sections/Tenants.jsx'
import Events from './components/sections/Events.jsx'
import Promo from './components/sections/Promo.jsx'
import News from './components/sections/News.jsx'
import AboutUs from './components/sections/AboutUs.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  // --- dashboard memanggil const data dari siteData.jsx ---
  useEffect(() => {
    document.title = `${SITE.brandFull} — ${SITE.tagline}`
  }, [])

  return (
    <div className="bg-brand-dark text-white font-body antialiased">
      <TopBar />
      <Navbar />
      <main>
        <Home />
        <Tenants />
        <Events />
        <Promo />
        <News />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}