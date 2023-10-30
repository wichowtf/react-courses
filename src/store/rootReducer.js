import { combineReducers /* , configureStore */ } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer.js'; // reducer that we already have
import { userReducer } from './user/reducer.js';
import { authorsReducer } from './authors/reducer.js';

const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
	authors: authorsReducer,
	//could be extended by another slice of reducer that respond for other part of your app
});

/* const store = configureStore({ reducer: rootReducer }); */

export default rootReducer /* store */;
