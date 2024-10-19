/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primaryFont: "Jaldi, sans-serif",
    },
    extend: {
      colors: {
        primaryBgClr: "#BDBE3E",
        primaryClr: "#C1C242",
        secondaryClr: "#EFEFBA",
      },
    },
  },
  plugins: [],
};
