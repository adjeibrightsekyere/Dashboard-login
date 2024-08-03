/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        krona: ['Krona One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'orbut-gradient': 'linear-gradient(to right,#DF1EFF, #FFC93E)',
      },
    },
  },
  plugins: [],
}

