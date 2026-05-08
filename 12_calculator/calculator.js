const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((product, number) => product * number);
};

const power = function(a, b) {
  return a ** b;
  // or
  // return Math.pow(a, b);
};

const factorial = function getFactorial(n) {
	// if (n === 0 || n === 1) {
  //   return 1;
  // } else {
  //   return n * getFactorial(n-1);
  // }

  let product = 1;
  for (let i = n; i > 0; i--) {
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
  factorial
};
