import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="relative container mx-auto px-8 ">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<Image src="/logo.svg" width={100} height={20} alt="image" />
				</Link>
				{/* Menu Items */}
				<div className="text-sm hidden md:flex space-x-14 lg:space-x-20 uppercase ">
					<Link
						href="#"
						className=" text-orangeSecondary  hover:text-blackSecondary"
					>
						Home
					</Link>
					<Link
						href="#"
						className="text-orangeSecondary hover:text-blackSecondary"
					>
						About
					</Link>
					<Link
						href="#"
						className="text-orangeSecondary hover:text-blackSecondary"
					>
						Blog
					</Link>
					<Link
						href="#"
						className="text-orangePrimary hover:text-blackSecondary"
					>
						Offer
					</Link>
				</div>
				<Link
					href="/"
					className="hidden md:block py-2 px-7 text-white bg-graySecondary rounded-full  hover:bg-orangeSecondary uppercase "
				>
					Shop now
				</Link>
			</div>
			{/* <hr className="border-t-grayPrimary" /> */}
		</nav>
	);
};

export default Navbar;
