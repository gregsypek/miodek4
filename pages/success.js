import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
	AiOutlineShopping,
} from "react-icons/ai";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";


const success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } = 		useStateContext();

	useEffect(() => {
		// localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantities(0);
	}, []);

	return (
		<div className="container mx-auto px-7  mt-44 mb-32 w-full grid place-items-center">
			<div className="flex flex-col space-y-4 items-center">
				<p className="icon">
					<AiOutlineShopping color="#A74E12" size="10em"/>
				</p>
				<h2 className="text-lg md:text-base uppercase text-orangePrimary">Congratulation! Your purchase is successfull!</h2>
				<p className="">Check your email inbox for the receipt</p>
				<p className="">
					If you have any questions, please email{" "}
					<a href="mailto:order@example.com" className=" text-orangePrimary">
						order@example.com
					</a>
				</p>
				<Link href="/offer">
					<button
					type="button"
					className=" btn btn-empty py-2 px-7 text-orangePrimary bg-whiteSecondary rounded-full     hover:text-orangeSecondary uppercase border-2 mb-12 border-orangePrimary hidden md:block m-auto"
				>
				Continue shopping
				</button>
				</Link>
			</div>
		</div>
	);
};

export default success;
