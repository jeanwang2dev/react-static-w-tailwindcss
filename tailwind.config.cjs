/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '550px',
      lg: '976px',
      xl: '1440px'
    },
    fontSize: {
      'base': '1rem',
      '2xl': '1.375rem',
      '3xl': '2.442rem',
    },
    extend: {
      colors: {
        primaryBlue: '#61DAFB',
        darkGray: '#21222A',
        lightGray: '#282D35',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      lineHeight: {
        '12': '2.9375rem',
      }
    },
  },
  plugins: [],
}
