/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        extrasmall: { max: '639px' },
        exsm: { max: '460px' },
        verysmall: { max: '475px' },
        mobwid : {max : '768px'},
      },
    },
  },
  plugins: [],
};
