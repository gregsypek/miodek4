import React from "react";
import { urlFor } from "../lib/client";

const Testimonial = ({ data }, i) => {
	const { image, name, review } = data;
	return (
		<div
			className="testimonials__card  flex flex-col items-center p-6 space-y-6 rounded-lg lg:w-1/3 border-2 border-orangeTertiary shadow-md max-w-[350px] bg-whiteSecondary"
			key={i}
		>
			<img
				src={urlFor(image)}
				width={100}
				height={100}
				alt={name}
				className=" -mt-14 rounded-full"
			/>
			<h5 className="text-lg font-bold text-orangeTertiary uppercase">
				{name}
			</h5>
			<p className="text-sm text-grayPrimary text-center ">{review}</p>
		</div>
	);
};

export default Testimonial;
