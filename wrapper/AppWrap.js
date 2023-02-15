import React from "react";
import styles from '../styles/gradients.module.css'



const AppWrap = (Component, classNames = null) =>
	function HOC(props) {
		// console.log("🚀 ~ file: AppWrap.js:7 ~ HOC ~ props", props);
		return (
			<div className={`relative ${classNames} ${styles.hero}` }>
				<Component {...props} />
			</div>
		);
	};

export default AppWrap;
