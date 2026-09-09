// ============================================================
// FUNCTIONS — helpers.jsx
// Util kecil yang dipakai lintas file function lain.
// ============================================================

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