import React from 'react';

import Button from '../../../../common/Button/Button';

import formatDuration from '../../../../helpers/getCourseDuration.js';
import creationDateFormat from '../../../../helpers/formatCreationDate.js';

import { deleteCourseAction } from '../../../../store/courses/actions';

import './CoursesCard.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

function CourseCard({
	title,
	description,
	duration,
	created,
	authors,
	id,
	index,
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function goToCourse() {
		navigate('/courses/' + id);
	}

	function deleteCourse() {
		dispatch(deleteCourseAction(id));
	}
	return (
		<div className='card-container'>
			<div className='card-name-section'>
				<p className='course-name'>{title}</p>
				<p className='course-description'>{description}</p>
			</div>
			<div className='card-details'>
				<p>
					<strong>Authors: </strong>
					{authors.join(', ')}
				</p>
				<p>
					<strong>Duration: </strong>
					{formatDuration(duration)} hrs
				</p>
				<p>
					<strong>Created: </strong>
					{/* {creationDateFormat(created)} */}
				</p>
				<div className='card-button'>
					<Button
						type={true}
						buttonText='Show course'
						clicHandle={goToCourse}
					/>
					<Button type={true} buttonText='Delete' clicHandle={deleteCourse} />
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
