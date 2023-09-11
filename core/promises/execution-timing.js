// Promises are a form of "inversion of control" - the API implementor does not control
// when the callback gets called. Instead, the job of maintaining the callback queue and 
// deciding when to call the callbacks is delegated to the promise implementation.

Promise.resolve().then(() => console.log(2));
console.log(1);

// OUTPUT - 1, 2

// The synchronous operations are always performed first.
// Instead of running immediately, the passed-in function is put on a "microtask" queue,
// which means it runs later, only after the function which created it exists, and when JS
// execution stack is empty.

// TASK QUEUES VS MICROTASKS

const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

wait(0).then(() => console.log(1));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(4);

// OUTPUT - 4, 2, 3, 1