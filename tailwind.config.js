/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "rgb(64,145,119)",
        "primaryHover": "rgb(46, 107, 88)",
        "white" : "#f5f5f5",
        "black": "#191919"
      },
      colors: {
        "primary": "rgb(64,145,119)",
        "white": "#f5f5f5",
        "black": "#1b1c1e"
      },
      borderColor: {
        "primary": "rgba(64,145,119,0.15)"
      },
      boxShadow: {
        "top": "0px 0px 10px 1px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
}