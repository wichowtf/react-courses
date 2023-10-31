import React, { useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import CreateCourse from '../CreateCourse/CreateCourse';

import './Courses.css';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCoursesAction } from '../../store/courses/actions';
import { getAllAuthors } from '../../store/authors/actions';

function Courses() {
	var coursesListArray = useSelector((state) => state.courses);
	const currentUser = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [filteredArray, setFilteredArray] = React.useState([
		...coursesListArray,
	]);

	useEffect(() => {
		setFilteredArray([...coursesListArray]);
	}, [coursesListArray]);

	useEffect(() => {
		dispatch(getAllCoursesAction());
		dispatch(getAllAuthors());
		/* initView(); */
	}, [dispatch]);

	/* function initView() {
		dispatch(getAllCoursesAction());
		dispatch(getAllAuthors());
	} */

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
				{currentUser.user.email === 'admin@email.com' ? (
					<CreateCourse />
				) : (
					<div></div>
				)}
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
							created={course.creationDate}
							duration={course.duration}
							index={index}
							user={currentUser.user.email === 'admin@email.com'}
							token={currentUser.token}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;
