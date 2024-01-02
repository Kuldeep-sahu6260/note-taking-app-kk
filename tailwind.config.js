/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clrdark : "#1A1A1A",
        clrlightdark: "#404040",
        clrwhitesmoke: "#F8F8F8",
        clrgray: "#F2F2F2",
        clrredsalsa: "#FB3640",
        clrgreen: "#00A82D",
        clrwhite: "#fff",
        clrblack: "#000",
      },
    },
    fontFamily: {
      oswald: ['Inter', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    }
  },
  
  plugins: [],
}