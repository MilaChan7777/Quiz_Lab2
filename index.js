//const studentGrades = [100, 50, 65, 70, 85, 96, 45];
//const result = computeGrades(studentGrades);
//console.log(result);

function computeGrades(studentGrades) {
	let gradesInfo = {
		parsed: 0,
		passed: 0,
		failed: 0,
	};
}

studentGrades.forEach((grade) => {
	if (grade >= 90) {
		if (grade <= 100) {
			gradesInfo.parsed.push('A');
		}
	}
});
