import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import { PortableText } from "@portabletext/react";

const Post = ({ data }) => {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	const { title, mainImage, body, publishedAt } = data;
	// console.log('data',data);
	return (
		<li
			className="post bg-whiteSecondary border-2 p-[2%]
    border-orangeTertiary rounded-md items-center py-7 flex flex-col
    gap-7 shadow-md justify-start"
		>
			{/* {console.log('body',body)} */}
			<img
				src={`${
					mainImage
						? urlFor(mainImage).width(320).height(240).fit("max").auto("format")
						: "/no-image.png"
				}`}
				alt={title || " "}
				loading="lazy"
				width={320}
				height={240}
				className="w-[320px] h-[240px] object-contain"
			/>
			<p className="post__title text-orangeTertiary font-bold text tracking-wider">
				{title}
			</p>
			{/* instead of 'en-GB' can be undefined  - detect local timezone  */}
			<p className="post__date">
				{new Date(publishedAt).toLocaleDateString("en-GB", {
					weekday: "long",
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</p>
			<p className="post__text max-w-medium text-center">
				{/* <PortableText 
      value={body} /> */}

				{truncate(body[0].children[0].text, 150)}
			</p>

			<Link
				href={`/blog/${data?.slug?.current}`}
				className=" py-1 px-5 text-graySecondary bg-whitePrimary rounded-full  hover:bg-whitePrimary uppercase text-base border  border-graySecondary shadow-md  mt-auto"
			>
				Read more
			</Link>
		</li>
	);
};

export default Post;
