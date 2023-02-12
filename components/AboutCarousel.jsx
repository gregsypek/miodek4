import React, { useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

import {  urlFor } from "../lib/client";

const AboutCarousel = ({ gallery }) => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<section className=" container mx-auto mt-44">	
			{gallery.length && (
				<>
			
					<div className="flex  justify-between md:justify-evenly content-center h-[500px] lg:h-[700px] w-full relative md:static ">
					
						<div
							className="my-auto md:w-1/12 absolute top-1/2 left-0 z-10  md:static "
							onClick={() =>
								handleClick(
									currentIndex === 0 ? gallery.length - 1 : currentIndex - 1
								)
							}
						>
							<AiOutlineLeftCircle
								className="hover:cursor-pointer hover:bg-whitePrimary rounded-full"
								color="#AC5A27"
								size="50px"
							/>
						</div>
						<div className="flex flex-col justify-center relative bg-white border-2 p-[2%] border-orangeQuaternary rounded-md  w-full md:w-10/12">	
						<h3 className="text-base uppercase text-orangePrimary text-center p-1  md:px-7">
				See our work
			</h3>			
							<img
								src={urlFor(gallery[currentIndex].imgurl)							
									.fit("max")
									.auto("format")}
								alt={gallery[currentIndex].name}
								className="h-full w-full object-cover"
							/>
									<h3 className="text-base uppercase text-orangePrimary text-left  ">
									{gallery[currentIndex].name}
						</h3>						
						</div>
						<div
							className="my-auto flex justify-end md:w-1/12 absolute top-1/2 right-0 z-10  md:static"
							onClick={() =>
								handleClick(
									currentIndex === gallery.length - 1 ? 0 : currentIndex + 1
								)
							}
						>
							<AiOutlineRightCircle
								className="hover:cursor-pointer hover:bg-whitePrimary rounded-full"
								color="#AC5A27"
								size="50px"
							/>
						</div>
					</div>
					<div className="app__testimonial-btns app__flex"></div>
				</>
			)}
		</section>
	);
};

export default AboutCarousel;
