import React from "react";

import Image from "next/image";
import Link from "next/link";
import AppWrap from "../wrapper/AppWrap";

import { client, urlFor } from "../lib/client";
import HeroBanner from "../components/HeroBanner";
import Testimonial from "../components/Testimonial";

const Home = ({ bannerData, testimonials }) => {
	return (
		<>
			{/* Hero Section */}

			<section
				id="hero"
				className="bg-auto bg-no-repeat bg-center bg-[url('/hero-bg--phone.png')] md:bg-[url('/hero-bg--md.png')] lg:bg-[url('/hero-bg--tablet.png')] xl:bg-[url('/hero-bg.png')] h-full mt-20"
			>
				<div className="container flex items-center px-4  mx-auto pt-10  space-y-0 md:space-y-0 md:flex-row relative overflow-visible h-[56rem] ">
					<div className="flex flex-col space-y-8 pl-2 md:pl-16  w-10/12 md:w-5/12 lg:w-6/12 absolute top-24 ">
						<h1 className=" text-5xl md:text-6xl lg:text-7xl font-bold text-left text-brownSecondary">
							Honey Pure
						</h1>
						<p className=" text-left text-md md:text-xl lg:text-xl text-graySecondary max-w-small">
							Experience the sweetness of pure, raw honey from local,
							sustainable bee farms to ensure the highest quality and support
							for small businesses
						</p>
						{/* <p className="text-left text-sm lg:text-xl text-graySecondary lg:w-5/12 max-w-sm">
							Our honey is carefully sourced from local, sustainable bee farms
							to ensure the highest quality and support for small businesses
						</p> */}
						<Link
							href="/offer"
							className="py-2 px-7 text-white relative bg-orangeTertiary rounded-full hover:bg-orangeSecondary hover:cursor-pointer uppercase self-start"
						>
							Shop now
						</Link>

						{/* <div className="flex justify-start">
							<Link
								href="/"
								className=" block py-2 px-7 text-white bg-orangeTertiary rounded-full hover:bg-orangePrimary hover:cursor-pointer uppercase justify-self-start absolute index-2"
							>
								Shop now
							</Link>
						</div> */}
					</div>
			
				</div>
			</section>
			<section id="features" className="px-4 md:px-8">		
				<div className="features__top container flex px-7 mx-auto -mt-20 md:mt-4 lg:mt-44 justify-center lg:justify-evenly flex-wrap ">
					<div className="feature space-y-7  ">
						<h3 className="text-base uppercase text-orangePrimary text-center lg:text-left">
							HIGHEST QUALITY
						</h3>
						<p className="text-base text-graySecondary text-center lg:text-left max-w-sm pb-10 ">
							Our honey is carefully sourced from local, sustainable bee farms
							to ensure the highest quality and support for small businesses.
						</p>
					</div>
					<div className="feature space-y-7 ">
						<h3 className="text-base uppercase text-orangePrimary text-center lg:text-left">
							100% NATURE
						</h3>
						<p className="text-base text-graySecondary text-center lg:text-left max-w-sm pb-10 ">
							We never heat or filter our honey, which means it retains all of
							its natural enzymes and antioxidants. This makes it not only
							delicious, but also nutritious!
						</p>
					</div>
					<div className="feature space-y-7 ">
						<h3 className="text-base uppercase text-orangePrimary text-center lg:text-left">
							IRREPLACEABLE
						</h3>
						<p className="text-base text-graySecondary text-center lg:text-left max-w-sm pb-10 ">
							Honey has a wide range of uses, from sweetening tea and coffee to
							serving as a natural sweetener in baking and cooking. It's also
							great for skin care and home remedies.
						</p>
					</div>
				</div>
				{/* btn */}
				<div className="container mx-auto mt-2 md:mt-12  flex justify-center">
					<Link
						href="/offer"
						className=" btn btn-empty py-2 px-7 text-graySecondary bg-whiteSecondary rounded-full mb-44   hover:text-whiteSecondary hover:bg-graySecondary uppercase border  border-graySecondary"
					>
						View our pricing
					</Link>
				</div>

				<div className="features__bottom -mt-20 md:mt-16">
					<div className="container mx-auto flex flex-col md:flex-row items-center">
						<div className="h-[550px] w-full lg:w-5/12 flex items-center flex-grow">
							<picture className="w-full md:h-full">
								<Image
									className="   self-center jar jar--rapeseed relative -z-[1]"
									src="/JAR-FLOWERS.png"
									width={398}
									height={377}
									alt="jar with flowers honey"

								></Image>
							</picture>
						</div>
						<div className=" md:w-7/12 flex flex-col items-center ">
							<h3 className="text-base uppercase text-orangePrimary text-center md:text-left -mt-10 mb-16 ">
								Features
							</h3>
							<ul className="space-y-7 features__list">
								<li className=" text-base text-brownPrimary  lg:text-left max-w-sm ">
									100% pure, row honey
								</li>
								<li className="text-base text-brownPrimary lg:text-left max-w-sm">
									{" "}
									Sourced from local, sustainable bee farms
								</li>
								<li className="text-base text-brownPrimary  lg:text-left max-w-sm">
									Never heated of filtered
								</li>
								<li className="text-base text-brownPrimary lg:text-left max-w-sm">
									Contains beneficial enzymes and antioxidants
								</li>
								<li className="text-base text-brownPrimary  lg:text-left max-w-sm">
									Delicious taste and versatile uses
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section id="testimonials" className="mb-44">
				<div className=" px-4 md:px-8 mx-auto mt-44 text-center container space-y-7">
					<h3 className="text-base uppercase text-orangePrimary text-center   ">
						Testimonials
					</h3>
					<p className="text-base text-graySecondary text-center ">
						Read What Others Have To Say
					</p>
				</div>
				<div className="container gap-y-20 lg:gap-x-20 px-4 md:px-8 lg:px-28 mt-24 flex flex-col content-center lg:flex-row justify-center flex-wrap mx-auto flex-grow flex-shrink basis-80 items-stretch ">
					{testimonials?.map((testimonial) => (
						<Testimonial data={testimonial} key={testimonial._id}/>
					))}
				</div>
			</section>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
		</>
	);
};
export const getServerSideProps = async () => {
	const bannerQuery = '*[_type == "banner"]';
	const testimonialsQuery = '*[_type == "testimonials"]';
	const bannerData = await client.fetch(bannerQuery);
	const testimonials = await client.fetch(testimonialsQuery);

	return {
		props: { bannerData, testimonials },
	};
};
// export default Home;
export default AppWrap(Home, "hero");
