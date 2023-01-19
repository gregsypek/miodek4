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
						className=" text-orangeSecondary  hover:text-blackSecondary nav__link active"
					>
						Home
					</Link>
					<Link
						href="#"
						className="text-orangeSecondary hover:text-blackSecondary nav__link"
					>
						About
					</Link>
					<Link
						href="#"
						className="text-orangeSecondary hover:text-blackSecondary nav__link"
					>
						Blog
					</Link>
					<Link
						href="#"
						className="text-orangePrimary hover:text-blackSecondary nav__link"
					>
						Offer
					</Link>
				</div>
				<Link
					href="/"
					className="hidden md:block py-2 px-7 text-white bg-orangeSecondary rounded-full  hover:bg-orangeTertiary uppercase text-base"
				>
					Shop now
				</Link>
			</div>
			<hr className="border-t-grayPrimary relative z-[-2]" />
		</nav>
	);
};

export default Navbar;
