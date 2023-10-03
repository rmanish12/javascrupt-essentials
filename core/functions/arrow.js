// An arrow function expression has a shorter syntax compared to function expressions and does not have its own "this", "arguments", "super" or "new.target"

// Arrow functions are always anonymous
// Arrow functions cannot be used as constructors. Calling them with "new" throws TypeError

// Two factors influenced the introduction of arrow function: 
// 1. shorter functions
// 2. non-binding of this

// NO SEPARATE THIS

// Until arrow functions, every new function defined its own "this" value:
// - a new object in case of constructor
// - undefined in strict mode function call
// - the base object if a function is called as an object method

// This proved to be less than ideal for object-oriented programming language

// function Person() {
//   this.age = 0;

//   setInterval(function growUp() {
//     // growUp function defines "this" as the global object, which is different from "this" 
//     // defined by Person() constructor
//     this.age++;
//     console.log(this.age); // NaN
//   }, 1000)
// };
// const p = new Person();

// In ECMAScript 3/5, this issue was fixed by assigning the value of "this" to a closed variable.
// function Person1() {
//   const self = this;
//   self.age = 0;

//   setInterval(function growUp() {
//     // growUp function defines "this" as the global object, which is different from "this" 
//     // defined by Person() constructor
//     self.age++;
//     console.log(self.age); // NaN
//   }, 1000)
// };
// const p1 = new Person1();

// An arrow function does not have "this", the "this" value of enclosing execution context is used
function Person2() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age)
  }, 1000)
};
const p2 = new Person2();
