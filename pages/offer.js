import React from "react";
import Carousel from "../components/Carousel";

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
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);

	return {
		props: { products },
	};
};

export default AppWrap(Offer, "offer");
