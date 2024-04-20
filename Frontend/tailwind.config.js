/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fdfdfd',
        'positive': {
          50: '#eeeedb',
          100: '#DEF8D6',
          200: '#CFEBC7',
          300: '#C0DEB7',
          400: '#B0D0A8',
          500: '#A1C398'
        },
        'negative': {
          100: '#FFE4E0',
          200: '#FEC7C4',
          300: '#FDAAA8',
          400: '#FB8D8C',
          500: '#FA7070'

        }
      },
    },
  },
  plugins: [require("daisyui")],
}

