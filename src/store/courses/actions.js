// actions.js

import * as types from './types.js';

export const addCourseAction = (payload) => ({
	type: types.ADD_COURSE,
	payload,
});
/* const deleteCourseAction = (payload) => ({
	type: types.DELETE_COURSE,
	payload,
});
const saveCoursesAction = (payload) => ({ type: types.SAVE_COURSES, payload }); */
