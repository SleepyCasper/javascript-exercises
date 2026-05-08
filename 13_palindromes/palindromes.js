const palindromes = function (string) {
    let newString = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reversedString = newString.split('').reverse().join('');
    return reversedString === newString;
};
// Do not edit below this line
module.exports = palindromes;
