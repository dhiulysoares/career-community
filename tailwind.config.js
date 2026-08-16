import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#E65100',
        },
        dark: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#8a8a8a',
          500: '#6a6a6a',
          600: '#4a4a4a',
          700: '#2d2d2d',
          800: '#1a1a1a',
          900: '#121212',
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
