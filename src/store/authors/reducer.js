const authors = [];
export function authorsReducer(state = authors, action) {
	switch (action.type) {
		case 'GET_ALL':
			return state;
		default:
			return state;
	}
}
