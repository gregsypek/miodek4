import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import {
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineShopping,
} from "react-icons/ai";

const navigationRoutes = ["home", "about", "blog", "offer"];

const Navbar = () => {
	const router = useRouter();

	function NavigationLink({ href, text, router }) {
		const isActive = router.asPath === (href === "/home" ? "/" : href);
		return (
			<Link
				href={href === "/home" ? "/" : href}
				passHref
				className={`${
					isActive && "active"
				} text-orangePrimary hover:cursor-pointer  hover:text-blackSecondary nav__link`}
			>
				{text}
			</Link>
		);
	}

	return (
		<nav className=" relative  mx-auto px-8 ">
			<div className=" sticky flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<Image src="/logo.svg" width={100} height={20} alt="image" />
				</Link>
				{/* Menu Items */}
				<nav className="text-sm hidden md:flex space-x-14 lg:space-x-20 uppercase ">
					{navigationRoutes.map((singleRoute) => {
						return (
							<NavigationLink
								key={singleRoute}
								href={`/${singleRoute}`}
								text={singleRoute}
								router={router}
							/>
						);
					})}
				</nav>
				<button type="button" className="relative">
					<AiOutlineShopping color="#A74E12" size="1.7em" />
					<span className="cart-tem-qty absolute bg-orangePrimary text-whitePrimary rounded-full -right-2 -top-1 w-5 h-5 flex justify-center align-middle text-sm">
						1
					</span>
				</button>
				<button
					id="menu-btn"
					className="open block cursor-pointer md:hidden  focus:outline-none"
				>
					<AiOutlineMenu className="w-6 h-6 text-brownPrimary " />
				</button>
			</div>
			{/* Background Overlay */}
			{/* <div className="hidden bg-gradient-to-r from-orange-300 to-orange-500 opacity-75 blur-md h-full w-full fixed inset-0"></div> */}

			{/* <div
				id="menu"
				className="absolute top-0 -right-40 w-3/3 h-screen  md:hidden bg-whitePrimary  border-2 z-10 mx-auto py-8 "
			>
		
				<AiOutlineClose className="w-6 h-6 text-brownPrimary absolute right-48 top-6" />

				<div className="text-xl flex flex-col  space-y-14   uppercase items-end p-24 mr-40">
					<Link
						href="#"
						className=" text-orangeSecondary  hover:text-blackSecondary nav__link "
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
	
			</div> */}

			<hr className="border-t-grayPrimary relative z-[-2]" />
		</nav>
	);
};

export default Navbar;
