// A promise is an object representing the eventual completion/failture of an asynchronous operation

const promise = (count) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(1000 + count), 1000)
});

// A promise is a returned object to which we can attach callbacks, instead of passing callbacks to
// a function

const successCallback = (value) => console.log(`Success callback ${value}`);

const failureCallback = (error) => console.log(`Failure callback ${error}`);

// Instead of doing something like this i.e, passing callbacks as arguments
promise(20, successCallback, failureCallback);

// we can attach callbacks to the returned object like
// promise(20)
//   .then(successCallback)
//   .catch(failureCallback);

// A promise is in one of these three states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: operation completed successfully
// 3. rejected: meaning that the operation failed

// A promise is said to be settled if it is either fulfilled or rejected

// STATIC METHODS

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000)
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000)
});

const promise4 = Promise.resolve(4);

const promise5 = 5;

// const promise6 = Promise.reject("Rejecting promise 6")

// ----------------- Promise.all() -------------------
// It takes an array of promises as input and returns when all of the input promises fulfill
// (even when an empty item is passed), with the array of returned values, or rejects when
// any of the promises rejects, with the first rejection reason
// Promise.all([promise1, promise2, promise3, promise4, promise5])
//   .then(values => console.log(values))
//   .catch(err => console.error("Error: ", err))

// ----------------- Promise.allSettled() ------------------
// It takes an array of promises as input and returns a single promise (with an array of objects
// that describe the outcome of each promise) when all of the inputs promises settle,
// either fulfilled or rejected
// Each outcome object has the following properties:
// "status" - fulfilled/rejected depending on the result of promise
// "value" - only if status is fulfilled, the value with which the promise was fulfilled
// "reason" - only if status is rejected, the reason that the promise was rejected with
// Promise.allSettled([promise1, promise2, promise3, promise4, promise5, promise6])
//   .then(values => console.log(values))
//   .catch(err => console.error("Error: ", err))

// ------------------ Promise.any() ----------------------
// It takes an array of promises as input and returns a single promise, which fulfills when any of
// the input promise fulfills, with this first fulfillment value. It rejects when all of the input promises
// reject (including when an empty element is passed), with an AggregateError containing an array
// of rejection reasons
// Promise.any([promise1, promise2, promise3, promise4, promise5, promise6])
//   .then(values => console.log(values))
//   .catch(err => console.error("Error: ", err))

  // ---------------- Promise.race() ---------------------
  // It takes an array of promises as input and returns a single promise that settles with the eventual state of the first promise that settles
Promise.race([promise1, promise2, promise3])
  .then(value => console.log(value))
  .catch(err => console.error("Error:", err))