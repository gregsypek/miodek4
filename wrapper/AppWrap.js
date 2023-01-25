import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppWrap = (Component, classNames = null) =>
	function HOC() {
		return (
			<div className={`relative ${classNames}`}>
				<Head>
					<title>Honey_v4</title>
				</Head>
				<header>
					<Navbar />
				</header>
				<main>
					<Component />
				</main>

				<Footer />
			</div>
		);
	};

export default AppWrap;
