const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, cur) => sum + cur, 0)
};

const multiply = function (arr) {
  return arr.reduce((multiply, cur) => multiply * cur)
};

const power = function (a, b) {
  return a ** b

};

const factorial = function (a) {

  if (a == 0) {
    return 1;
  }
  else {
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result = result * i;
    }
    return result
  }

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
