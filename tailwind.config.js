/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
	content: [
		path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
		path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
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
				orangeQuaternary: "#f3ecdd",
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
				grayTertiary: "#f1f0f0",
			},
			backgroundImage: {
				"hero-pattern": "url('/hero-gradient.png')",
				gradient:
					"linear-gradient(#ecbd79 0%, rgba(236, 194, 108, 0.99) 26.05%, #eaba86 66.67%, #ecb479 100%)",
				gradientRGBA:
					"linear-gradient(rgba(236,189,121,.9) 0%, rgba(236, 194, 108, 0.91) 26.05%, rgba(234,186,134,0.9) 66.67%, rgba(236,180,121,0.9) 100%)",
			},
		  content: {
        'link': 'url("../public/circle.svg")',
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
