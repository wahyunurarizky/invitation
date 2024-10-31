/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        table: "url('/bg.png')",
        mobile1: "url('/mobile1.png')"
      },
      colors: {
        inv: {
          white: '#DBD2CB',
          gray: '#39382C',
          white2: '#D6D2BF',
          white3: '#FAF9EE',
          white4: '#F5F5F5',
          white5: '#FDFDFD',
          white370: 'rgba(250, 249, 238, 0.7)',
          white380: 'rgba(250, 249, 238, 0.8)',
          gray50: 'rgba(57, 56, 44, 0.5)',
          gray20: 'rgba(57, 56, 44, 0.2)',
          grayA: '#616161'
        }
      },
      fontFamily: {
        crimson: ['Crimson Pro', 'serif'], // Add the font family
        yesteryear: ['Yesteryear', 'cursive'],
        gilda: ['Gilda Display', 'serif'],
        gideon: ['Gideon Roman', 'serif']
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        zoomInOut: 'zoomInOut 2s ease-in-out forwards',
        fadeInSlideUp: 'fadeInSlideUp 1.5s ease-out forwards'
      }
    }
  },
  plugins: []
};
