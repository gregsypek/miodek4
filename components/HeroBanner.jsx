// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
	return (
		<>
			<section id="sale" className="mt-56 container px-7 mx-auto ">
				<div className="container gradient gap-y-20 items-center md:items-stretch py-8 mx-auto mt-32 px-20 flex flex-col md:flex-row justify-between content-center rounded-[25px]">
					<div className="left flex flex-col justify-evenly gap-y-5 items-center md:items-start ">
						<h2 className="uppercase font-bold text-orangePrimary text-3xl">
							{heroBanner.largeText}
						</h2>
						<p className="uppercase font-bold text-whitePrimary text-2xl">
							{heroBanner.discount}
						</p>
						<p className=" text-base text-orangePrimary ">
							{heroBanner.saleTime}
						</p>
					</div>
					<div className="center">
						<img
							src={urlFor(heroBanner.image)}
							width={370}
							height={350}
							className="m-0  md:-mt-24 "
							alt={heroBanner.product}
						/>
						{/* <Image
							src="/JAR-STRAWBERRY.png"
							width={370}
							height={350}
							className="m-0  md:-mt-24 "
							alt={heroBanner.product}
						></Image> */}
					</div>
					<div className="right flex flex-col justify-evenly gap-y-5 items-center md:items-start">
						<p className="uppercase font-bold text-whitePrimary text-2xl">
							{heroBanner.product}
						</p>
						<h2 className="uppercase font-bold text-orangePrimary text-3xl">
							{heroBanner.desc}
						</h2>
						<Link
							href="/"
							className="py-2 px-7 text-blackPrimary bg-whiteSecondary rounded-full hover:bg-whitePrimary uppercase self-center md:self-start"
						>
							{heroBanner.buttonText}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroBanner;
