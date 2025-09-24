/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0f0f0f',
        'brand-text': '#fefefe',
        'brand-accent': '#ff0055',
        'brand-accent-alt': '#00ffe1',
        'brand-border': '#444',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}