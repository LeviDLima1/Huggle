/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {},

    extend: {
      backgroundImage: {
        "header": "url('../assets/bg-hero-mobile.svg')"
      }
    },
  },
  plugins: [],
}