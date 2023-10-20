import React from 'react';

import Button from '../../../../common/Button/Button';

import formatDuration from '../../../../helpers/getCourseDuration.js';
import creationDateFormat from '../../../../helpers/formatCreationDate.js';

import './CoursesCard.css';
import { useNavigate } from 'react-router';

function CourseCard({ name, description, duration, created, authors, id }) {
	const navigate = useNavigate();
	function goToCourse() {
		navigate('/courses/' + id);
		console.log('entra redirect');
	}
	return (
		<div className='card-container'>
			<div className='card-name-section'>
				<p className='course-name'>{name}</p>
				<p className='course-description'>{description}</p>
			</div>
			<div className='card-details'>
				<p>
					<strong>Authors: </strong>
					{authors.join(', ')}
				</p>
				<p>
					<strong>Duration: </strong>
					{formatDuration(duration)} min
				</p>
				<p>
					<strong>Created: </strong>
					{creationDateFormat(created)}
				</p>
				<div className='card-button'>
					<Button
						type={true}
						buttonText='Show course'
						clicHandle={goToCourse}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
