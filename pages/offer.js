import React from "react";

import { client } from "../lib/client";

import AppWrap from "../wrapper/AppWrap";
import ProductDetails from "./offer/[slug]";

const Offer = ({ products }) => {
	return (
		<>
			<ProductDetails product={products[0]} products={products} />

			{/* <Carousel products={products} className="bg-red-200" /> */}
		</>
	);
};

export const getServerSideProps = async () => {
	const query = `*[_type == "product"]{
		image, name, slug, price,  details, _id,
	 size->{jar}
	}`;
	const products = await client.fetch(query);

	return {
		props: { products },
	};
};

export default AppWrap(Offer, "offer");
