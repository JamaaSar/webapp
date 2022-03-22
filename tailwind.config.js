module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '128': '38rem',
      }
    },
    textColor: {
      'primary': '#BD593C',
      'white': '#ffff',
      'black': '#111'
    },
    colors: {
      primayColor: '#BD593C',
      navBack: '#ffff',
      blue400: '#60a5fa',
      black: '#111'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',

    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
