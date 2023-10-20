import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './CreateCourse.css';
import { useDispatch } from 'react-redux';

import { addCourseAction } from '../../store/courses/actions';

function CreateCourse(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [courseName, setCourseName] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [courseDuration, setCourseDuration] = useState('');

	const dispatch = useDispatch();

	const isButtonDisabled =
		courseName === '' || courseDescription === '' || courseDuration === '';

	const openDialog = () => {
		setIsOpen(true);
	};

	const closeDialog = () => {
		setIsOpen(false);
	};

	function addCourse() {
		let newCourse = {
			id: Math.floor(Math.random() * 10001).toString(),
			name: courseName,
			description: courseDescription,
			authors: ['anonymuse'],
			duration: courseDuration,
			created: new Date(),
		};
		dispatch(addCourseAction(newCourse));
		/* props.updateCourses(); */
		setIsOpen(false);
	}

	function handleChangeName(event) {
		setCourseName(event.target.value);
	}
	function handleChangeDescription(event) {
		setCourseDescription(event.target.value);
	}
	function handleChangeDuration(event) {
		setCourseDuration(event.target.value);
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
							handleChange={handleChangeName}
							val={courseName}
						/>
						<Input
							className='input'
							id='course-description'
							placeholder='Enter course description...'
							handleChange={handleChangeDescription}
							val={courseDescription}
						/>
						<Input
							className='input'
							id='course-duration'
							placeholder='Enter course duration in mins...'
							handleChange={handleChangeDuration}
							val={courseDuration}
							type={'number'}
						/>
						<div
							style={{
								marginTop: '6px',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Button
								type={true}
								buttonText='Accept'
								clicHandle={addCourse}
								disabled={isButtonDisabled}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CreateCourse;
