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
    fontFamily: {
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    // plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
    plugins: [],
  },
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
