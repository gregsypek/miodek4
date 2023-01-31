import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "ukhvb1dk",
	dataset: "production",
	apiVersion: "2023-01-29",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
console.log(
	"🚀 ~ file: client.js:12 ~ token",
	process.env.NEXT_PUBLIC_SANITY_TOKEN
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);