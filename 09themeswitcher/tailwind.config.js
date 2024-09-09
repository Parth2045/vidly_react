/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // This is important if you use tailwind's dark mode feature
  theme: {
    extend: {},
  },
  plugins: [],
}
