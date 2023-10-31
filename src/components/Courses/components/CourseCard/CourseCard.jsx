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
	created = '17/12/1999',
	authors = [],
	id,
	index,
	user,
	token,
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function goToCourse() {
		navigate('/courses/' + id);
	}

	function updateCourse() {
		navigate('/courses/update/' + id);
	}

	function deleteCourse() {
		let aux = {
			id,
			token,
		};
		dispatch(deleteCourseAction(aux));
	}
	return (
		<div className='card-container' data-testid='course-card'>
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
					{creationDateFormat(created)}
				</p>
				<div className='card-button'>
					<Button
						type={true}
						buttonText='Show course'
						clicHandle={goToCourse}
					/>
					{user ? (
						<div>
							<Button
								type={true}
								buttonText='Delete'
								clicHandle={deleteCourse}
							/>
							<Button
								type={true}
								buttonText='Update'
								clicHandle={updateCourse}
							/>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
