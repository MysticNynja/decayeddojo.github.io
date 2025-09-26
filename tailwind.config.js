/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0f0f0f',
        'brand-text': '#fefefe',
        'brand-accent': '#ff0055',
        'brand-accent-alt': '#00ffe1',
        'brand-accent-dark': '#cc0044',
        'brand-accent-light': '#ff66a3',
        'brand-border': '#444',
        'brand-muted': '#888888',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'neon': '0 0 8px #ff0055',
        'neon-alt': '0 0 8px #00ffe1',
        'pixel': '4px 4px 0 #444',
      },
      borderRadius: {
        'pixel': '0.25rem',
        'blocky': '0',
      },
      fontSize: {
        'hero': '2.5rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.75rem',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px #ff0055' },
          '50%': { boxShadow: '0 0 16px #ff66a3' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 1.5s infinite',
      },
    },
  },
  plugins: [],
}
