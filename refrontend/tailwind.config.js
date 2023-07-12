/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    './pages/**/*.{css,jsx,html,js}',
    './components/**/*.{html,js,jsx,css}',
    './assets/**/*.{svg,png,jpeg,jpg}'
    
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}