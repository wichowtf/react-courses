import * as types from './types.js';

export const coursesInitialState = [
	{
		id: '234',
		name: 'Java',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		authors: ['Dave Shapel', 'Jordi Wild'],
		duration: 125,
		created: new Date('2002-12-20'),
	},
	{
		id: '2341',
		name: 'JavaScript',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		authors: ['nacho Amela'],
		duration: 260,
		created: new Date('1999-12-17'),
	},
	{
		id: '2342',
		name: 'Angular',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		authors: ['Luis Arriaga'],
		duration: 200,
		created: new Date('2021-04-23'),
	},
	{
		id: '2343',
		name: 'ASP .NET',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		authors: ['Jordi Wild', 'Blue label'],
		duration: 90,
		created: new Date('2021-04-23'),
	},
];

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

		default:
			return state;
	}
};
