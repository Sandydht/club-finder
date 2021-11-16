module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        44: '44px',
      },
      minWidth: {
        44: '44px',
      },
      maxWidth: {
        1440: '1440px',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
