/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1565D8',
        Dark:{
          hard: '#0D2436',
          soft: '#183B56'
        }
      }
    },
  },
  plugins: [],
}