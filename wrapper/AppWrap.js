import React from "react";
import styles from '../styles/gradients.module.css'



const AppWrap = (Component, classNames = null) =>
	function HOC(props) {
	
		return (
			<div className={`relative ${classNames} ${styles[classNames]}` }>
				<Component {...props} />
			</div>
		);
	};

export default AppWrap;
