/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    screens: {
      'xs': '376px',
      // => @media (min-width: 376px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'dd': '992px',
      // => @media (min-width: 992px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1240px',
      // => @media (min-width: 1240px) { ... }
      'xl2': '1440px',
    },
    extend: {
      colors: {
        primary: {
          "DEFAULT": '#0B1992',
          1: '#0F23D0'
        },
        secondary : {
          "DEFAULT": '#fff',
        },
        bg: {
          blue: '#0B1992',
        },
        button : {
          secondary: '#fff',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        base: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
