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
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
