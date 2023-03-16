/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3col': 'repeat(auto-fit, minmax(200px, 200px))',
      },
    },
  },
  plugins: [],
};
