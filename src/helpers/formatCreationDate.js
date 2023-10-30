function creationDateFormat(date) {
	const [day, month, year] = date.split('/');
	const dateObject = new Date(year, month - 1, day);

	const dia = dateObject.getDate().toString().padStart(2, '0');
	const mes = (dateObject.getMonth() + 1).toString().padStart(2, '0');
	const año = dateObject.getFullYear();

	return `${dia}.${mes}.${año}`;
}

export default creationDateFormat;
