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
        "black": "#1b1c1e",
        "muted": "rgba(0,0,0,0.4)",
        "mutedDark": "rgba(256,256,256,0.4)",
        "label": "rgba(0,0,0,0.8)",
        "labelDark": "rgba(256,256,256,0.8)"
      },
      borderColor: {
        "primary": "rgba(64,145,119,0.25)",
        "input": "rgba(0, 0, 0, 0.13)",
        "inputDark": "rgba(256, 256, 256, 0.13)"
      },
      boxShadow: {
        "light": "0px 0px 10px 1px rgba(0, 0, 0, 0.15)",
        "dark": "0px 0px 10px 1px rgba(256, 256, 256, 0.15)"
      }
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")]
}