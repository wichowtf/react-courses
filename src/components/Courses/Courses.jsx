import React from 'react';
/* import { useState } from 'react'; */

import SearchBar from './components/SearchBar/SearchBar';
/* import Button from '../../common/Button/Button'; */
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';

import './Courses.css';

import { coursesListArray } from '../../constants';

function Courses() {
	const [filteredArray, setFilteredArray] = React.useState([
		...coursesListArray,
	]);

	function filterCourses(search) {
		if (search !== '') {
			let aux = filteredArray.filter(
				(course) =>
					course.name.toLowerCase().includes(search.toLowerCase()) ||
					course.id === search
			);
			setFilteredArray([...aux]);
		} else {
			setFilteredArray([...coursesListArray]);
		}
	}

	function updateCourses(course) {
		coursesListArray.push(course);
		setFilteredArray([...coursesListArray]);
		/* console.log(course); */
	}
	return (
		<div className='courses-container'>
			<div className='search-bar2'>
				<SearchBar emmitSearch={filterCourses} />
				<CreateCourse updateCourses={updateCourses} />
			</div>
			<div className='couses-list'>
				{filteredArray.map((course) => {
					return (
						<CourseCard
							key={course.id}
							id={course.id}
							name={course.name}
							description={course.description}
							authors={course.authors}
							created={course.created}
							duration={course.duration}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
