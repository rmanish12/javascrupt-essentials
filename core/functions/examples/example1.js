const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};

console.log(object.getMessage()); // Hello, World!

// because object.getMessage() is a method invocation, that is why this inside the method equals object

// the variable message inside function, does not influence this.message in anyway