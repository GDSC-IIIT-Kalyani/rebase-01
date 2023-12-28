/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',],
  theme: {
    fontFamily: {
      'bangers': ['Bangers'],
      'kosugi': ['Kosugi\\ Maru'],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
