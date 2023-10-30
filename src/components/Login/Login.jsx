import React, { useState } from 'react';

import { Link /* , useNavigate */ } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../store/user/actions';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import './Login.css';

function Login() {
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	/* const navigate = useNavigate(); */
	const dispatch = useDispatch();

	const isButtonDisabled =
		userEmail === '' || userPassword === '' || userPassword.length < 6;

	function handleChangeEmail(event) {
		setUserEmail(event.target.value);
	}
	function handleChangePassword(event) {
		setUserPassword(event.target.value);
	}

	/* async function submitLogin() {
		const newUser = {
			password: userPassword,
			email: userEmail,
		};

		await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (res) => {
			const result = await res.json();
			console.log(result);
			localStorage.setItem('token', result.result);
			navigate('/courses', { replace: true });
		});
	} */

	async function handleSubmit(event) {
		event.preventDefault();
		const newUser = {
			password: userPassword,
			email: userEmail,
		};

		/* await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (res) => {
			const result = await res.json();
			localStorage.setItem('token', result.result);
			navigate('/courses', { replace: true });
		}); */

		await dispatch(LoginAction(newUser));

		/* navigate('/courses', { replace: true }); */
	}

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<span className='title'>Login</span>
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
				buttonText='Login'
				style={{ marginTop: '100px' }}
				/* clicHandle={submitLogin} */
				disabled={isButtonDisabled}
			/>
			<Link style={{ marginTop: '10px' }} to={'/registration'}>
				Register
			</Link>
		</form>
	);
}

export default Login;
