/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D1B2A',
          light: '#1B263B',
          dark: '#050A10'
        },
        secondary: {
          DEFAULT: '#F4C542',
          light: '#F8D778',
          dark: '#E5B524'
        },
        accent: {
          DEFAULT: '#4B4E6D',
          light: '#6C7098',
          dark: '#363854'
        },
        light: '#F9F9F9',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};