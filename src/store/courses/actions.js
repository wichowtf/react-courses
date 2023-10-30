// actions.js

import * as types from './types.js';

export const getAllCoursesAction = () => {
	/* var payload = null; */
	return async (dispatch) => {
		// Dispara una acción para indicar que la solicitud está en curso
		/* dispatch({ type: types.GET_ALL_COURSES }); */

		// Realiza la solicitud HTTP
		console.log('get all courses');
		await fetch('http://localhost:4000/courses/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async (response) => {
				// Cuando la solicitud es exitosa, actualiza el estado con los datos recibidos
				let aux = await response.json();
				return aux;
			})
			.then((formatData) => {
				if (formatData.successful)
					dispatch({ type: 'FETCH_DATA_SUCCESS', payload: formatData });
			})
			.catch((error) => {
				// En caso de error, maneja el error
				dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
			});
	};
};

export const addCourseAction = (payload) => {
	return async (dispatch) => {
		await fetch('http://localhost:4000/courses/add', {
			method: 'POST',
			body: JSON.stringify(payload.body),
			headers: {
				'Content-Type': 'application/json',
				Authorization: payload.auth,
			},
		})
			.then(async (res) => {
				const aux = await res.json();
				return aux;
			})
			.then((formatData) => {
				if (formatData.successful)
					dispatch({ type: types.ADD_COURSE, payload: formatData.result });
			});
	};
};

/* ({
	type: types.DELETE_COURSE,
	payload,
}) */
export const deleteCourseAction = (payload) => {
	return async (dispatch) => {
		await fetch('http://localhost:4000/courses/' + payload.id, {
			method: 'DELETE',
			/* body: JSON.stringify(payload.body), */
			headers: {
				'Content-Type': 'application/json',
				Authorization: payload.token,
			},
		})
			.then(async (res) => {
				const aux = await res.json();
				return aux;
			})
			.then((formatData) => {
				console.log(formatData);
				if (formatData.successful)
					dispatch({ type: 'DELETE_COURSE', payload: payload.id });
			});
	};
};

export const updateCourseAction = (payload) => {
	return async (dispatch) => {
		fetch('http://localhost:4000/courses/' + payload.id, {
			method: 'PUT',
			body: JSON.stringify(payload.body),
			headers: {
				'Content-Type': 'application/json',
				Authorization: payload.auth,
			},
		})
			.then(async (res) => {
				const result = await res.json();
				return result;
			})
			.then((formatData) => {
				if (formatData.successful) {
					dispatch({ type: 'UPLOAD_SUCCESS', payload: formatData.result });
				}
			});
	};
};
