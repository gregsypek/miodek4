import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";

const Footer = () => {
	const { showCart, toggle } = useStateContext();
	return (
		<footer className="static mx-auto mt-20 pb-7">
			<hr className="container mx-auto my-24 px-7 border-t-grayPrimary" />
			<div
				className={`footer__container container mx-auto pb-7 flex flex-col md:flex-row flex-wrap lg:px-7  md:justify-evenly gap-8 md:space-y-16 md:space-x-32  md:-mt-16   items-center md:items-baseline ${
					showCart ? "hidden" : "relative"
				} ${toggle ? "hidden" : ""}`}
			>
				<div className="flex flex-col items-center space-y-3 lowercase md:items-start text-graySecondary">
					<Link href="/">
						<Image
							src="/logo-small.svg"
							width={100}
							height={20}
							alt="small logo"
							className="h-auto footer__logo"
						/>
					</Link>

					<Link href="/" className="pt-5 hover:text-orangePrimary ">
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
				<div className="flex flex-col items-center space-y-3 lowercase text-graySecondary md:items-start ">
					<h3 className="mb-5 text-xl font-bold lowercase ">contact</h3>
					<Link
						href="#"
						className="hover:text-orangePrimary text-graySecondary"
					>
						Email
					</Link>
					<Link
						href="#"
						className="hover:text-orangePrimary text-graySecondary"
					>
						Linkedin
					</Link>
					<Link
						href="#"
						className="hover:text-orangePrimary text-graySecondary"
					>
						Instagram
					</Link>
					<Link
						href="#"
						className="hover:text-orangePrimary text-graySecondary"
					>
						Twitter
					</Link>
				</div>
				<div className="flex flex-col items-center space-y-3 lowercase text-graySecondary md:items-start">
					<h3 className="mb-5 text-xl lowercase text-bold ">market</h3>
					<Link
						href="/payments"
						className="hover:text-orangePrimary text-graySecondary"
					>
						payment methods
					</Link>
					<Link
						href="/rules"
						className="hover:text-orangePrimary text-graySecondary"
					>
						rules and regulations
					</Link>
					<Link
						href="/privacy"
						className="hover:text-orangePrimary text-graySecondary"
					>
						privacy policy
					</Link>
				</div>
				<div className="flex flex-col items-center space-y-3 lowercase text-graySecondary md:items-start ">
					<h3 className="mb-5 text-xl lowercase text-bold ">
						join our newsletter
					</h3>

					<form>
						<div className="static flex flex-col gap-2 rounded-full sm:flex-row sm:bg-orangeQuaternary text-brownPrimary sm:gap-0">
							<input
								type="email"
								className="flex-1 py-2 rounded-full focus:outline-none bg-orangeQuaternary placeholder:text-graySecondary placeholder:font-thin px-7"
								placeholder="Email Address "
							/>
							<input
								type="submit"
								value="Submit"
								className="py-2 uppercase rounded-full px-7 bg-brownPrimary text-whiteSecondary hover:bg-blackPrimary hover:cursor-pointer"
							/>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
