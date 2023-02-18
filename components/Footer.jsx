import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";

const Footer = () => {
	const { showCart, toggle } = useStateContext();
	return (
		<footer className=" mx-auto pb-7 mt-20 static">
			<hr className=" container px-7 mx-auto border-t-grayPrimary my-24 " />
			<div
				className={`footer__container container mx-auto pb-7 flex flex-col md:flex-row flex-wrap lg:px-7  md:justify-evenly gap-8 md:space-y-16 md:space-x-32  md:-mt-16   items-center md:items-baseline ${
					showCart ? "hidden" : "relative"
				} ${toggle ? "hidden" : ""}`}
			>
				<div className="flex flex-col space-y-3 items-center md:items-start text-graySecondary lowercase">
					<Link href="/">
						<Image
							src="/logo-small.svg"
							width={100}
							height={20}
							alt="small logo"
							className="footer__logo h-auto"
						/>
					</Link>
					
					<Link href="/" className="hover:text-orangePrimary pt-5 ">
						Home
					</Link>
					<Link href="/about" className="hover:text-orangePrimary ">
						About
					</Link>
					<Link href="/blog" className="hover:text-orangePrimary ">
						Blog
					</Link>
					<Link href="offer" className="hover:text-orangePrimary ">
						Offer
					</Link>
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start ">
					<h3 className="font-bold text-xl lowercase mb-5 ">contact</h3>
					<Link href="#" className="hover:text-orangePrimary text-graySecondary">
						Email
					</Link>
					<Link href="#" className="hover:text-orangePrimary text-graySecondary">
						Linkedin
					</Link>
					<Link href="#" className="hover:text-orangePrimary text-graySecondary">
						Instagram
					</Link>
					<Link href="#" className="hover:text-orangePrimary text-graySecondary">
						Twitter
					</Link>
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start">
					<h3 className="text-bold text-xl lowercase  mb-5 ">market</h3>
					<Link href="/payments" className="hover:text-orangePrimary text-graySecondary">
					payment methods
					</Link>
					<Link href="/rules" className="hover:text-orangePrimary text-graySecondary">
					rules and regulations
					</Link>
					<Link href="/privacy" className="hover:text-orangePrimary text-graySecondary">
						privacy policy
					</Link>
			
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start ">
					<h3 className="text-bold text-xl lowercase mb-5 ">
						join our newsletter
					</h3>

					<form>
						<div className="flex  flex-col sm:flex-row rounded-full sm:bg-brownQuaternary text-brownPrimary gap-2 sm:gap-0 static">
							<input
								type="email"
								className="flex-1 rounded-full focus:outline-none bg-brownQuaternary placeholder:text-graySecondary placeholder:font-thin py-2 px-7"
								placeholder="Email Address "
							/>
							<input
								type="submit"
								value="Submit"
								className="py-2 px-7 bg-brownPrimary rounded-full text-whiteSecondary hover:bg-blackPrimary uppercase hover:cursor-pointer"
							/>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
