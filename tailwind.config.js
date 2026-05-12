/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aqua-dark': '#001d3d',
        'aqua-medium': '#003566',
        'aqua-light': '#00b4d8',
        'aqua-cyan': '#90e0ef',
        'aqua-pale': '#caf0f8',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 29, 61, 0.37)',
      }
    },
  },
  plugins: [],
}
