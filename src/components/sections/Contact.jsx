// ============================================================
// SECTION — Contact.jsx (toggle Contact Form ⇄ Live Map)
// Data ← contactData.jsx · Function ← animations.jsx / helpers.jsx
// ============================================================

import React, { useState } from 'react'
import { CONTACT } from '../../data/contactData.jsx'
import { Reveal } from '../../functions/animations.jsx'

const inputCls =
  'w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-orange/60 focus:border-brand-orange transition-all'

export default function Contact() {
  const [mode, setMode] = useState('form')
  const [sent, setSent] = useState(false)
  const [sentVal, setSentVal] = useState({})

  const submit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    setSentVal(data)
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-brand-cream scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <Reveal className="text-center">
          <p className="text-brand-orange text-xs font-bold tracking-[0.3em] uppercase">Kontakt Kami</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-dark">{CONTACT.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-dark/60">{CONTACT.subtitle}</p>
        </Reveal>

        {/* toggle pill — gaya Festava */}
        <Reveal delay={140} className="mt-9 flex justify-center">
          <div className="rounded-full bg-brand-dark/10 p-1.5 flex gap-1">
            {CONTACT.toggle.map((t) => {
              const key = t === CONTACT.toggle[0] ? 'form' : 'map'
              return (
                <button
                  key={key}
                  onClick={() => setMode(key)}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                    mode === key ? 'bg-brand-orange text-white shadow-glow' : 'text-brand-dark/70 hover:text-brand-dark'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* panel */}
        <Reveal delay={220} className="mt-10">
          {mode === 'form' ? (
            <div key="form" className="anim-fade">
              {sent ? (
                <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-card p-10 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-extrabold text-brand-dark">{CONTACT.form.successTitle}</h3>
                  <p className="mt-2 text-brand-dark/60 text-sm">
                    {CONTACT.form.successText}
                    {sentVal.name ? ` Salamat, ${sentVal.name}!` : ''}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 underline decoration-brand-orange underline-offset-4 text-brand-orange font-bold text-sm hover:tracking-wide transition-all"
                  >
                    {CONTACT.form.successAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 grid md:grid-cols-2 gap-5">
                  {CONTACT.form.fields.map((f) => (
                    <div key={f.name} className={f.span === 2 ? 'md:col-span-1' : 'md:col-span-2'}>
                      <label className="block text-xs font-bold text-brand-dark/60 mb-1.5">{f.label}</label>
                      {f.type === 'textarea' ? (
                        <textarea
                          name={f.name}
                          required
                          rows={4}
                          placeholder={f.placeholder}
                          className={`${inputCls} resize-none`}
                        />
                      ) : f.type === 'select' ? (
                        <select name={f.name} required className={inputCls}>
                          {f.options.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input name={f.name} type={f.type} required placeholder={f.placeholder} className={inputCls} />
                      )}
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-brand-dark hover:bg-brand-maroon text-white font-extrabold rounded-xl py-3.5 transition-colors"
                    >
                      ✉️ {CONTACT.form.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div key="map" className="anim-fade max-w-5xl mx-auto rounded-2xl overflow-hidden border border-brand-dark/10 shadow-card relative">
              <iframe
                src={CONTACT.map.iframe}
                title="Duta Mall Palangka Raya — map"
                loading="lazy"
                className="w-full h-[440px] border-0"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 border border-brand-dark/10 rounded-xl p-4 w-72 shadow-lg">
                <p className="font-extrabold text-brand-dark text-sm">{CONTACT.map.cardTitle}</p>
                <p className="mt-1 text-brand-dark/60 text-xs">{CONTACT.map.cardText}</p>
                <a
                  href={CONTACT.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-brand-orange font-bold text-xs hover:underline"
                >
                  {CONTACT.map.directions}
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}