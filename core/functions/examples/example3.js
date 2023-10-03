const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000); // undefined

// while setTimeout() uses object.logMessage as callback, still it invokes object.logMessage as a regular function, rather than a method

// and during a regular function call, this corresponds to global object, which is windows in case of browser and window.message is undefined

// In order to get outpur as "Hello, World!", we need to call this as method, which we can do like below
setTimeout(() => object.logMessage(), 1000); // "Hello, World!"