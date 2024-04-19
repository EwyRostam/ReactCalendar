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
          50: '#DEF8D6',
          100: '#A1C398',
          200: '#799A71',
          300: '#54734C',
          400: '#304E2A',
          500: '#0E2C09'
        },
        'negative': {
          50: '#FFE4E0',
          100: '#FA7070',
          200: '#D24D51',
          300: '#AB2834',
          400: '#840019',
          500: '#5F0000'

        }
      },
    },
  },
  plugins: [require("daisyui")],
}

