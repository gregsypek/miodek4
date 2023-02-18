import Image from "next/image";
import { client, urlFor } from "../../lib/client";

import Link from "next/link";
import React, { useState } from "react";
import AppWrap from "../../wrapper/AppWrap";
import { PortableText } from "@portabletext/react";
import LastPostMini from "../../components/LastPostMini";

const PostDetails = ({ post, posts }) => {
	const [showMore, setshowMore] = useState(false);
	const address = "url('/about/about-gradient2.svg')";
	return (
		<>
			<section
				id="post"
				className={`md:container mx-auto  mt-44 flex  relative justify-between before:content-[${address}]`}
			>
				<div className="selected-post w-full lg:w-7/12 ">
					<h3 className="text-base uppercase text-orangePrimary text-left pb-5 px-7">
						{post.title}
					</h3>
					<div className="post__container flex gap-7 justify-between text-graySecondary mx-7 ">
						<div
							className="post bg-whiteSecondary border-2 
						border-orangeTertiary rounded-md items-center   flex flex-col justify-between 
						gap-7 shadow-md  lg:min-h-[850px] lg:w-[677px]"
						>
							<img
								src={`${
									post.mainImage
										? urlFor(post?.mainImage)
												.width(677)
												.height(306)
												.fit("max")
												.auto("format")
										: "/no-image.png"
								}`}
								alt={post.title || " "}
								className="w-full  max-h-80 object-contain"
							/>
							<p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
								{post.title}
							</p>
							<div className="post__content py-7 flex flex-col gap-7 px-7 items-start w-full">
								<p className="post__date">
									{new Date(post?.publishedAt).toLocaleDateString("en-GB", {
										weekday: "long",
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</p>
								{/* <h4 className="font-bold self-start">Magni</h4> */}

								<PortableText
									value={post.body}
									className="post__text  self-start"
								/>

								<Link
									href="/blog"
									className=" py-1 px-5 text-graySecondary bg-whiteSecondary rounded-full  hover:bg-whitePrimary uppercase text-base border self-start border-graySecondary shadow-md"
								>
									Go Back
								</Link>
							</div>
						</div>
					</div>
				</div>
				<aside className="last-posts hidden lg:block lg:w-5/12 px-4">
					<div className="text-base uppercase text-orangePrimary  flex justify-between text-left pb-5  max-h-[750px] ">
						<button
							className="hover:cursor-pointer uppercase"
							onClick={() => setshowMore(false)}
						>
							3 Last Posts
						</button>{" "}
						<button
							className="uppercase hover:cursor-pointer"
							onClick={() => setshowMore(true)}
						>
							more...
						</button>
					</div>
					<div className="last-posts__slider overflow-y-scroll py-7 max-h-[800px] overflow-x-hidden ">
						<ul className="last-posts__list flex flex-col gap-7  ">
							{showMore
								? posts.length &&
								  posts.map((post) => <LastPostMini post={post} key={post.title} />)
								: posts.length &&
								  posts.slice(0, 3).map((post) => <LastPostMini post={post} key={post.title}/>)}
						</ul>
					</div>
					<Image
						className="blog__jar self-center  -z-[1] mt-36"
						src="/JAR-FLOWERS.png"
						width={378}
						height={357}
						alt="jar with flowers honey"
					></Image>
				</aside>
			</section>
		</>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "post"] {
    slug {
      current
    }
  }
  `;

	const posts = await client.fetch(query);

	const paths = posts.map((post) => ({
		params: {
			slug: post.slug.current,
		},
	}));
	console.log("🚀 ~ file: [slug-post].js:138 ~ paths ~ paths", paths);

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
	const postsQuery = `*[_type == "post" && publishedAt < now()] | order(publishedAt desc){
		title,  slug, mainImage,  publishedAt, body 
	 
	}`;

	const post = await client.fetch(query);

	const posts = await client.fetch(postsQuery);

	return {
		props: { posts, post },
	};
};

export default AppWrap(PostDetails, "blog");
