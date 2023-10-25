import React, { useEffect, useMemo, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';

import './Courses.css';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCoursesAction } from '../../store/courses/actions';

function Courses() {
	var coursesListArray = useSelector((state) => state.courses);
	const dispatch = useDispatch();
	const [filteredArray, setFilteredArray] = React.useState([
		...coursesListArray,
	]);

	const [actionFired, setActionFired] = useState(false);
	console.log('create render', actionFired);

	useEffect(() => {
		setFilteredArray([...coursesListArray]);
	}, [coursesListArray]);

	useEffect(() => {
		if (!actionFired) {
			setActionFired(true);
			dispatch(getAllCoursesAction());
		}
	}, [dispatch, actionFired]);

	console.log('create render');

	/* const coursesListArray = useSelector((state) => state.courses);
	const dispatch = useDispatch();
	console.log('create render');

	const filteredArray = React.useMemo(() => {
		if (coursesListArray) {
			return coursesListArray.slice();
		}
		return [];
	}, [coursesListArray]);

	useEffect(() => {
		dispatch(getAllCoursesAction());
	}, [dispatch]); */

	function filterCourses(search) {
		if (search !== '') {
			let aux = filteredArray.filter(
				(course) =>
					course.title.toLowerCase().includes(search.toLowerCase()) ||
					course.id === search
			);
			setFilteredArray([...aux]);
		} else {
			setFilteredArray([...coursesListArray]);
		}
	}

	return (
		<div className='courses-container'>
			<div className='search-bar2'>
				<SearchBar emmitSearch={filterCourses} />
				<CreateCourse />
			</div>
			<div className='couses-list'>
				{filteredArray.map((course, index) => {
					return (
						<CourseCard
							key={course.id}
							id={course.id}
							title={course.title}
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
