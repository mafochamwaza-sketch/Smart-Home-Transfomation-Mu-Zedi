/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003366',
        'brand-orange': '#FF8C00',
      },
      boxShadow: {
        'premium': '0 20px 50px -10px rgba(0, 51, 102, 0.15)',
      }
    },
  },
  plugins: [],
}
