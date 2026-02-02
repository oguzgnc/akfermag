/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'akfermag-blue': '#0066cc',
        'akfermag-green': '#4CAF50',
        'akfermag-dark-green': '#2E7D32',
        'akfermag-light-blue': '#E3F2FD',
      },
      fontFamily: {
        'sans': ['Comic Sans MS', 'Comic Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}
