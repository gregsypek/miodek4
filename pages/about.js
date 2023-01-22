import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<>
			{/* Intro section */}
			<section
				id="about-us"
				className=" container px-7 mx-auto mt-20 flex gap-10 flex-col items-center lg:flex-row "
			>
				<div className="about-us__picture w-full lg:w-1/2 ">
					<h3 className="text-base uppercase text-orangePrimary text-left pl-10">
						About us
					</h3>
					<Image
						src="/about/About-us.png"
						width={512}
						height={453}
						className="pl-[40px]"
					></Image>
				</div>
				<div className="about-us__text  w-full flex justify-center lg:w-1/2 max-w-readable ">
					<p className="text-base text-graySecondary text-center xl:text-left  leading-7 p-10 ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						temporibus impedit facilis adipisci, veritatis eligendi vero id?
						Sequi qui possimus pariatur. Quibusdam eos consequatur in quisquam
						libero officia eum necessitatibus incidunt deserunt pariatur, odio
						facilis quaerat repellendus porro nemo rem debitis nisi sapiente
						dolor. Magni adipisci asperiores vitae dolore ipsa veritatis,
						voluptas in ratione eius omnis ad
					</p>
				</div>
			</section>
			<section className="our-work container px-7 mx-auto  mt-44 ">
				{/* <h3 className="text-base uppercase text-orangePrimary text-left ">
					See our work
				</h3> */}
				<ul className="cards container flex flex-wrap gap-8 flex-col md:flex-row items-center md:justify-center ">
					<li className="card bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md w-full md:w-5/12">
						<h3 className="text-base uppercase text-orangePrimary text-left  ">
							See our work
						</h3>
						<Image
							src="/about/img1.jpg"
							width={420}
							height={307}
							className="bg-center object-cover h-96 w-full"
						></Image>
					</li>
					<li className="card bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md w-full md:w-5/12">
						<h3 className="text-base uppercase text-orangePrimary text-left ">
							&nbsp;
						</h3>
						<Image
							src="/about/img2.jpg"
							width={420}
							height={307}
							className="bg-center object-cover h-96 w-full"
						></Image>
					</li>
					<li className="card bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md w-full md:w-5/12">
						<h3 className="text-base uppercase text-orangePrimary text-left ">
							&nbsp;
						</h3>
						<Image
							src="/about/img3.jpg"
							width={420}
							height={307}
							className="bg-center object-cover h-96 w-full"
						></Image>
					</li>
					<li className="card bg-whiteSecondary  border-2 p-[2%] border-orangeTertiary rounded-md w-full md:w-5/12">
						<h3 className="text-base uppercase text-orangePrimary text-left ">
							&nbsp;
						</h3>
						<Image
							src="/about/img4.jpg"
							width={420}
							height={307}
							className="bg-center object-cover h-96 w-full"
						></Image>
					</li>
				</ul>
			</section>
			<section className="the-movie container px-7 mx-auto  mt-44 flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-14">
				<div className="the-movie__screen self-end order-2 md:order-1 lg:w-[120%] xl:w-7/12">
					<Image
						src="/about/movie.png"
						width={627}
						height={354}
						className="  the-movie__img "
					></Image>
				</div>
				<div className="the-movie__info flex flex-col order-1 md:order-2 gap-7 w-3/4 pl-1 xl:w-5/12 xl:h-full">
					<div className="the-movie__text flex flex-col gap-7 flex-shrink-0 lg:self-left ">
						<h3 className="text-base uppercase text-orangePrimary self-start   ">
							Watch the film
						</h3>
						<p className="text-left text-graySecondary  max-w-small flex-1 self-start">
							We never heat or filter our honey, which means it retains all of
							its natural enzymes and antioxidants. This makes it not only
							delicious, but also nutritious!
						</p>
						<Link
							href="/"
							className=" py-2 px-7 text-white bg-orangeTertiary rounded-full  hover:bg-orangeSecondary uppercase text-base self-start shadow-md"
						>
							Shop now
						</Link>
					</div>
				</div>
			</section>
			<section
				id="here"
				className="container px-7 mx-auto flex flex-row justify-between mt-44 "
			>
				<div className="here__jar self-end pb-8 flex-1">
					<Image
						src="/JAR-STRAWBERRY.png"
						width={363}
						height={344}
						className="hidden md:block w-3/5"
					></Image>
				</div>
				<div className="here__map bg-whiteSecondary  border-2 p-[15px] pt-[30px] border-orangeTertiary rounded-xl w-full md:w-2/3 shadow-md">
					<h3 className="text-base uppercase text-orangePrimary self-start   py-2">
						We are here
					</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36091.741337392035!2d19.969637754797713!3d50.06983901804432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716451be258d0e9%3A0x20dc010f89ef18eb!2zxYHEhWtpIE5vd29odWNraWU!5e0!3m2!1spl!2spl!4v1591547613375!5m2!1spl!2spl"
						allowfullscreen=""
						aria-hidden="false"
						tabindex="0"
						class="here__iframe w-full h-[500px]"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default About;
