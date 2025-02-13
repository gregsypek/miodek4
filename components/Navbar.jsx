import Image from "next/image";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineShopping,
} from "react-icons/ai";
import styles from "../styles/navbar.module.css";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const navigationRoutes = ["home", "about", "blog", "offer"];

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities, toggle, setToggle } =
		useStateContext();
	const router = useRouter();
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 30) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	function NavigationLink({ href, text, router }) {
		// const isActive = router.asPath === (href === "/home" ? "/" : href);

		let isActive;

		if (!router.pathname.includes("[slug]")) {
			isActive = router.asPath === (href === "/home" ? "/" : href);
		} else {
			isActive =
				router.asPath ===
				(href === "/blog" ? `/blog/${router.query.slug}` : "");
		}

		return (
			<>
				<Link
					href={href === "/home" ? "/" : href}
					passHref
					basePath
					className={`${
						isActive && styles.active
					} text-orangePrimary hover:cursor-pointer  hover:text-blackSecondary relative  ${
						styles.nav__link
					} `}
					onClick={() => setToggle(false)}
				>
					{text}
				</Link>
				{}

				{/* after:content-link */}
				{/* <Image src="/circle.svg" alt="cirlce" width={25} height={25}/> */}
			</>
		);
	}

	return (
		<>
			<div
				className={`fixed w-screen ${
					show && "bg-white shadow-sm"
				} z-40  top-0 `}
			>
				<div className="flex items-center justify-between px-8 mx-auto ">
					{/* Logo */}
					<Link href="/">
						<Image src="/logo.svg" width={100} height={20} alt="image" />
					</Link>

					{/* Menu Items */}
					<nav className="hidden text-sm uppercase md:flex space-x-14 lg:space-x-20 ">
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
					{/* mobile nav */}
					<nav className="order-2 md:hidden">
						<button
							id="menu-btn"
							className="block cursor-pointer open md:hidden focus:outline-none"
							onClick={() => setToggle(true)}
						>
							<AiOutlineMenu className="w-6 h-6 text-brownPrimary" />
						</button>

						{toggle && (
							<div className="fixed top-0 right-0 z-50 w-screen h-screen overflow-y-hidden transition-all bg-gradientRGBA ">
								<div className="relative float-right w-7/12 h-full px-6 py-10 overflow-auto bg-white">
									<AiOutlineClose
										className="absolute right-0 w-6 h-6 mr-6 cursor-pointer text-brownPrimary top-6 hover:"
										onClick={() => setToggle(false)}
									/>
									<nav className="flex flex-col items-end m-24 text-xl uppercase space-y-14 baseline ">
										{navigationRoutes.map((singleRoute) => {
											return (
												<NavigationLink
													key={singleRoute}
													href={`/${singleRoute}`}
													text={singleRoute}
													router={router}
													onClick={() => setToggle(false)}
												/>
											);
										})}
									</nav>
								</div>
							</div>
						)}
					</nav>

					<button
						type="button"
						className="relative md:order-1"
						onClick={() => setShowCart(true)}
					>
						<AiOutlineShopping color="#A74E12" size="1.7em" />
						<span className="absolute flex justify-center w-5 h-5 text-sm align-middle rounded-full cart-tem-qty bg-orangePrimary text-whitePrimary -right-2 -top-1">
							{totalQuantities}
						</span>
					</button>

					{showCart && <Cart />}
				</div>

				{/* <hr className="border-t-grayPrimary relative -z-[20]" /> */}
			</div>
		</>
	);
};

export default Navbar;
