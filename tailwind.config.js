/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        table: "url('/bg.png')"
      },
      colors: {
        inv: {
          white: '#DBD2CB',
          gray: '#39382C',
          white2: '#D6D2BF',
          white3: '#FAF9EE',
          white4: '#F5F5F5',
          white370: 'rgba(250, 249, 238, 0.7)',
          white380: 'rgba(250, 249, 238, 0.8)',
          gray50: 'rgba(57, 56, 44, 0.5)',
          gray20: 'rgba(57, 56, 44, 0.2)'
        }
      },
      fontFamily: {
        crimson: ['Crimson Pro', 'serif'], // Add the font family
        yesteryear: ['Yesteryear', 'cursive'],
        gilda: ['Gilda Display', 'serif']
      }
    }
  },
  plugins: []
};
