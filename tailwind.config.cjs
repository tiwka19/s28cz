/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: { center: true },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1449px) { ... }
    },
    colors: {
      body: '#151921',
      placeholder: '#1D232D',
      primary: '#12B1EB',
      white: '#FFF',
      black: '#000',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
