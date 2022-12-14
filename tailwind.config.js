/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			aspectRatio: {
				'5/9': '5 / 9',
			},
		},
		colors: {
			primaryBackground: '#232523',
			secondaryBackground: '#161616',
			primaryText: '#FFFFFF',
			greenColor: '#00D400',
		},
	},
	plugins: [],
};
