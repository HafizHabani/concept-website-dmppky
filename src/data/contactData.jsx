// ============================================================
// DATA — contactData.jsx
// Contact Duta Mall Palangka Raya — Jl. Adonis Samad, Pahandut.
// Koordinat OSM: 2.248810°S 113.923104°E
// ============================================================

export const CONTACT = {
  title: 'Tertarik? Hubungi kami',
  subtitle: 'Leasing, event, feedback — reach management@dutamallpky.co.id, kami jawab dalam 24 jam.',

  form: {
    submit: 'Kirim Pesan',
    successTitle: 'Pesan dikirim!',
    successText: 'Ready 24 jam.',
    successAgain: 'Kirim pesan lainnya',
    fields: [
      { name: 'name', label: 'Nama lengkap*', type: 'text', placeholder: 'e.g. Rahman', span: 2 },
      { name: 'email', label: 'Alamat email*', type: 'email', placeholder: 'lorem@example.com', span: 2 },
      {
        name: 'topic', label: 'Aku mau talk tentang*', type: 'select', span: 100,
        options: ['Pertanyaan umum', 'Leasing toko', 'Hosting event', 'Feedback & saran']
      },
      { name: 'message', label: 'Pesan*', type: 'textarea', placeholder: 'Kami siap mendengarkan…', span: 100 }
    ]
  },

  map: {
    iframe:
      'https://www.openstreetmap.org/export/embed.html?bbox=113.8900%2C-2.2800%2C113.9600%2C-2.2150&layer=mapnik&marker=-2.248810%2C113.923104',
    cardTitle: 'Duta Mall Palangka Raya',
    cardText: 'Jl. Adonis Samad No. 8, Langkai, Pahandut, Palangka Raya',
    directions: 'Rute ke Mall →',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Duta+Mall+Palangka+Raya'
  }
}