/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        light: "#f1faee",
        dark: "#1d3557",
        accent: "#457b9d",
        secondary: "#a8dadc",
      },
    },
  },
  plugins: [],
};
