
function next_number(s0) {
	return (s0 + "").split("").map(x => x * x).reduce((x, y) => x + y);
}

function is_happy(s0) {
	let past = [];

	(function iter(s0) {
		console.log(s0);
		past.push(s0);
		s0 = next_number(s0);
		if (past.indexOf(s0) >= 0) return false;
		if (s0 === 1) return true; else iter(s0);
	})(s0);

}

is_happy(7);