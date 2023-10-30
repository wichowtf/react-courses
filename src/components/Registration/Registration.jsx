import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import './Registration.css';

function Register() {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const navigate = useNavigate();

	const isButtonDisabled =
		userName === '' ||
		userEmail === '' ||
		userPassword === '' ||
		userPassword.length < 6;

	function handleChangeName(event) {
		setUserName(event.target.value);
	}
	function handleChangeEmail(event) {
		setUserEmail(event.target.value);
	}
	function handleChangePassword(event) {
		setUserPassword(event.target.value);
	}

	async function submitRegister(event) {
		event.preventDefault();
		const newUser = {
			title: userName,
			password: userPassword,
			email: userEmail,
		};

		/* const response = */ await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (res) => {
			// eslint-disable-next-line no-unused-vars
			const result = await res.json();
			navigate('/login', { replace: true });
		});
	}
	return (
		<form onSubmit={submitRegister} className='form-container'>
			<span className='title'>Registration</span>
			<Input
				placeholder='User name'
				handleChange={handleChangeName}
				val={userName}
			/>
			<Input
				placeholder='email'
				type={'email'}
				handleChange={handleChangeEmail}
				val={userEmail}
			/>
			<Input
				placeholder='password'
				type={'password'}
				handleChange={handleChangePassword}
				val={userPassword}
			/>
			<Button
				type={true}
				buttonText='Register'
				style={{ marginTop: '100px' }}
				/* clicHandle={submitRegister} */
				disabled={isButtonDisabled}
			/>
			<Link style={{ marginTop: '10px' }} to={'/login'}>
				Login
			</Link>
		</form>
	);
}

export default Register;
