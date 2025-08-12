/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Press Start 2P", "cursive"],
        sans: ["Noto Sans JP", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "dojo-navy": "#0a001a",
        "dojo-ink": "#120028",
        "dojo-fuji": "#6f2dbd",
        "dojo-neon": "#ff3ea5",
        "dojo-teal": "#21e6c1",
        "dojo-sun": "#ffb300",
        "dojo-ice": "#E6F7FF",
        "dojo-crimson": "#df4c21",
      },
      boxShadow: {
        neon: "0 0 10px rgba(255,62,165,0.8), 0 0 20px rgba(33,230,193,0.6)",
      },
      backgroundImage: {
        grid: "radial-gradient(rgba(255,62,165,.15) 1px, transparent 1px), radial-gradient(rgba(33,230,193,.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "24px 24px, 24px 24px",
      },
    },
  },
  plugins: [],
};