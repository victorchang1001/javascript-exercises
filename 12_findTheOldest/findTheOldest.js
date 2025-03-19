const findTheOldest = function (arr) {
	const currentYear = new Date().getFullYear();
	let ages = arr.map(
		(person) => (person.yearOfDeath ?? currentYear) - person.yearOfBirth
	);
	let indexOfOldest = ages.reduce(
		(maxIdx, currVal, currIdx, arr) =>
			currVal > arr[maxIdx] ? currIdx : maxIdx,
		0
	);
	return arr[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
