const removeFromArray = function (arr, ...args) {
    args.forEach((arg) => {
        let idx = arr.indexOf(arg);
        while (idx != -1) {
            arr.splice(idx, 1);
            idx = arr.indexOf(arg);
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
