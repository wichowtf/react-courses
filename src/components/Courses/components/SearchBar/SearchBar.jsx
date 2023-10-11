import React from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';

function SearchBar(props) {
	function searchCourse() {
		let search = document.getElementById('input').value;
		props.emmitSearch(search);
	}
	return (
		<div className='search-bar'>
			<Input id='input' placeholder='Enter course name...' />
			<Button buttonText='Search' type={true} clicHandle={searchCourse} />
		</div>
	);
}

export default SearchBar;
