const plugin = require('tailwindcss/plugin');

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-x-180': {
      transform: 'rotateX(180deg)',
    },
  });
});
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3aafa9',
        primary_dark: '#2b7a78',
        black: '#17252a',
        light: '#f6f7fb',
        white: '#feffff',
        yellow: '#FFCC00',
        gray: '#586380',
        overlay: '#b1b3b8',
        blac: '#303545',
      },
    },
  },
  plugins: [MyClass],
};
