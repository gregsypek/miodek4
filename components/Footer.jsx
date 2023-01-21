import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="container mx-auto pb-7 mt-44">
			<hr className="border-t-grayPrimary  my-24 " />

			<div className=" flex flex-col md:flex-row flex-wrap lg:px-7  md:justify-evenly gap-8 md:space-y-16 md:space-x-32  md:-mt-16   items-center md:items-baseline ">
				<div className="flex flex-col space-y-3 items-center md:items-start text-graySecondary lowercase">
					<Link href="/">
						<Image
							src="/logo-small.svg"
							width={100}
							height={20}
							alt="small logo"
							className=""
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
					<h3 className="text-bold text-xl lowercase mb-5 ">contact</h3>
					<Link href="#" className="hover:text-red-300 text-graySecondary">
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
						<div className="flex rounded-full bg-brownTertiary text-white  ">
							<input
								type="email"
								className="flex-1 rounded-full focus:outline-none bg-brownTertiary placeholder:text-white py-2 px-7 "
								id=""
								placeholder="Email Address "
							/>
							<input
								type="submit"
								value="Submit"
								className="py-2 px-7 bg-brownPrimary rounded-full  hover:bg-blackPrimary uppercase "
							/>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
