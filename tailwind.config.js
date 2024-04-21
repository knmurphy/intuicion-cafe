/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.njk'],
  theme: {
    extend: {
      colors: {
      'primary': '#1a202c',
      'secondary': '#2d3748',
      'accent': '#4a5568',
      'twine': {
        '50': '#f9f5ed',
        '100': '#f0e5d1',
        '200': '#e2cca6',
        '300': '#d1ab73',
        '400': '#c9995e',
        '500': '#b47a3e',
        '600': '#9a6034',
        '700': '#7c472c',
        '800': '#683c2b',
        '900': '#5a3429',
        '950': '#341a14',
    }
    } 
   }
  },
  plugins: [],
}
