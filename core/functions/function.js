// --------------- FUNCTION DECLARATION -----------------
// When we declare a function without assigning it to any variable

function formatNumber(num) {
  return num.toFixed(2);
};

// --------------- FUNCTION EXPRESSION ---------------
// When we declare a function and assign it to a variable

const square = function(num) {
  return num*num;
};

// Such functions are called anonymous function
// However, we can provide a name to such function
const double = function twice(num) {
  return num*2;
}

var num1 = 2.546;
console.log(num1);
var res = formatNumber(num1);
console.log(num1);

// arguments of primitive data type are passed by value
// i.e, if the function re-assign a parameter, the value won't change outside the function

// however, when we pass object/array as a parameter, it is passed by reference
// i.e, if the function change the property, that is visible outside the function

function getCar(car) {
  car.make = "Toyota";
};

const myCar = {
  make: "Hyundai",
  model: "Creta"
};

console.log(myCar.make); // Hyundai
getCar(myCar);
console.log(myCar.make); // Toyota

function myFunc(arr) {
  arr[0] = 30;
};

const arr = [10, 20];

console.log(arr[0]); // 10
myFunc(arr);
console.log(arr[0]); // 30
