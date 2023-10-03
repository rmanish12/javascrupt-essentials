// Currying is an advance technique of working with functions. It is used not only in JS, but in other languages as well

// It is a transformation of function from f(a, b , c) to f(a)(b)(c);
// Currying does not call a function, it just transforms it

// It only applies to functions that have fixed number of arguments.
// A function that uses rest parameter like f(...args) can't be curried

// SIMPLE IMPLEMENTATION
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    }
  }
};

function sum(a, b) {
  return a + b;
};

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3

// ADVANCED IMPLEMENTATION
function curryImp(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function add (a, b, c) {
  return a + b + c;
}

let advancedCurriedSum = curryImp(add);

console.log(advancedCurriedSum(1, 2, 3)); // 6
console.log(advancedCurriedSum(1)(2, 3)); // 6
console.log(advancedCurriedSum(1)(2)(3)); // 6  

// When we run this function, there are two "if" execution branches:
// 1. If passed "args" count is the same or more than the original function has in its definition (f.length), then just call the original function using f.apply
// 2. Otherwise, get a partial; we do not call function yet. Instead, another wrapper is returned, that will re-apply "curried" providing previous arguments together with the new ones

// Currying is useful when out of the defined number of arguments for a function, few are fixed. Then we can get a partial function using those fixed arguments, and call that partial function using the remaining arguments.