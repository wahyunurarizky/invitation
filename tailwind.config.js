/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        table: "url('/bg.jpg')"
      },
      colors: {
        inv: {
          white: '#DBD2CB'
        }
      }
    }
  },
  plugins: []
}
