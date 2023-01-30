import React from "react";
import Product from "./Product";

const Carousel = ({ products }) => {
	return (
		<section id="likes" className="mt-36 container  mx-auto px-7">
			<h3 className="text-base uppercase text-orangePrimary text-center ">
				You may also like
			</h3>
			<div className="marquee">
				<div className="flex gap-6 track">
					{products?.map((product) => (
						<Product key={product._id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
