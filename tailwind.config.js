/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
customOrange: "#E92F3E",
customRed: '#BC002D'
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 1s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideOutLeft: 'slideOutLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideOutRight: 'slideOutRight 1s ease-out forwards',

      },
    },
    fontFamily:{
      title: ['CustomFont2', 'sans-serif'],
      custom: ['CustomFont', 'sans-serif'],
      custom2: ['CustomFont2', 'sans-serif'],
      heading: ['CustomFont2', 'sans-serif'],
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      // Custom font families for specific uses
      display: ["Open Sans", 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/aspect-ratio')],
}