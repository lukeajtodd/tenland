module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      body: '#003049',
    },
    extend: {
      colors: {
        background: '#fff6e8',
        primary: {
          DEFAULT: '#D97307',
          '50': '#FCCD9C',
          '100': '#FBC388',
          '200': '#FAAF61',
          '300': '#F99C39',
          '400': '#F78811',
          '500': '#D97307',
          '600': '#A35605',
          '700': '#6C3903',
          '800': '#361D02',
          '900': '#000000',
        },
        secondary: '#FCBF49',
        red: '#D62828',
      },
    },
  },
  plugins: [require('daisyui')],
}
