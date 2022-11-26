/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Lexend",
			},
			colors: {
				smoke: {
					300: "#212121",
					400: "#191919",
					500: "#171717",
					600: "#151515",
					700: "#131313",
				},
			},
		},
	},
	plugins: [],
};
