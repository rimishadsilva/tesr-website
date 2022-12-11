/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '5/9': '5 / 9',
      },
    },
  },
  plugins: [],
};
