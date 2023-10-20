// actions.js

import * as types from './types.js';

/* export const getAllCoursesAction = async () => {
	var payload = null;
	await fetch('http://localhost:4000/courses/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(async (res) => {
		const result = await res.json();
		console.log(result);
		payload = result;
	});
	return { type: types.GET_ALL_COURSES, payload };
}; */
export const addCourseAction = (payload) => ({
	type: types.ADD_COURSE,
	payload,
});

export const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});
/* const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});
const saveCoursesAction = (payload) => ({ type: types.SAVE_COURSES, payload }); */
