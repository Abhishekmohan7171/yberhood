/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jersey': ['"Jersey 10"', 'sans-serif'],
      },
      colors: {
        'yberhood-purple': '#a855f7',
        'yberhood-pink': '#ec4899',
        'yberhood-dark': '#0f0a1f',
      },
    },
  },
  plugins: [],
}
