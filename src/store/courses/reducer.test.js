import { coursesReducer, coursesInitialState } from './reducer'; // Reemplaza 'reducerFileName' con el nombre de tu archivo de reducer
import * as types from './types.js';

describe('coursesReducer', () => {
	test('should return the initial state', () => {
		const initialState = coursesReducer(undefined, {});
		expect(initialState).toEqual(coursesInitialState);
	});

	test('should handle SAVE_COURSES and return new state', () => {
		const previousState = [{ id: 1, title: 'Course 1' }];
		const action = {
			type: types.SAVE_COURSES,
			payload: [{ id: 2, title: 'Course 2' }],
		};
		const newState = coursesReducer(previousState, action);
		expect(newState).toEqual(action.payload);
	});

	// Add more tests for other cases (e.g., ADD_COURSE, DELETE_COURSE, etc.)
});
