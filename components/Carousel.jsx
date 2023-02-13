import React, { useState } from "react";
import Product from "./Product";

const Carousel = ({ products }) => {
	const [showAll, setShowAll] = useState(false);
	return (
		<section id="likes" className="mt-36 container  mx-auto px-7">
			{!showAll && (
				<button
					type="button"
					onClick={() => setShowAll(true)}
					className=" btn btn-empty py-2 px-7 text-orangePrimary bg-whiteSecondary rounded-full     hover:text-orangeSecondary uppercase border-2 mb-12 border-orangePrimary hidden md:block m-auto"
				>
					Show me all
				</button>
			)}
			<div className="flex  items-center gap-14 justify-center">
				<h3 className="text-base uppercase text-orangePrimary text-center mb-20">
					You may also like
				</h3>
			</div>
			{!showAll && (
				<div className="marquee">
					<div className="flex gap-6 track">
						{products?.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
				</div>
			)}

			{showAll && (
				<div className="grid ">
					{/* <h3 className="text-base uppercase text-orangePrimary text-center ">
					Show me all
				</h3> */}

					<div className="flex gap-6 flex-wrap justify-evenly">
						{products?.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
					<button
						type="button"
						onClick={() => setShowAll(false)}
						className=" btn btn-empty py-2 px-7 text-orangePrimary bg-whiteSecondary rounded-full     hover:text-orangeSecondary uppercase border-2  border-orangePrimary mx-auto mt-12"
					>
						hide all
					</button>
				</div>
			)}
		</section>
	);
};

export default Carousel;
