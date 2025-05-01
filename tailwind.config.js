/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141819',
        secondary: '#00a8cd',
        fourth: '#ffffff',
        fifth: '#08819c',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        navShadow: "0 10px 10px 0 #00a8cd",
      },
    },
  },
  plugins: [],
}
