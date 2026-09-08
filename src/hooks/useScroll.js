import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Useful for switching the navbar to a "solid" background state.
 * @param {number} threshold - pixel offset before the state flips
 * @returns {boolean} isScrolled
 */
export function useScroll(threshold = 24) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
