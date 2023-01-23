import Image from "next/image";
import Link from "next/link";
import React from "react";

function blog() {
	return (
		<>
			<section id="posts" className="container mx-auto px-7 mt-44">
				<h3 className="text-base uppercase text-orangePrimary text-left pb-5 pl-2 md:pl-12">
					Last Posts
				</h3>
				<ul className="posts__container flex flex-wrap gap-7 justify-center text-graySecondary">
					<Link
						href="/"
						className="post bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md items-center py-7 flex flex-col gap-7 shadow-md"
					>
						<Image src="/posts/post1.png" width={351} height={262}></Image>
						<h4 className="post__title text-orangeTertiary font-bold text tracking-wider">
							We have spring now!
						</h4>
						<p className="post__date">21 March 2023</p>
						<p className="post__text max-w-medium text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							autem, ducimus a ab inventore dolore laborum. Eaque voluptatum ab
							consequuntur...
						</p>
						<Link
							href="/"
							className=" py-1 px-5 text-graySecondary bg-whiteSecondary rounded-full  hover:bg-whitePrimary uppercase text-base border  border-graySecondary shadow-md"
						>
							Read more
						</Link>
					</Link>
					<Link
						href="/"
						className="post bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md items-center py-7 flex flex-col gap-7 shadow-md"
					>
						<Image src="/posts/post2.png" width={351} height={262}></Image>
						<h4 className="post__title text-orangeTertiary font-bold  tracking-wider">
							Delicious Pancakes
						</h4>
						<p className="post__date font-light">05 January 2023</p>
						<p className="post__text max-w-medium text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							autem, ducimus a ab inventore dolore laborum. Eaque voluptatum ab
							consequuntur...
						</p>
						<Link
							href="/"
							className=" py-1 px-5 text-graySecondary bg-whiteSecondary rounded-full  hover:bg-whitePrimary uppercase text-base border  border-graySecondary shadow-md"
						>
							Read more
						</Link>
					</Link>
					<Link
						href="/"
						className="post bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md items-center py-7 flex flex-col gap-7 shadow-md"
					>
						<Image src="/posts/post3.png" width={351} height={262}></Image>
						<h4 className="post__title text-orangeTertiary font-bold text tracking-wider">
							New Flavor
						</h4>
						<p className="post__date">20 September 2022</p>
						<p className="post__text max-w-medium text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							autem, ducimus a ab inventore dolore laborum. Eaque voluptatum ab
							consequuntur...
						</p>
						<Link
							href="/"
							className=" py-1 px-5 text-graySecondary bg-whiteSecondary rounded-full  hover:bg-whitePrimary uppercase text-base border  border-graySecondary shadow-md"
						>
							Read more
						</Link>
					</Link>
				</ul>
			</section>
		</>
	);
}

export default blog;
