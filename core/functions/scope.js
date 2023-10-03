// The following variables are defined in the global scope
var num1 = 20;
var num2 = 3;
var name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  var num1 = 2;
  var num2 = 3;

  // console.log("num3: ", num3); // ReferenceError: num3 is not defined
  function add() {
    var num3 = 10;
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"