import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './CreateCourse.css';

function CreateCourse(props) {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
	};

	const closeDialog = () => {
		setIsOpen(false);
	};

	function addCourse() {
		let newCourse = {
			id: Math.floor(Math.random() * 10001).toString(),
			name: document.getElementById('course-name').value,
			description: document.getElementById('course-description').value,
			authors: ['anonymuse'],
			duration: +document.getElementById('course-duration').value,
			created: new Date(),
		};
		props.updateCourses(newCourse);
		setIsOpen(false);
	}
	return (
		<div>
			<Button type={true} buttonText='Add Course' clicHandle={openDialog} />
			{isOpen && (
				<div className='dialog'>
					<div className='dialog-content'>
						<span onClick={closeDialog} className='close-button'>
							&times;
						</span>
						<h2>Create Course</h2>
						{/* <p>Contenido del diálogo...</p> */}
						<Input
							className='input'
							id='course-name'
							placeholder='Enter course name...'
						/>
						<Input
							className='input'
							id='course-description'
							placeholder='Enter course description...'
						/>
						<Input
							className='input'
							id='course-duration'
							placeholder='Enter course duration in mins...'
						/>
						<Button type={true} buttonText='Accept' clicHandle={addCourse} />
					</div>
				</div>
			)}
		</div>
	);
}

export default CreateCourse;
