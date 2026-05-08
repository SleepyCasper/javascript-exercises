const fibonacci = function(n) {
    let prev = 1;
    let current = 1;
    let result = 0;
    n = +n;

    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            result = prev + current;
            prev = current;
            current = result;
        }
        return current;
    } else if (n > 0 && n <= 2) {
        return 1;
    } else if (n === 0) {
        return n;
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
