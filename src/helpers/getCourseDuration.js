function formatDuration(min) {
	let duration = '';
	let hours =
		Math.floor(min / 60) < 10
			? '0' + Math.floor(min / 60)
			: Math.floor(min / 60);
	let minutes = min % 60 < 10 ? '0' + (min % 60) : min % 60;
	duration = hours + ':' + minutes;
	return duration;
}

export default formatDuration;
