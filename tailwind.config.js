/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px )

      'md': '768px',
      // => @media (min-width: 768px )

      'lg': '1024px',
      // => @media (min-width: 1024px)

      'xl': '1280px',
      // => @media (min-width: 1280px)

      '2xl': '1536px'
      // => @media (min-width: 1536px)
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#ECEEFF",
        "fila-blue": "#002964",
        "slate-gray": "#6D6D6D",
        "fila-red": "#FF1235",
        "slight-fila-blue": "#bad2f5",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/bg-fila.png')",
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

