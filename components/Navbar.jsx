import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineShopping,
} from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const navigationRoutes = ["home", "about", "blog", "offer"];

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities, toggle, setToggle } = useStateContext();
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
		const isActive = router.asPath === (href === "/home" ? "/" : href);
		return (
			<Link
				href={href === "/home" ? "/" : href}
				passHref
				className={`${
					isActive && "active"
				} text-orangePrimary hover:cursor-pointer  hover:text-blackSecondary nav__link `}
			>
				{text}
			</Link>
		);
	}

	return (
<>

			<div className={`fixed w-screen ${show && 'bg-white shadow-sm'} z-40  top-0 `}>
			<div className=" px-8 mx-auto flex items-center justify-between">
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
				{/* mobile nav */}
				<nav className="order-2 md:hidden">
					<button
						id="menu-btn"
						className="open block cursor-pointer md:hidden  focus:outline-none"
						onClick={() => setToggle(true)}
					>
						<AiOutlineMenu className="w-6 h-6 text-brownPrimary " />
					</button>

					{toggle && (
						<div className="w-screen h-screen bg-gradientRGBA fixed right-0 top-0  z-50 transition-all overflow-y-hidden " >
					
							<div className="h-full w-7/12  bg-white relative float-right py-10 px-6 overflow-auto">
							<AiOutlineClose className="w-6 h-6 text-brownPrimary absolute right-0 top-6 mr-6 hover: cursor-pointer" onClick={() => setToggle(false) }/>
								<nav className="text-xl flex flex-col space-y-14 uppercase
								items-end baseline m-24 ">
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
					<span className="cart-tem-qty absolute bg-orangePrimary text-whitePrimary rounded-full -right-2 -top-1 w-5 h-5 flex justify-center align-middle text-sm">
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
