const palindromes = function (str) {
    let orig = str.toLowerCase().match(/[a-z0-9]/g);
    let reversed = orig.slice().reverse();
    return orig.join("") === reversed.join("");
    // return orig.every((value, index) => value === reversed[index]);
};

// Do not edit below this line
module.exports = palindromes;
