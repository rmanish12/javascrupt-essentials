// JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to)

// However, the outer function does not have access to the variables and functions defined inside the inner function.
// This provides a sort of encapsulation for the variables of the inner function.

const getCode = (function() {
  const apiCode = "abcx102s";

  return function () {
    return apiCode;
  }
})();

console.log(getCode());

// One of the pitfalls to watch out for when using closure is - if an enclosed function defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in outer scope again

const createPet = function(name) {
  // The outer function defines a variable called "name"
  return {
    setName(name) {
      // The enclosed function also defines a variable called "name"
      name = name; // How do we access the "name" defined by the outer function?
    }
  }
}