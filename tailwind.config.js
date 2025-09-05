/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['Yekan-bakh', 'sans-serif'],
      },
      colors: {
        primaryBg : '#1B1C1F',
        secondaryBg: '#242629'
      }
    },
  },
  plugins: [],
}

