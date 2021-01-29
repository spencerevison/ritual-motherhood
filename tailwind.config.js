const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/page-data/**/*.json"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FACC15",
          DEFAULT: "#EAB308",
          dark: "#CA8A04",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
