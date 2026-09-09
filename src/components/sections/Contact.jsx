// ============================================================
// SECTION — Contact.jsx (form + live map side-by-side)
// Data ← contactData.jsx · Function ← animations.jsx
// ============================================================

import React, { useState } from 'react'
import { CONTACT } from '../../data/contactData.jsx'
import { Reveal } from '../../functions/animations.jsx'

const inputCls =
  'w-full rounded-xl border border-brand-navyDark/15 bg-white px-4 py-3 text-sm text-brand-navyDark placeholder-brand-navyDark/40 focus:outline-none focus:ring-2 focus:ring-brand-navy/60 focus:border-brand-navy transition-all'

export default function Contact() {
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
          <p className="text-brand-navy text-xs font-bold tracking-[0.3em] uppercase">Kontak Kami</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-brand-navyDark">{CONTACT.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-navyDark/60">{CONTACT.subtitle}</p>
        </Reveal>

        {/* form + map bersebelahan */}
        <Reveal delay={140} className="mt-12">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            {/* form */}
            {sent ? (
              <div className="bg-white rounded-2xl shadow-card p-10 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-brand-navyDark">{CONTACT.form.successTitle}</h3>
                <p className="mt-2 text-brand-navyDark/60 text-sm">
                  {CONTACT.form.successText}
                  {sentVal.name ? ` Salamat, ${sentVal.name}!` : ''}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 underline decoration-brand-navy underline-offset-4 text-brand-navy font-bold text-sm hover:tracking-wide transition-all"
                >
                  {CONTACT.form.successAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white rounded-2xl shadow-card p-8 grid md:grid-cols-2 gap-5">
                {CONTACT.form.fields.map((f) => (
                  <div key={f.name} className={f.span === 2 ? 'md:col-span-1' : 'md:col-span-2'}>
                    <label className="block text-xs font-bold text-brand-navyDark/60 mb-1.5">{f.label}</label>
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
                    className="w-full bg-brand-navyDark hover:bg-brand-deep text-white font-extrabold rounded-xl py-3.5 transition-colors"
                  >
                    ✉️ {CONTACT.form.submit}
                  </button>
                </div>
              </form>
            )}

            {/* live map */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-navyDark/10 shadow-card min-h-[440px]">
              <iframe
                src={CONTACT.map.iframe}
                title="Duta Mall Palangka Raya — map"
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 border border-brand-navyDark/10 rounded-xl p-4 w-72 shadow-lg">
                <p className="font-extrabold text-brand-navyDark text-sm">{CONTACT.map.cardTitle}</p>
                <p className="mt-1 text-brand-navyDark/60 text-xs">{CONTACT.map.cardText}</p>
                <a
                  href={CONTACT.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-brand-navy font-bold text-xs hover:underline"
                >
                  {CONTACT.map.directions}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}