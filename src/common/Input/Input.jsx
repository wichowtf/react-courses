import React from 'react';

function Input(props) {
	return (
		<input
			id={props.id}
			type={props.type ? props.type : 'text'}
			placeholder={props.placeholder}
			value={props.val}
			onChange={props.handleChange}
		/>
	);
}

export default Input;
