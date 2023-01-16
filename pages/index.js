import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<section
				id="hero"
				className="bg-auto bg-no-repeat bg-center  bg-[url('/hero-bg--phone.png')] md:bg-[url('/hero-bg--md.png')] lg:bg-[url('/hero-bg--tablet.png')] xl:bg-[url('/hero-bg.png')]  h-full"
			>
				<div className="container flex items-center px-8 mx-auto pt-10  space-y-0 md:space-y-0 md:flex-row  relative overflow-visible h-[54rem]">
					<div className="flex flex-col space-y-8  w-8/12 md:w-5/12 lg:w-6/12 absolute top-24">
						<h1 className=" text-5xl md:text-6xl lg:text-7xl font-bold text-left text-brownSecondary">
							Honey Pure
						</h1>
						<p className="max-w-sm text-left text-1xl lg:text-2xl text-graySecondary">
							Experience the Sweetness of Pure, Raw Honey
						</p>
						<p className="max-w-sm text-left  text-1xl lg:text-2xl  text-graySecondary md:w-7/12">
							Our honey is carefully sourced from local, sustainable bee farms
							to ensure the highest quality and support for small businesses
						</p>
						<div className="flex justify-start">
							<Link
								href="/"
								className=" md:hidden py-2 px-7 text-white bg-orangeTertiary rounded-full  hover:bg-orangeSecondary uppercase justify-self-start"
							>
								Shop now
							</Link>
						</div>
					</div>
					{/* <Image
						src="/hero-bg.png"
						width={1440}
						height={800}
						alt="image"
					></Image> */}
				</div>
			</section>
		</>
	);
};
export default Home;
