import Image from "next/image";
import Link from "next/link";
import AboutCarousel from "../components/AboutCarousel";
import AppWrap from "../wrapper/AppWrap";
import { client, urlFor } from "../lib/client";


const About = ({gallery}) => {
	return (
		<>
			{/* Intro section */}
			<section
				id="about-us"
				className=" container px-7 mx-auto flex gap-10 flex-col items-center lg:flex-row pt-44"
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
					<p className="text-base text-brownPrimary text-center xl:text-left  leading-7 p-10 ">
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
			<AboutCarousel gallery={gallery}/>

			<section className="the-movie container px-7 mx-auto  pt-60 flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-14">
				<div className="the-movie__screen self-end order-2 md:order-1 lg:w-[120%] xl:w-7/12">
					<Image
						src="/about/movie.png"
						width={627}
						height={354}
						className="the-movie__img "
					></Image>
				</div>
				<div className="the-movie__info flex flex-col order-1 md:order-2 gap-7 w-3/4 pl-1 xl:w-5/12 xl:h-full ">
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
							className="py-2 px-7 text-white relative bg-orangeTertiary rounded-full hover:bg-orangeSecondary hover:cursor-pointer uppercase self-start"
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
						className="hidden lg:block w-4/5"
					></Image>
				</div>
				<div className="here__map bg-whiteSecondary  border-2 p-[15px] pt-[30px] border-orangeQuaternary rounded-xl w-full md:w-2/3 shadow-md">
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
export const getServerSideProps = async () => {
	const query = '*[_type == "gallery"]';

	const gallery = await client.fetch(query);

	return {
		props: { gallery },
	};
}

export default AppWrap(About, "about");
