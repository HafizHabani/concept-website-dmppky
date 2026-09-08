// ============================================================
// FUNCTIONS — helpers.jsx
// Util kecil yang dipakai lintas file function lain.
// ============================================================

/** Pad angka ke 2 digit (countdown). */
export const pad2 = (n) => String(Math.max(0, n)).padStart(2, '0')

/** Clamp value ke range. */
export const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))

/** Scroll Y saat ini (cross-browser). */
export const getScrollY = () =>
  typeof window !== 'undefined'
    ? window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop
    : 0

/** Format angka dengan ribuan separator + decimals (counter). */
export const formatNumber = (n, decimals = 0) =>
  n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

/** Buka link di tab baru. */
export const openInNewTab = (url) => {
  if (url && typeof window !== 'undefined') window.open(url, '_blank', 'noopener')
}