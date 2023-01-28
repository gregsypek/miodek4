import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	AiFillStar,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineStar,
} from "react-icons/ai";
import AppWrap from "../wrapper/AppWrap";

const Offer = () => {
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
						border-orangeTertiary rounded-md  lg:w-6/12 grid place-items-center"
					>
						<Image src="/Jar-flowers.png" width={381} height={390}></Image>
					</div>
					<div className="offer__miniature flex lg:flex-col lg:justify-center gap-4 ">
						<span
							className="offer__jar bg-whiteSecondary border-2 p-[3%] 
						border-orangeTertiary rounded-xl  grid place-items-center hover:bg-orangeQuaternary hover:cursor-pointer"
						>
							<Image src="/Jar-flowers.png" width={88} height={91}></Image>
						</span>
						<span
							className="offer__jar bg-whiteSecondary border-2 p-[3%] 
						border-orangeTertiary rounded-xl  grid place-items-center hover:bg-orangeQuaternary hover:cursor-pointer"
						>
							<Image src="/Jar-flowers.png" width={88} height={91}></Image>
						</span>
						<span
							className="offer__jar bg-orangeQuaternary border-2 p-[3%] 
						border-orangeTertiary rounded-xl  grid place-items-center hover:bg-orangeQuaternary hover:cursor-pointer"
						>
							<Image src="/Jar-flowers.png" width={88} height={91}></Image>
						</span>
					</div>
					<div className="offer__info flex flex-col space-y-4 lg:w-5/12 justify-start">
						<h3 className="text-base uppercase text-orangePrimary text-left">
							Rapessed Honey
						</h3>
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
							<p className="text-graySecondary max-w-medium">
								Rapeseed honey is easily absorbed. It is recommended for people
								with hypertension and digestive system problems
							</p>
						</div>
						<div className="offer__quantity flex flex-col gap-7 flex-1 justify-between h-[500px]">
							<p className="text-2xl text-blackPrimary">$10</p>
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
									>
										<AiOutlineMinus color="red" size="1.5em" />
									</span>
									<span
										className=" border-r-2 w-12 h-full
													border-graySecondary
													rounded-sm flex justify-center items-center text-xl text-graySecondary hover:cursor-pointer hover:bg-whitePrimary"
									>
										1
									</span>
									<span className="w-12 h-full flex justify-center items-center hover:cursor-pointer hover:bg-whitePrimary">
										<AiOutlinePlus color="green" size="1.5em" />
									</span>
								</div>
							</div>
							<div className="offer__btns flex flex-col md:flex-row mt-12 gap-7 self-start md:mt-0">
								<Link
									href="/"
									className=" btn btn-empty py-2 px-7 text-graySecondary bg-whiteSecondary rounded-full   hover:bg-graySecondary  hover:text-whiteSecondary uppercase border-2  border-graySecondary"
								>
									Add to Cart
								</Link>
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

				<div className="offer__likes mt-36">
					<h3 className="text-base uppercase text-orangePrimary text-center ">
						You may also like
					</h3>
					<div className="flex gap-6">
						<div className="offer__like flex flex-col mt-20  ">
							<span
								className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
							>
								<Image src="/Jar-flowers.png" width={184} height={202}></Image>
							</span>
							<div
								className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 "
							>
								<p className="text-orangePrimary text-sm">rapaseed honey</p>
								<p className="text-brwonPrimary text-sm">$10</p>
							</div>
						</div>
						<div className="offer__like flex flex-col mt-20  ">
							<span
								className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
							>
								<Image src="/Jar-flowers.png" width={184} height={202}></Image>
							</span>
							<div
								className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 "
							>
								<p className="text-orangePrimary text-sm">rapaseed honey</p>
								<p className="text-brwonPrimary text-sm">$10</p>
							</div>
						</div>
						<div className="offer__like flex flex-col mt-20  ">
							<span
								className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
							>
								<Image src="/Jar-flowers.png" width={184} height={202}></Image>
							</span>
							<div
								className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 "
							>
								<p className="text-orangePrimary text-sm">rapaseed honey</p>
								<p className="text-brwonPrimary text-sm">$10</p>
							</div>
						</div>
						<div className="offer__like flex flex-col mt-20  ">
							<span
								className="offer__jar bg-grayTertiary py-11 px-14
		rounded-[25px] grid place-items-center min-w-[200px] hover:bg-whitePrimary hover:cursor-pointer"
							>
								<Image src="/Jar-flowers.png" width={184} height={202}></Image>
							</span>
							<div
								className="offer__jar-frame bg-white border p-2 
						border-orangeTertiary self-center flex justify-between rounded-xl w-[95%] -translate-y-6 "
							>
								<p className="text-orangePrimary text-sm">rapaseed honey</p>
								<p className="text-brwonPrimary text-sm">$10</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AppWrap(Offer, "offer");
