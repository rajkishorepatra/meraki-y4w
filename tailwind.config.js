/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/heroImg.jpg')",
      },
      colors:{
        'theme-blue': '#1cabe2',
      }
    },
  },
  plugins: [],
}