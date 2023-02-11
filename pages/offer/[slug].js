import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import AppWrap from "../../wrapper/AppWrap";
import { useRouter } from "next/router";
import {
	AiFillStar,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineStar,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import Carousel from "../../components/Carousel";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
	const router = useRouter();

	const currentHoneyName = product.name.split(" ")[0];

	const currentOtherSizes = products
		.filter((jar) => jar.name.startsWith(currentHoneyName))
		.sort((a, b) => a.size.jar - b.size.jar);

	const { image, name, details, price,   } = product;

	const jarWidth = ["38", "58", "88"];
	const jarHeight = ["41", "61", "91"];

	const [index, setIndex] = useState(0);
	const { decQty, incQty, qty, onAdd } = useStateContext();
	return (
		<>
			<section id="offer" className="container mx-auto px-7 mt-44 text-left">
				<h1 className="text-xl text-graySecondary max-w-medium mb-7">
					Our honey comes in a variety of sizes and flavors, so you can find the
					perfect option for your needs.
				</h1>
				<div className="offer__box flex justify-left flex-col lg:flex-row  gap-24 lg:gap-16">
					<div
						className="offer__jar  border-2  p-14
						border-orangeTertiary rounded-md  lg:w-6/12 grid place-items-center h-[500px]"
					>
				
						<img src={urlFor(image && image[0])} width={381} height={390} />						
					</div>
					<div className="offer__miniature flex lg:flex-col lg:justify-center gap-4 ">
					
						{currentOtherSizes.length &&
							currentOtherSizes.map((item, i) => (
								<Link
									href={`/offer/${item?.slug?.current}`}
									className={`offer__jar bg-whiteSecondary border-2 p-2  
						border-orangeTertiary rounded-xl  grid place-items-center hover:bg-orangeQuaternary hover:cursor-pointer ${
							 router.query.slug === item.slug.current  
								? "bg-orangeQuaternary"
								: !router.query.slug & i === 0  
								? "bg-orangeQuaternary" : ""
						}` }
									onClick={() => setIndex(i)}
									key={item._id}
								>						
									<img
										src={urlFor(item.image[0])}
										width={`${jarWidth[i]}`}
										height={`${jarHeight[i]}`}
									/>

									<strong className="text-orangePrimary">
										{item.size.jar}ml
									</strong>
									{}
								</Link>
							))}				
					</div>

					<div className="offer__info flex flex-col space-y-4 lg:w-5/12 justify-start">
						<h3 className="text-base uppercase text-orangePrimary text-left">
							{name}</h3>
						<div className="offer__details flex flex-col space-y-4 ">
							<div className="offer__stars flex items-center">
								<AiFillStar color="#F2A603" size="1.5em" />
								<AiFillStar color="#F2A603" size="1.5em" />
								<AiFillStar color="#F2A603" size="1.5em" />
								<AiFillStar color="#F2A603" size="1.5em" />
								<AiOutlineStar color="#F2A603" size="1.5em" />
								<p className="pl-2">(12)</p>
							</div>
							<h3 className="text-lg uppercase text-orangePrimary text-left  ">
								Details
							</h3>
							<p className="text-graySecondary max-w-medium">{details}</p>
							{/* <p className="text-graySecondary max-w-medium">{currentOtherSizes[index].details}</p> */}
						</div>
						<div className="offer__quantity flex flex-col gap-7 flex-1 justify-between h-[500px]">
							<p className="text-2xl text-graySecondary">${price}</p>
							<div className="offer__values flex gap-8 items-center">
								<p className="text-lg uppercase text-orangePrimary text-left ">
									Quantity:
								</p>
								<div
									className="offer__squares flex items-center  border-2
													border-graySecondary
													rounded-sm h-12 hover:cursor-pointer"
								>
									<span
										className=" border-r-2 
													border-graySecondary w-12 h-full flex justify-center items-center hover:cursor-pointer hover:bg-whitePrimary
												"
										onClick={decQty}
									>
										<AiOutlineMinus color="red" size="1.5em" />
									</span>
									<span
										className=" border-r-2 w-12 h-full
													border-graySecondary
													rounded-sm flex justify-center items-center text-xl text-graySecondary hover:cursor-pointer hover:bg-whitePrimary"
									>
										{qty}
									</span>
									<span
										className="w-12 h-full flex justify-center items-center hover:cursor-pointer hover:bg-whitePrimary"
										onClick={incQty}
									>
										<AiOutlinePlus color="green" size="1.5em" />
									</span>
								</div>
							</div>
							<div className="offer__btns flex flex-col md:flex-row mt-12 gap-7 self-start md:mt-0">
								<button
									type="button"
									onClick={() => onAdd(product, qty)}
									className=" btn btn-empty py-2 px-7 text-graySecondary bg-whiteSecondary rounded-full   hover:bg-graySecondary  hover:text-whiteSecondary uppercase border-2  border-graySecondary"
								>
									Add to Cart
								</button>

								<Link
									href="/"
									className=" py-2 px-7 border-2 border-transparent text-white bg-orangeTertiary rounded-full hover:bg-orangeSecondary uppercase justify-self-start"
								>
									Shop now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Carousel products={products} />
		</>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));
	// console.log("🚀 ~ file: [slug].js:138 ~ paths ~ paths", paths);
	// 🚀 ~ file: [slug].js:138 ~ paths ~ paths [
	//   { params: { slug: 'rapaseed-honey' } },
	//   { params: { slug: 'strawberry-honey' } },
	//   { params: { slug: 'accacia-honey' } },
	//   { params: { slug: 'flowers-honey' } }
	// ]
	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = `*[_type == "product"]{
		image, name, slug, price,  details, _id, 
	 size->{jar}
	}`;

	const product = await client.fetch(query);

	const products = await client.fetch(productsQuery);

	return {
		props: { products, product },
	};
};
// export default ProductDetails;
// export default AppWrap(ProductDetails, "offer-rapaseed");
export default AppWrap(ProductDetails, "offer");
