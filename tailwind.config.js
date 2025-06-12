/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ee',
          200: '#b3c5de',
          300: '#8da8cd',
          400: '#668bbd',
          500: '#406eac',
          600: '#33588a',
          700: '#264267',
          800: '#1a2c45',
          900: '#0d1522',
        },
        terracotta: {
          50: '#fdf3f1',
          100: '#fae7e2',
          200: '#f5cec5',
          300: '#f0b5a8',
          400: '#e99c8b',
          500: '#e2836e',
          600: '#c05621',
          700: '#a14a1c',
          800: '#7d3a16',
          900: '#4d230d',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf7e7',
          200: '#fbefcf',
          300: '#f8e7b7',
          400: '#f5df9f',
          500: '#f2d787',
          600: '#d69e2e',
          700: '#b37e25',
          800: '#8f641d',
          900: '#5c4012',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};