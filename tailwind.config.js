/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      height:{
        '128': '32rem',
      },
      colors:{
        'myColor': '#343353'
      }
    },
  },
  plugins: [],
}