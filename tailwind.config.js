/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend:
    {
      fontFamily: {
        'nunito': ['Varela Round', 'sans-serif']
      },
      colors: {
        success: '#066F14',
        light: '#ECECEC'
      }
    },
  },
  plugins: [],
}

