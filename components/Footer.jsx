import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStateContext } from "../context/StateContext";

const Footer = () => {
	const { showCart } = useStateContext();
	return (
		<footer className=" mx-auto pb-7 mt-20 static">
			<hr className=" container px-7 mx-auto border-t-grayPrimary my-24 " />
			<div
				className={`footer__container container mx-auto pb-7 flex flex-col md:flex-row flex-wrap lg:px-7  md:justify-evenly gap-8 md:space-y-16 md:space-x-32  md:-mt-16   items-center md:items-baseline ${
					showCart ? "static" : "relative"
				} `}
			>
				<div className="flex flex-col space-y-3 items-center md:items-start text-graySecondary lowercase">
					<Link href="/">
						<Image
							src="/logo-small.svg"
							width={100}
							height={20}
							alt="small logo"
							className="footer__logo"
						/>
					</Link>
					<Link href="#" className="hover:text-red-300 pt-5 ">
						Home
					</Link>
					<Link href="#" className="hover:text-red-300 ">
						About
					</Link>
					<Link href="#" className="hover:text-red-300 ">
						Blog
					</Link>
					<Link href="#" className="hover:text-red-300 ">
						Offer
					</Link>
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start ">
					<h3 className="font-bold text-xl lowercase mb-5 ">contact</h3>
					<Link href="#" className="hover:text-red-300 text-graySecondary f">
						Email
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Linkedin
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Instagram
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Twitter
					</Link>
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start">
					<h3 className="text-bold text-xl lowercase  mb-5 ">market</h3>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Home
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						About
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Blog
					</Link>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
						Offer
					</Link>
				</div>
				<div className="flex flex-col space-y-3 text-graySecondary lowercase items-center md:items-start ">
					<h3 className="text-bold text-xl lowercase mb-5 ">
						join our newsletter
					</h3>

					<form>
						<div className="flex rounded-full bg-brownQuaternary text-white  static">
							<input
								type="email"
								className="flex-1 rounded-full focus:outline-none bg-brownQuaternary placeholder:text-brownPrimary py-2 px-7"
								placeholder="Email Address "
							/>
							<input
								type="submit"
								value="Submit"
								className="py-2 px-7 bg-brownPrimary rounded-full  hover:bg-blackPrimary uppercase hover:cursor-pointer"
							/>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
