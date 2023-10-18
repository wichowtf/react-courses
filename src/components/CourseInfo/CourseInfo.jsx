import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { coursesListArray } from '../../constants';

import formatDuration from '../../helpers/getCourseDuration.js';
import creationDateFormat from '../../helpers/formatCreationDate.js';

function CourseInfo() {
	const params = useParams();
	const [course, setCourse] = useState({});
	const [renderCourse, setRenderCourse] = useState(false);

	useEffect(() => {
		setCourse(
			coursesListArray.filter((element) => element.id === params.courseId)[0]
		);
		setRenderCourse(true);
	}, [params.courseId, course]);

	return (
		<div className='course-container'>
			<div className='course-desc'>
				<h2>{course.name}</h2>
				<p>{course.description}</p>
			</div>
			{renderCourse && (
				<div className='course-info'>
					<div className='course-id'>{course.id}</div>
					<div className='course-duration'>
						{formatDuration(course.duration)}
					</div>
					<div className='course-created'>
						{creationDateFormat(course.created)}
					</div>
					<div className='course-authors'>{course.authors.join(', ')}</div>
				</div>
			)}
		</div>
	);
}

export default CourseInfo;
