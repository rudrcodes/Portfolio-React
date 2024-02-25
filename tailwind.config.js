// const defaultTheme = require("tailwindcss/defaultTheme");
// import defaultTheme from "tailwindcss/defaultTheme";

// import colors from "tailwindcss/colors";
// // const colors = require("tailwindcss/colors");

// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
  plugins: [],
};

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme(colors));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
