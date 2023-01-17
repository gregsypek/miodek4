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
				<div className="container flex items-center px-8 mx-auto pt-10  space-y-0 md:space-y-0 md:flex-row  relative overflow-visible h-[56rem]">
					<div className="flex flex-col space-y-8 pl-2 md:pl-16  w-10/12 md:w-5/12 lg:w-6/12 absolute top-24">
						<h1 className=" text-5xl md:text-6xl lg:text-7xl font-bold text-left text-brownSecondary">
							Honey Pure
						</h1>
						<p className="max-w-sm text-left text-xl lg:text-xl text-graySecondary">
							Experience the Sweetness of Pure, Raw Honey
						</p>
						<p className="text-left  text-xl lg:text-xl  text-graySecondary lg:w-7/12">
							Our honey is carefully sourced from local, sustainable bee farms
							to ensure the highest quality and support for small businesses
						</p>
						<div className="flex justify-start">
							<Link
								href="/"
								className=" md:hidden py-2 px-7 text-white bg-orangeTertiary rounded-full hover:bg-orangeSecondary uppercase justify-self-start"
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
			<section id="features" className="px-8">
				{/* <section
				id="features"
				className=" bg-[url('/features-gradient.svg')] bg-[length:400px_400px]  md:bg-[length:600px_400px] bg-no-repeat md:bg-left-bottom "
			> */}
				<div className="features__top container flex px-7 mx-auto -mt-20 md:mt-4 lg:mt-16 justify-center lg:justify-evenly flex-wrap ">
					<div className="feature space-y-7 ">
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
						href="/"
						className=" btn btn-empty py-2 px-7 mt-7 text-graySecondary bg-whiteSecondary rounded-full  hover:bg-orangeSecondary hover:text-whitePrimary uppercase border  border-graySecondary"
					>
						View our pricing
					</Link>
				</div>

				<div className="features__bottom -mt-20 md:mt-16">
					<div className="container mx-auto flex flex-col md:flex-row items-center">
						<div className="h-[550px] w-5/12 flex items-center">
							<picture>
								<Image
									className="self-center jar jar--rapeseed"
									src="/JAR-FLOWERS.png"
									width={398}
									height={377}
								></Image>
							</picture>
						</div>
						<div className=" md:w-7/12 flex flex-col items-center ">
							<h3 className="text-base uppercase text-orangePrimary text-center md:text-left -mt-10 mb-16 ">
								Features
							</h3>
							<ul className="space-y-7 features__list">
								<li className=" text-base text-graySecondary  lg:text-left max-w-sm ">
									100% pure, row honey
								</li>
								<li className="text-base text-graySecondary  lg:text-left max-w-sm">
									{" "}
									Sourced from local, sustainable bee farms
								</li>
								<li className="text-base text-graySecondary  lg:text-left max-w-sm">
									Never heated of filtered
								</li>
								<li className="text-base text-graySecondary  lg:text-left max-w-sm">
									Contains beneficial enzymes and antioxidants
								</li>
								<li className="text-base text-graySecondary  lg:text-left max-w-sm">
									Delicious taste and versatile uses
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;
