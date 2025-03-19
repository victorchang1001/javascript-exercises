const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
	return array.reduce((total, curr) => total + curr, 0);
};

const multiply = function (array) {
	return array.reduce((product, curr) => product * curr, 1);
};

const power = function (num, pow) {
	return num ** pow;
};

const factorial = function (num) {
	if (num === 0) return 1;
	let product = 1;
	for (let i = num; i > 0; i--) {
		product *= i;
	}
	return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
