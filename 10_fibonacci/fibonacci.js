const fibonacci = function (n) {
	n = parseInt(n);
	if (n < 0) return "OOPS";

	let arr = new Array(n + 1).fill(0); // [0, 1, 1, ...]
	arr[1] = 1;

	for (let i = 2; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
	}

	return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
