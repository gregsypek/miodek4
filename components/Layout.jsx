import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStateContext } from "../context/StateContext";

function Layout({ children }) {
	const { showCart } = useStateContext();
	return (
		<div>
			<Head>
				<title>Honey_v4</title>
			</Head>
			<header>
				<Navbar />
			</header>
			{/* to hide all elements behind main layout after clicking cart icon*/}
			<main className={`${showCart && "relative -z-10"}`}>{children}</main>

			<Footer />
		</div>
	);
}

export default Layout;
