/**
 * Formats a price number into a currency-style string, e.g. 120 -> "$120".
 * @param {number} amount
 * @returns {string}
 */
export function formatPrice(amount) {
  return `$${amount}`;
}

/**
 * Builds an accessible aria-label for an event time slot.
 * @param {string} title
 * @param {string} time
 * @param {string} performer
 * @returns {string}
 */
export function formatEventLabel(title, time, performer) {
  return `${title} by ${performer}, ${time}`;
}
