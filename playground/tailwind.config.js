module.exports = {
  purge: process.env.NODE_ENV === 'production'
    ? [
      'src/**/*.js',
      'src/**/*.scss'
    ] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
