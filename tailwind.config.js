/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      colors: {
        'yellow-0': ['hsl(47, 88%, 63%)'],
        'gray-500': ['hsl(0, 0%, 42%)'], 
        'gray-950': ['hsl(0, 0%, 7%)'], 
      },
      screens: {
        'xs': '440px',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      },
    },
  },
  plugins: [],
}