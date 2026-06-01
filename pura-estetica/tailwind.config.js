/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'pe-light':      '#F4F4F4',
        'pe-gold-light': '#d0b174',
        'pe-gold':       '#c99e48',
        'pe-gold-dark':  '#b58b38',
        'pe-dark':       '#3b3937',
        'pe-darker':     '#2a2a2a',
      },
      fontFamily: {
        heading: ['"Maharlika"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Glacial Indifference"', '"Montserrat"', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
