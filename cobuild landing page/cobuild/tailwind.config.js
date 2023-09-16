/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        kalam: ["Kalam"],
      },
      screens: {
        xl: "2000px",
      },
      rotate: {
        35: "35deg",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      background: {
        heroImage: "url('./public/backgourndHeroImage.jpg)",
      },
    },
  },
  plugins: [],
};
