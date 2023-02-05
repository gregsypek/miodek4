import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

import {
	AiOutlineLeftCircle,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Link from "next/link";

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, setShowCart,toggleCartItemQuantity,onRemove } =
	
		useStateContext();
	return (
		<>
			<div
				className="w-screen bg-gradientRGBA fixed right-0 top-0 z-50 transition-all"
				ref={cartRef}
			>
				<div className="h-screen w-11/12 md:w-8/12 lg:w-[600px] bg-whitePrimary relative float-right py-10 px-6 ">
					<div className="flex gap-4 items-center">
						<button
							type="button"
							className=""
							onClick={() => setShowCart(false)}
						>
							<AiOutlineLeftCircle color="#828282" size="2em" />
						</button>
						<span className="text-base  text-orangePrimary">Your Cart</span>
						<span className="text-base lowercase text-orangeSecondary">
							({totalQuantities}) {totalQuantities > 1 ? "items" : "item"}
						</span>
					</div>
					<div className="cart__top mt-20">
						{cartItems.length < 1 && (
							<div className="flex flex-col items-center w-full flex-1 gap-4">
								<AiOutlineShopping size={150} />
								<h3>Your shopping bag is empty</h3>
								<Link href="/offer" className="mt-20">
									<button
										type="button"
										onClick={() => setShowCart(false)}
										className="	py-2 px-7 text-white relative bg-orangeTertiary rounded-full hover:bg-orangeSecondary hover:cursor-pointer uppercase "
									>
										Continue Shopping
									</button>
								</Link>
							</div>
						)}
						{console.log(
							"🚀 ~ file: Cart.jsx:55 ~ Cart ~ cartItems",
							cartItems
						)}
						{cartItems.length >= 1 &&
							cartItems.map((item) => (
								<>
									<div className="cart__middle flex flex-col px-12 md:px-0 md:flex-row gap-4 md:gap-12 mt-16 md:mt-8">
										<div
											className="bg-gray-300 py-4 px-6  rounded-[25px] grid place-items-center max-w-[150px] md:max-w-[200px] border p-2 border-orangeTertiary"
											key={item._id}
										>
										{ console.log("🚀 ~ file: Cart.jsx:61 ~ Cart ~ item", item)}
											<img
												src={urlFor(item?.image[0])}
												className="cart-product-image"
												alt={item?.name}
											/>
										</div>

										<div className="flex flex-col gap-2 md:gap-8  md:justify-evenly flex-1">
											<div className="flex justify-between">
												<h5 className="text-base uppercase text-orangePrimary">
													{item.name}
												</h5>
												<h4 className="text-xl text-graySecondary">
													${item.price}
												</h4>
											</div>
											<div className="flex justify-between items-center">
												<div
													className="offer__squares flex items-center  border-2
													border-graySecondary
													rounded-sm h-10 "
												>
													<span
														className=" border-r-2 
													border-graySecondary w-10 h-full flex justify-center items-center hover:cursor-pointer hover:bg-red-200
												"
														onClick={()=>toggleCartItemQuantity(item._id, 'dec')}
													>
														<AiOutlineMinus color="red" size="1.3em" />
													</span>
													<span
														className=" border-r-2 w-10 h-full
													border-graySecondary
													rounded-sm flex justify-center items-center text-xl text-graySecondary  hover:bg-whitePrimary"
													>
														{item.quantity}
													</span>
													<span
														className="w-10 h-full flex justify-center items-center hover:cursor-pointer hover:bg-green-200"
														onClick={()=>toggleCartItemQuantity(item._id, 'inc')}
													>
														<AiOutlinePlus color="green" size="1.3em" />
													</span>
												</div>
												<button
													type="button"
													className="remove-item flex"
													onClick={()=>onRemove(item)}
												>
													<TiDeleteOutline
														color="#991b1b"
														size="2em"
														className="hover:cursor-pointer hover:fill-red-900 "
													/>
												</button>
											</div>
										</div>
									</div>
								</>
							))}
						{cartItems.length >= 1 && (
							<div className="cart__bottom mt-24  flex flex-col gap-12 px-12 md:px-0">
								<div className="flex justify-between">
									<p className="text-xl font-bold uppercase text-orangePrimary ">
										Subtotal
									</p>
									<p className="text-2xl font-bold text-graySecondary">${totalPrice}</p>
								</div>
								<button
									type="button"
									onClick={() => setShowCart(false)}
									className="	self-center py-2 px-7 text-white relative bg-orangeTertiary rounded-full hover:bg-orangeSecondary hover:cursor-pointer uppercase "
								>
									Pay with stripe
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
