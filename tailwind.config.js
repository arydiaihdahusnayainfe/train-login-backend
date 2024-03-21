/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': '#88288E',
        'semi-dark-purple': '#474747',
      },
      screens: {
        'dekstop': '1440px',
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      }, 
  },
  plugins: [],
}}