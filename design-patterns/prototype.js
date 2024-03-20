const prototype = {
  greeting: 'Hello',
  sayHello: function () {
    console.log(this.greeting + " World!!")
  },
  clone: function () {
    return Object.create(this)
  }
};

const newObj = prototype.clone();

newObj.greeting = 'Hola';

newObj.sayHello();

// This pattern is useful when we have to create multiple objects with same properties and methods.
// In JS context, this pattern is mostly used to create objects as a prototype and then instantiate a new object by cloning the prototype