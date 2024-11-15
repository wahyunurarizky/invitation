/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        table: "url('/bg.png')",
        bgwhite: "url('/bgwhite.jpg')",
        mobile1: "url('/mobile1.png')",
        mobile3: "url('/mobile3.png')"
      },
      colors: {
        inv: {
          white: '#DBD2CB',
          gray: '#39382C',
          white2: '#D6D2BF',
          white3: '#FAF9EE',
          white4: '#F5F5F5',
          white5: '#FDFDFD',
          white6: '#FAFAFA',
          white370: 'rgba(250, 249, 238, 0.7)',
          white380: 'rgba(250, 249, 238, 0.8)',
          gray50: 'rgba(57, 56, 44, 0.5)',
          gray20: 'rgba(57, 56, 44, 0.2)',
          grayA: '#616161',
          dark: '#39382C',
          dark2: '#171717'
        }
      },
      fontFamily: {
        crimson: ['Crimson Pro', 'serif'], // Add the font family
        yesteryear: ['Yesteryear', 'cursive'],
        gilda: ['Gilda Display', 'serif'],
        gideon: ['Gideon Roman', 'serif'],
        Belleza: ['Belleza', 'sans-serif'],
        RedHat: ['Red Hat Display', 'sans-serif'],
        Comfortaa: ['Comfortaa', 'cursive']
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
        },
        'shadow-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }
        },
        leftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        zoomInOut: 'zoomInOut 2s ease-in-out forwards',
        fadeInSlideUp: 'fadeInSlideUp 1.5s ease-out forwards',
        spinLong: 'spin 4s linear infinite',
        'shadow-glow': 'shadow-glow 1.5s ease-in-out infinite',
        leftToRight: 'leftToRight 1s ease-out forwards'
      }
    }
  },
  plugins: []
};
