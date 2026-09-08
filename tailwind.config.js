/** Tailwind konfig — semua custom warna & shadow tema mall di sini */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff6b2b',
          yellow: '#ffc94b',
          dark: '#150a1f',
          purple: '#2b1033',
          maroon: '#3d0f2e',
          pink: '#fde4ee',
          mint: '#dcf5e2',
          beige: '#f7efe2',
          cream: '#faf6f1',
          ink: '#221f35',
          gray: '#2e2e38'
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 107, 43, 0.35)',
        card: '0 14px 32px rgba(21, 10, 31, 0.16)'
      }
    }
  },
  plugins: []
}