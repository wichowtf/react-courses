import React, { useEffect } from 'react';
/* import { useState } from 'react'; */

import SearchBar from './components/SearchBar/SearchBar';
/* import Button from '../../common/Button/Button'; */
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';

import './Courses.css';
import { /* useDispatch, */ useSelector } from 'react-redux';

/* import { getAllCoursesAction } from '../../store/courses/actions'; */

/* import { coursesListArray } from '../../constants'; */

function Courses() {
	const coursesListArray = useSelector((state) => state.courses);
	/* console.log(coursesListArray); */
	/* const dispatch = useDispatch(); */
	const [filteredArray, setFilteredArray] = React.useState([
		...coursesListArray,
	]);
	useEffect(() => {
		setFilteredArray([...coursesListArray]);
	}, [coursesListArray]);

	/* useEffect(() => {
		dispatch(getAllCoursesAction());
	}, []); */

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

	/* function updateCourses(course) {
		coursesListArray.push(course);
		setFilteredArray([...coursesListArray]);
		console.log('update filter', coursesListArray);
		console.log(course);
	} */
	return (
		<div className='courses-container'>
			<div className='search-bar2'>
				<SearchBar emmitSearch={filterCourses} />
				<CreateCourse /* updateCourses={updateCourses} */ />
			</div>
			<div className='couses-list'>
				{filteredArray.map((course, index) => {
					return (
						<CourseCard
							key={course.id}
							id={course.id}
							name={course.name}
							description={course.description}
							authors={course.authors}
							created={course.created}
							duration={course.duration}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
