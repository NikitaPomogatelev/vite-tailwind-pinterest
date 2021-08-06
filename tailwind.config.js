module.exports = {
  mode: 'jit',
  // purge: [],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'primary': '#e60023',
            'dark': '#111111',
            'light': '#efefef',
            'lightHover': '#d7d7d7',
            'muted': '#717171',
            'gray': '#767676',
            'primary-active': '#a3081a'
        },
        outline: {
          blue: '2px solid #0000ff',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
