/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        primary: "#2cc6d0",
        tertiary: "#C8C8C8",
      },
      fontFamily: {
        primary: ["Londrina Solid", "sans-serif"],
        secondary: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
