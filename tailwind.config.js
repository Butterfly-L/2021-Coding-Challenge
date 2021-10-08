module.exports = {
  purge: [
    './*.html',
    './app/scripts/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['"Open Sans"']
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)',opacity: '1' },
        },
        rushIn: {
          '0%': {transform: 'translateX(-100%)'},
          '80%': {transform: 'skewX(-50deg) translateX(0px)'},
          '100%': {transform: 'skewX(0deg) translateX(0px)'},
        },
        shake: {
          '0%': {transform: 'translateX(-5%)'},
          '25%': {transform: 'translateX(5%)'},
          '50%': {transform: 'translateX(-5%)'},
          '75%': {transform: 'translateX(5%)'},
          '100%': {transform: 'translateX(-5%)'},
        },
        point: {
          '0%': {top: '-0.25rem',left: '-1.25rem'},
          '100%': {top: '-0.5rem',left: '-1.5rem'},
        }
       },
       animation: {
        fadeIn: 'fadeIn 1s ease-in-out 1',
        rushIn: 'rushIn 0.6s ease-in-out 1',
        shake: 'shake 0.3s linear 1',
        point: 'point 0.6s linear infinite',
       },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
