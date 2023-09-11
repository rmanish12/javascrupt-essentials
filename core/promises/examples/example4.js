var p = new Promise(function(resolve) {
  return "OK"; // returning a value does not create a promise, and then no chaining
   resolve("OK"); // we need to resolve the value
});

var p2 = p.then(function(data) {
  return data;
});

var p3 = p2.then(function(data) {
  return data + " Bye";
});

p3
  .then(val => console.log(val))
  .catch(err => console.error("Error: ", err))
