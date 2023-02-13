import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
	// console.log("🚀 ~ file: Product.jsx:7 ~ Product ~ product", product)
	return (
		<>
			<Link
				href={`/offer/${product?.slug?.current}`}
				className="offer__like flex flex-col   "
			>
				<div
					className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
				>
					<img
						src={`${product.image ? urlFor(product.image[0]) : "/no-image.png"} `}
						width={184}
						height={202}
						alt={product.name}
					/>
				</div>
				<div
					className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 min-h-[38px]"
				>
					<p className="text-orangePrimary text-sm">{product.name}</p>
					<p className="text-brwonPrimary text-sm">{product.price}</p>
				</div>
			</Link>
			{/* <div className="offer__like flex flex-col mt-20  ">
				<div
					className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
				>			
					<img
						src={urlFor(product && product.image[0])}
						width={184}
						height={202}
						alt={product.name}
					/>
					{console.log(product)}
				</div>
				<div
					className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 "
				>
					<p className="text-orangePrimary text-sm">{product.name}</p>
					<p className="text-brwonPrimary text-sm">{product.price}</p>
				</div>
			</div> */}
		</>
	);
};

export default Product;
