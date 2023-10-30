export async function getAllCourses() {
	await fetch('http://localhost:4000/login', {
		method: 'GET',
		body: JSON.stringify({}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(async (res) => {
		const result = await res.json();
	});
}
