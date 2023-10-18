import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import './Header.css';
import { useNavigate } from 'react-router';

function Header() {
	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem('token');
		navigate('/login');
	}
	return (
		<div className='header-container'>
			<Logo />
			<div>
				<Button buttonText='Dave' type={false} />
				<Button buttonText='Logout' clicHandle={handleLogout} type={true} />
			</div>
		</div>
	);
}

export default Header;
