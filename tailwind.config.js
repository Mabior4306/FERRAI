/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#ebefff',
          200: '#cdd5ff',
          300: '#9aa6ff',
          400: '#6776ff',
          500: '#4F46E5',
          600: '#3f38c2',
          700: '#322d98',
          800: '#241f6f',
          900: '#16123f',
        },
        accent: {
          500: '#F97316',
        }
      },
      container: { center: true, padding: '1rem' }
    },
  },
  plugins: [],
}
