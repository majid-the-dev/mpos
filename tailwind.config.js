/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}", "src/*.css"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"]
    },
    fontWeight: {
      medium: "500",
      bold: "700"
    },
    extend: {
      colors: {
        primary: "#DD127B",
        secondary: "#F64AA3",
        lightGrey: "#383838"
      }
    },
  },
  plugins: [],
}

