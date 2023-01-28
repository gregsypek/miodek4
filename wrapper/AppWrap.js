import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppWrap = (Component, classNames = null) =>
	function HOC() {
		return (
			<div className={`relative ${classNames}`}>
				<Component />
			</div>
		);
	};

export default AppWrap;
