import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

import { AiOutlineLeftCircle } from "react-icons/ai";

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart } =
		useStateContext();
	return (
		<>
			<div
				className="w-screen bg-gradientRGBA  fixed right-0 top-0 z-50 transition-all"
				ref={cartRef}
			>
				<div className="h-screen  w-11/12 md:w-8/12 lg:w-[600px] bg-whitePrimary relative float-right py-10 px-3 ">
					<button type="button" className="" onClick={() => setShowCart(false)}>
						<AiOutlineLeftCircle />
						<span>Your Cart</span>
						<span>({totalQuantities})</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
