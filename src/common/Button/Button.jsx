import React from 'react';

import './Button.css';

function Button(props) {
	return (
		<button
			className={props.type ? 'purple-btn' : 'white-btn'}
			onClick={props.clicHandle}
			disabled={props.disabled}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
