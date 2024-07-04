/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skeleton: {
          DEFAULT: 'rgba(100, 105, 114,0.8)',
          dark: 'rgba(100, 105, 114,1)',
          light: 'rgba(199, 200, 201,0.6)',
        }
      }
    },
  },
  plugins: [],
}
