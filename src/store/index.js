// store/index.js

import { createStore } from 'redux';

/* import { configureStore } from '@reduxjs/toolkit'; */

import rootReducer from './rootReducer';
import { coursesInitialState } from './courses/reducer.js';

const appInitialState = {
	courses: coursesInitialState,
};
const store = createStore(rootReducer, appInitialState);
/* const store = configureStore({ reducer: rootReducer }); */

export default store;
