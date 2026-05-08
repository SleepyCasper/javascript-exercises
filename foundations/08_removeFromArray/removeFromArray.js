const removeFromArray = function(array, ...itemsToRemove) {
    return array.filter(item => !itemsToRemove.includes(item));
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
