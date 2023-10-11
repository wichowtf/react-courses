function creationDateFormat(date) {
	const dia = date.getDate().toString().padStart(2, '0');
	const mes = (date.getMonth() + 1).toString().padStart(2, '0');
	const año = date.getFullYear();

	return `${dia}.${mes}.${año}`;
}

export default creationDateFormat;
