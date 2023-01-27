/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGreen: "#145A32",
      lightGreen: "#98BDA7",
      green: "#1E8449",
      grey: "#BFC9CA",
      black: "#1D1B20",
    },
    extend: {},
  },
  plugins: [],
};
