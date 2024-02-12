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
      'anime': ['Anime\\ Ace'],
      'japan': ['Japanese\\ Robot'],
      'press': ['Press\\ Start\\ 2P'],
      'mono': ['Roboto\\ Mono'],
    },
    extend: {
      screens: {
        sm:{min:'639px'},
        extrasmall: {max: '639px' },
        exsm: { max: '460px' },
        verysmall: { max: '475px' },
        mobwid : {max : '768px'},
        wid1 : {min : '1847px'},
        wid2 : {min : '1908px'} 
      },
    },
  },
  plugins: [],
};
