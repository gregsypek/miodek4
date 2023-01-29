import React from "react";

const AppWrap = (Component, classNames = null) =>
	function HOC(props) {
		// console.log("🚀 ~ file: AppWrap.js:7 ~ HOC ~ props", props);
		return (
			<div className={`relative ${classNames}`}>
				<Component {...props} />
			</div>
		);
	};

export default AppWrap;
