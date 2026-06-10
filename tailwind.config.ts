import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f6f1',
          100: '#f1ece2',
          200: '#e0d6c0',
          300: '#c5b591',
          400: '#a68f63',
          500: '#876a3f',
          600: '#6d522f',
          700: '#503e25',
          800: '#3c2f1c',
          900: '#2b2215'
        },
        gold: {
          50: '#fff8eb',
          100: '#ffecd2',
          200: '#ffdab0',
          300: '#f6c078',
          400: '#e0a43f',
          500: '#c87d18',
          600: '#9b5b12',
          700: '#71430f',
          800: '#4f320c',
          900: '#34220a'
        }
      },
      boxShadow: {
        soft: '0 30px 60px rgba(8, 20, 44, 0.14)',
        glass: '0 20px 60px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        'hero-spectrum': 'radial-gradient(circle at top left, rgba(255, 214, 160, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(22, 78, 135, 0.24), transparent 25%)'
      }
    }
  },
  plugins: []
};

export default config;
