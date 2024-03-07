/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'konixbg': '#EFF2F5',
        'bluecard': '#E8F4FD',
        'sidecard': '#0052FE',
      },
      fontFamily: {
        'interregular':'interregular',
        'interbold':'interbold',
        'intermedium':'intermedium',
        'intersemibold':'intersemibold',
        'interextrabold':'interextrabold',
        'interthin':'interthin',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

