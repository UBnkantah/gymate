/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pchaimg: "url('components/Images/about-his.jpg')",
        pricimg: "url('components/Images/habott-img.jpg')",
        headerimg: "url('components/Images/hero-img.png')"
      },
      colors: {
        primary: "#ff0336"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

