/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sandstone: {
          50: '#FBF6EC',
          100: '#F5EBD3',
          200: '#E8D29F',
          300: '#D9B36C',
          400: '#C8944A',
        },
        maroon: {
          50: '#FBEAEC',
          400: '#A23B45',
          600: '#7A1F2B',
          700: '#5E1620',
          800: '#430F16',
          900: '#2A0A0E',
        },
        saffron: {
          400: '#E8A93B',
          500: '#D4A017',
          600: '#B5860F',
        },
        nightstone: {
          800: '#241211',
          900: '#170C0B',
          950: '#0E0707',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
        body: ['"Mukta"', '"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'temple-pattern': "radial-gradient(circle at 1px 1px, rgba(212,160,23,0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
