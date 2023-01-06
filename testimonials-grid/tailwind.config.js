/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },
    fontFamily: {
      sans: ['"Barlow Semi Condensed"', 'ui-sans-serif'],
    },
    fontSize: {
      sm: '11px',
      base: '13px',
      lg: '20px',
    },
    extend: {
      colors: {
        midviolet: {
          100: "#e3d9f4",
          200: "#c8b3e9",
          300: "#ac8dde",
          400: "#9167d3",
          500: "#7541c8",
          600: "#5e34a0",
          700: "#462778",
          800: "#2f1a50",
          900: "#170d28"
        },
        darkblue: {
            100: "#dadde1",
            200: "#b6bbc3",
            300: "#9199a6",
            400: "#6d7788",
            500: "#48556a",
            600: "#3a4455",
            700: "#2b3340",
            800: "#1d222a",
            900: "#0e1115"
        },
        blackblue: {
          100: "#d1d3d5",
          200: "#a3a6ab",
          300: "#757a82",
          400: "#474d58",
          500: "#19212e",
          600: "#141a25",
          700: "#0f141c",
          800: "#0a0d12",
          900: "#050709"
        },
        lightgray: {
          100: "#f5f5f5",
          200: "#ececec",
          300: "#e2e2e2",
          400: "#d9d9d9",
          500: "#cfcfcf",
          600: "#a6a6a6",
          700: "#7c7c7c",
          800: "#535353",
          900: "#292929"
        },
        grayblue: {
          100: "#fbfcfe",
          200: "#f7fafc",
          300: "#f4f7fb",
          400: "#f0f5f9",
          500: "#ecf2f8",
          600: "#bdc2c6",
          700: "#8e9195",
          800: "#5e6163",
          900: "#2f3032"
},
      },
    },
  },
  plugins: [],
}
