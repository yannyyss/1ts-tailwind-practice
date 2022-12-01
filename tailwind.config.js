/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'french-rose': {
          DEFAULT: '#EC4899',
          '50': '#F27FB8',
          '100': '#F06DAE',
          '200': '#EC4899',
          '300': '#E4187D',
          '400': '#B11261',
          '500': '#7F0D45',
          '600': '#4C0829',
          '700': '#19030E',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}