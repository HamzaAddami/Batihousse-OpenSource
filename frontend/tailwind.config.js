/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#322C2B',
        'secondary': '#803D3B',
        'tertiary': '#AF8260',
        'quaternary': '#E4C59E',
      },
    },
  },
  plugins: [],
}

