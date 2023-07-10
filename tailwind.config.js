/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    
  },
  plugins: [require('@tailwindcss/forms')],
}

