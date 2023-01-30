import React from "react";
import Carousel from "../components/Carousel";

import Product from "../components/Product";
import { client } from "../lib/client";

import AppWrap from "../wrapper/AppWrap";
import ProductDetails from "./offer/[slug]";

const Offer = ({ products }) => {
	return (
		<>
			<ProductDetails product={products[0]} />

			{/* <Carousel products={products} /> */}
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
