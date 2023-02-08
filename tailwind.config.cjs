/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        primary: "#2cc6d0",
      },
    },
    fontFamily: {
      sans: ["Londrina Solid", "sans-serif"],
    },
  },
  plugins: [],
};
