/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F2F2F2",
        primary: "#2cc6d0",
        secondary: "#C8C8C8",
      },
      fontFamily: {
        secondary: ["Work Sans", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Londrina Solid", "sans-serif"],
    },
  },
  plugins: [],
};
