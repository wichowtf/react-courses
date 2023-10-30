export function LoginAction(payload) {
	return async (dispatch) => {
		await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async (res) => {
				const result = await res.json();
				return result;
			})
			.then((formatData) => {
				localStorage.setItem('token', formatData.result);
				dispatch({ type: 'LOGIN_SUCCESS', payload: formatData });
				return formatData;
			})
			.catch((error) => {
				// En caso de error, maneja el error
				dispatch({ type: 'LOGIN_FAIL', error: error.message });
			});
	};
}

export function checkToken(payload) {
	return async (dispatch) => {
		await fetch('http://localhost:4000/users/me/', {
			method: 'GET',
			/* body: JSON.stringify(payload), */
			headers: {
				'Content-Type': 'application/json',
				Authorization: payload,
			},
		})
			.then(async (res) => {
				const result = await res.json();
				return result;
			})
			.then((formatData) => {
				/* localStorage.setItem('token', formatData.result);
				dispatch({ type: 'LOGIN_SUCCESS', payload: formatData });
				return formatData; */
				console.log(formatData);
			})
			.catch((error) => {
				// En caso de error, maneja el error
				dispatch({ type: 'LOGIN_FAIL', error: error.message });
			});
	};
}
