import React from 'react';
import './Button.css';

const Button = ({onClick}) => {
	return (
		<div className="btn" onClick={onClick}>
			Should I listen to Zeppelin?
		</div>
	);
}

export default Button;