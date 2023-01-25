/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				orangePrimary: "#A74E12",
				orangeSecondary: "#DD921D",
				orangeTertiary: "#F2A603",
				blackPrimary: "#161513",
				blackSecondary: "#1C1C22",
				brownPrimary: "#4D3425",
				brownSecondary: "#AC8C7D",
				brownTertiary: "#C8B4A2",
				brownQuaternary: "#D8D0C8",
				whitePrimary: "#E6E8EC",
				whiteSecondary: "#FFFFFF",
				grayPrimary: "#BDBDBD",
				graySecondary: "#828282",
			},
			backgroundImage: {
				"hero-pattern": "url('/hero-gradient.png')",
			},
			maxWidth: {
				readable: "50ch",
				medium: "35ch",
				small: "20ch",
			},
		},
		// fontFamily: {
		// 	reem: "Reem Kufi",
		// },
	},
	plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ["./src/**/*.{html,js}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };
