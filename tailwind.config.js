/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        primary: "var(--color-primary)",
        "primary-dim": "var(--color-primary-dim)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px",
      },
      boxShadow: {
        glow: "0 0 60px -15px var(--color-primary)",
      },
      backgroundImage: {
        "stage-gradient":
          "radial-gradient(120% 120% at 50% -10%, var(--color-surface-alt) 0%, var(--color-bg) 60%)",
      },
    },
  },
  plugins: [],
};
