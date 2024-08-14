/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom1: ["Custom-fonts", "sans-serif"],
    },

    extend: {
      colors: {
        "custom-pink": "#FF5A5F",
      },
    },
  },
  plugins: [],
};
