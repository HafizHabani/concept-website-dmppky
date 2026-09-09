/** Tailwind konfig — semua custom warna & shadow tema mall di sini */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          /* tema navy + gold — biru dongker sebagai identitas, gold sebagai aksen */
          navy: '#10315f', // biru navy utama (aksen di area terang, header gelap)
          gold: '#e2aa45', // aksen pendamping — tombol CTA, highlight
          navyDark: '#081b36', // dasar gelap pekat (hero, footer, navbar)
          deep: '#0d2a52', // navy menengah utk gradient dalam
          cream: '#faf6f1', // latar terang hangat (section contact)
          gray: '#2a3d61' // abu navy — fallback SafeImage & sel tanggal
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(226, 170, 69, 0.35)',
        card: '0 14px 32px rgba(13, 42, 82, 0.16)'
      }
    }
  },
  plugins: []
}