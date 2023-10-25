// store/index.js

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

/* import { configureStore } from '@reduxjs/toolkit'; */

import rootReducer from './rootReducer';
import { coursesInitialState } from './courses/reducer.js';

const appInitialState = {
	courses: coursesInitialState,
};
const store = createStore(
	rootReducer,
	/* appInitialState, */ applyMiddleware(thunk)
);
/* const store = configureStore({ reducer: rootReducer }); */

export default store;
