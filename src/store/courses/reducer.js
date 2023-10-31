import * as types from './types.js';

export const coursesInitialState = [];

// Use the initialState as a default value
export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case types.SAVE_COURSES:
			return action.payload;

		case types.ADD_COURSE:
			return [...state, action.payload];

		case types.DELETE_COURSE:
			const courseIdToRemove = action.payload;
			const updatedCourses = state.filter(
				(course) => course.id !== courseIdToRemove
			);
			return updatedCourses;

		case 'GET_ALL_COURSES':
			return state;

		case 'FETCH_DATA_SUCCESS':
			return [/* ...state, */ ...action.payload.result];

		case 'UPLOAD_SUCCESS':
			const updatedArray = state.map((item) => {
				if (item.id === action.payload.id) {
					// Reemplaza el objeto con el nuevo objeto
					return action.payload;
				}
				return item;
			});
			return updatedArray;

		case 'DELETE_COURSE':
			return state.filter((item) => item.id !== action.payload.id);

		default:
			return state;
	}
};
