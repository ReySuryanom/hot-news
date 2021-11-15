module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#009E52',
          dark: '#02773F',
        },
        text: {
          gray: '#878787',
          light: '#F4F4F4',
        },
      },
      height: {
        19: '72px',
        50: '196px',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['group-hover'],
      brightness: ['group-hover', 'hover'],
    },
  },
  plugins: [],
};
