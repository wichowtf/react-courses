import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import './Header.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Header() {
	const navigate = useNavigate();
	const token = useSelector((state) => state.user.token);

	async function handleLogout() {
		localStorage.removeItem('token');
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		}).then((res) => {
			console.log(res);
		});
		navigate('/login');
	}
	return (
		<div className='header-container'>
			{/* <React.Fragment data-testid='logo'> */}
			<Logo />
			{/* </React.Fragment> */}
			<div>
				<Button buttonText='Dave' type={false} />
				<Button buttonText='Logout' clicHandle={handleLogout} type={true} />
			</div>
		</div>
	);
}

export default Header;
