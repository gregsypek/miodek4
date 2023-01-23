import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
	return (
		// <div className="layout">
		<div className="">
			{/* <div className="layout bg-auto bg-no-repeat bg-right bg-whitePrimary 	bg-[url('/hero-gradient.png')]"> */}
			<Head>
				<title>Honey_v4</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Layout;
