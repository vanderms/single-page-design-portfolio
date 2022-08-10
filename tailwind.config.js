/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./functions/views/**/*.{html,ejs}" ],
  theme: {
    screens: {
      "sm": "23.4375rem",
      "md": "45.125rem",
      "xl": "71.375rem",
    },
    colors: {
      "neutral": "#FFF",
      "neutral-100": "#FFF7F0",
      "neutral-500": "#7A746E",
      "neutral-800": "#030303",
      "blue": "#755CDE",
      "orange": "#F6A560",
      "pink": "F39E9E",
      "red": "#EB7565",
      "cyan": "#61C4B7",
      "purple": "#552049",
    },

    extend: {},

  },
  plugins: [],
}