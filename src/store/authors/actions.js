export function getAllAuthors() {
	return async (dispatch) => {
		await fetch('http://localhost:4000/authors/all')
			.then(async (response) => {
				const data = await response.json();
				return data;
			})
			.then((formatData) => {
				dispatch({ type: 'GET_ALL', payload: formatData });
			});
	};
}
