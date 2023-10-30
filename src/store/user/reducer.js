const currentUser = {
	user: null,
	token: null,
};
export const userReducer = (state = currentUser, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			const newLogin = {
				user: action.payload.user,
				token: action.payload.result,
			};
			return newLogin;

		case 'LOGIN_FAIL':
			return state;

		default:
			return state;
	}
};
