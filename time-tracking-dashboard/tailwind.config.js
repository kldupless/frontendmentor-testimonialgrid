/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '36px'
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    colors: {
      blue: 'hsl(246, 80%, 60%)',
      orange: 'hsl(15, 100%, 70%)',
      cyan: 'hsl(195, 74%, 62%)',
      red: 'hsl(348, 100%, 68%)',
      green: 'hsl(145, 58%, 55%)',
      violet: 'hsl(264, 64%, 52%)',
      yellow: 'hsl(43, 84%, 65%)',
      black: 'hsl(226, 43%, 10%)',
      darkblue: 'hsl(235, 46%, 20%)',
      softblue: 'hsl(235, 45%, 61%)',
      lightblue: 'hsl(236, 100%, 87%)',
    },
    extend: {},
  },
  plugins: [],
}
