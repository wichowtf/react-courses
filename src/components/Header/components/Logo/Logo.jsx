import React from 'react';

import './Logo.css';

function Logo() {
	return (
		<img
			src='https://logos-download.com/wp-content/uploads/2019/06/Epam_Systems_Logo.png'
			alt='EPAM logo'
			className='logo-img'
			data-testid='logo'
		/>
	);
}

export default Logo;
