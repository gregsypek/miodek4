import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppWrap from "../../wrapper/AppWrap";

const Post = () => {
	return (
		<>
			<section
				id="post"
				className="container mx-auto px-7 mt-44 flex  justify-between "
			>
				<div className="selected-post w-full lg:w-7/12 ">
					<h3 className="text-base uppercase text-orangePrimary text-left pb-5 ">
						We have spring now!
					</h3>
					<div className="post__container flex gap-7 justify-between text-graySecondary mx-7">
						<div
							className="post bg-whiteSecondary border-2 p-[2%]
						border-orangeTertiary rounded-md items-center py-7 flex flex-col
						gap-7 shadow-md"
						>
							<Image src="/posts/post1.png" width={677} height={306}></Image>
							<p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
								We have spring now!
							</p>
							<div className="post__content py-7 flex flex-col gap-7 px-7">
								<p className="post__date">21 March 2023</p>
								<h4 className="font-bold self-start">Magni</h4>
								<p className="post__text  self-start">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Obcaecati autem, ducimus a ab inventore dolore laborum. Eaque
									voluptatum ab consequuntur...
								</p>
								<h4 className="font-bold self-start">Magni adipisci</h4>
								<p className="post__text self-start">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
									facilis nihil ipsam, nemo iste ea itaque doloremque molestiae!
									Totam, maxime blanditiis! Consequuntur aliquid tempora
									laudantium consequatur necessitatibus maxime eos quibusdam
									pariatur? Consequatur perspiciatis, quo quisquam repellendus
									voluptates facilis cum? Autem, rerum delectus quaerat velit,
									animi, fuga quibusdam pariatur quam est nihil enim? Officia in
									nulla accusantium dicta autem asperiores beatae fugiat
									sapiente. Enim dicta quasi repellendus sunt nesciunt
									praesentium explicabo, quos optio beatae cupiditate, quisquam
									totam maxime facere. Voluptates itaque adipisci corrupti
									reiciendis facere tempora quasi, velit sapiente inventore,
									ipsa autem? Quidem veniam laudantium rerum animi repellat
									itaque ut quasi....
								</p>
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
				<aside className="last-posts hidden lg:block lg:w-4/12">
					<h3 className="text-base uppercase text-orangePrimary text-left pb-5 ">
						Last Posts
					</h3>
					<ul className="last-posts__list flex flex-col gap-7">
						<li
							className="last-posts__item bg-whiteSecondary border-2 p-[2%]
						border-orangeTertiary rounded-xl items-center  shadow-md "
						>
							<Link
								href="/blog/1"
								className=" flex flex-row
						gap-7"
							>
								<Image src="/posts/post1.png" width={140} height={109}></Image>

								<div className="last-posts__info flex flex-col justify-between">
									<p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
										We have spring now!
									</p>
									<p className="post__date text-sm text-graySecondary">
										21 March 2023
									</p>
								</div>
							</Link>
						</li>
						<li
							className="last-posts__item bg-whiteSecondary border-2 p-[2%]
						border-orangeTertiary rounded-xl items-center  shadow-md "
						>
							<Link
								href="/blog/2"
								className=" flex flex-row
						gap-7"
							>
								<Image src="/posts/post2.png" width={140} height={109}></Image>

								<div className="last-posts__info flex flex-col justify-between">
									<p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
										New Flavour{" "}
									</p>
									<p className="post__date text-sm text-graySecondary">
										21 March 2023
									</p>
								</div>
							</Link>
						</li>
						<li
							className="last-posts__item bg-whiteSecondary border-2 p-[2%]
						border-orangeTertiary rounded-xl items-center  shadow-md "
						>
							<Link
								href="/blog/3"
								className=" flex flex-row
						gap-7"
							>
								<Image src="/posts/post3.png" width={140} height={109}></Image>

								<div className="last-posts__info flex flex-col justify-between">
									<p className="post__title text-orangeTertiary font-bold text-lg tracking-wider">
										Delicious Pancakes
									</p>
									<p className="post__date text-sm text-graySecondary">
										21 March 2023
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</aside>
			</section>
		</>
	);
};

export default AppWrap(Post, "blog");
