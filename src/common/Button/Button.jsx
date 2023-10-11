import React from 'react';

import './Button.css';

function Button(props) {
	return (
		<button
			className={props.type ? 'purple-btn' : 'white-btn'}
			onClick={props.clicHandle}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
