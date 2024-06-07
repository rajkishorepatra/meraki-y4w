/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/heroImg3.jpeg')",
        'about-pattern': "url('https://assets-global.website-files.com/629475b2d37416917c4f2ef2/6295bb69332851c2f0dafd58_Wave.svg')"
      },
      colors: {
        'theme-blue': '#52b501',
      }
    },
  },
  plugins: [],
}