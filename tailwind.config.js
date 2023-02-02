/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '640px',
      // mobile: '560px',
    },
    extend: {
      aspectRatio: {
        '5/9': '5 / 9',
      },
    },
  },
  plugins: [],
};
