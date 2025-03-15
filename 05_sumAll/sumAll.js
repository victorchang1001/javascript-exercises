const sumAll = function (num1, num2) {
    let isInteger = (num) => typeof num === "number" && Math.floor(num) === num;

    if (isInteger(num1) && isInteger(num2) && num1 >= 0 && num2 >= 0) {
        if (num1 > num2) [num1, num2] = [num2, num1];

        let result = 0;
        for (let i = num1; i <= num2; i++) result += i;

        return result;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
