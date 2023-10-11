import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import './Header.css';

function Header() {
	return (
		<div className='header-container'>
			<Logo />
			<div>
				<Button buttonText='Dave' type={false} />
				<Button buttonText='Login' type={true} />
			</div>
		</div>
	);
}

export default Header;
