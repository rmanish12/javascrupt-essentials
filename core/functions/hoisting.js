console.log(square(5)); // 25

function square(num) {
  return num*num;
}

// this code runs without error, despite the function being called before it is declared
// this is because JS interpreter hoists the entire "function declaration" to the top 
// of the current scope

// However, hoisting works only for function declaration and NOT for function expression

console.log(double(2)); // ReferenceError: Cannot access 'double' before initialization

const double = function (num) {
  return num*2;
}
