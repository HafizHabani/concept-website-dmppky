/**
 * Joins class names together, skipping falsy values.
 * Small local replacement for the `clsx` package.
 * @param {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
