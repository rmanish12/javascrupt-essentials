const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};

console.log(object.greet());    // Hello World
console.log(object.farewell()); // Goodbye, undefined

// inside greet, "this" value equals object because it is a regular function
// but, farewell() is an arrow function, so this inside it equals to this of outer scope
// the outer scope of farewell is the global scope, where this is the global object