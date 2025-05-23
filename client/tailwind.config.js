/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',     // extra small
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'brp1': '1350px',
      'brp2': '1800px',
    },
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
        customBlue: '4px 4px 0px 0px #00a8cd',
        customBlueXl: '6px 6px 0px 0px #00a8cd',
        customBlueXlAll: '6px 6px 6px 6px #00a8cd, -6px -6px -6px -6px #00a8cd',
        customBlueXlAllHover: '6px 6px 0px 0px #00a8cd, -6px -6px 0px 0px #00a8cd, -4px 4px 0px 0px #00a8cd, 4px -4px 0px 0px #00a8cd',
        customBlueXlAllHover2: '6px 6px 0px 0px #00a8cd, -6px -6px 0px 0px #00a8cd, -4px 4px 0px 0px #00a8cd, 4px -4px 0px 0px #00a8cd, inset -4px -4px 0px 0px #00a8cd',
      },
      backgroundImage: {
        'gradient-frame-line': 'linear-gradient(90deg, #00a8cd, #00a8cd00)',
        'dark-gradient': 'linear-gradient(135deg, #1a1c1d, #3f4244)',
      },
      height: {
        '1-6': '0.4rem',
      },
    },
  },
  
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
}
