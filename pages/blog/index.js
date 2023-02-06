import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppWrap from "../../wrapper/AppWrap";

import { client, urlFor } from "../../lib/client";
import Post from "../../components/Post";


function Blog({posts}) {
	return (
		<>
			<section id="posts" className="container mx-auto px-7 mt-44">
				<h3 className="text-base uppercase text-orangePrimary text-left pb-5 pl-2 md:pl-12">
					Last Posts
				</h3>
				<ul className="posts__container flex flex-wrap gap-7 justify-center text-graySecondary">
				{posts?.map(post=>(
					<Post data={post}/>
				))}
				
		
				</ul>
			</section>
		</>
	);
}

export const getServerSideProps = async () => {

	const postsQuery = '*[_type == "post"]';

	const posts = await client.fetch(postsQuery);

	return {
		props: {  posts },
	};
};

// export default blog;

export default AppWrap(Blog, "blog");
