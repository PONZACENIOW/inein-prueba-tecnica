/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        "2-iauto": "auto 1fr",
      },
    },
  },
  plugins: [],
};
