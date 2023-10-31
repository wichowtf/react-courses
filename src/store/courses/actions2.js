const getAllCoursesAction = () => {
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

export default getAllCoursesAction;
