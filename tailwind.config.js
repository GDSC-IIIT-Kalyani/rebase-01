/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'bangers': ['Bangers'],
      'kosugi': ['Kosugi\\ Maru'],
      'anime': ['Anime\\ Ace']
    },
    extend: {
      screens: {
        extrasmall: { max: '640px' },
        exsm: { max: '460px' },
        verysmall: { max: '475px' },
        mobwid : {max : '768px'},
      },
    },
  },
  plugins: [],
};
