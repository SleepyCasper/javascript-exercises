const sumAll = function(start, end) {
    let sum = 0;

    if ((start < 0 || end < 0) ||
        (!Number.isInteger(start) || !Number.isInteger(end))) {
            return "ERROR";
        }
    
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    for (let number = start; number <= end; number++) {
        sum += number;
    }

    return sum;
};
// Do not edit below this line
module.exports = sumAll;
