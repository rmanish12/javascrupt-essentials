// A common use-case is to execute two or more asynchronous operations back to back, where each
// subsequent operation starts when the previous operation succeeds, with the result from the previous
// step.
// Earlier, doing such things using callback would lead to "callback pyramid of doom" or "callback hell"

const doFirstThing = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const doSecondThing = (result) => new Promise((resolve, reject) =>{
  setTimeout(() => resolve(2 + result), 1000);
  // setTimeout(() => reject("Rejecting second promise"), 1000);
});

const doThirdThing = (result) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(3 + result), 1000);
});

const failureCallback = (error) => console.error(error);

// Using chaing with callbacks
// doFirstThing(null, (result) => {
//   doSecondThing(result, (newResult) => {
//     doThirdThing(newResult, (thirdResult) => {
//       console.log("Results --> ", result, newResult, thirdResult);
//     }, failureCallback)
//   }, failureCallback)
// }, failureCallback);

// With promises, we can accomplish this by creating a promise chain
// doFirstThing()
//   .then(result => doSecondThing(result))
//   .then(result => doThirdThing(result))
//   .then(result => console.log(result))
//   // .then(null, (err) => console.error(err));
//   .catch(err => console.error(err));

// With this pattern, we can create longer chains of processing, where each promise represents
// the completion of one asynchronous step in the chain.
// In addition, the arguments to "then()" are optional and "catch(failureCallback)" is short for
// "then(null, failureCallback)", so if our error handling code is same for all steps, we can attach it
// to the end of the chain

// IMPORTANT
// Always return results, otherwise callbacks will not catch the result of the previous promise.
// If the previous handler started a promise but did not return it, there is no way to track its
// settlement anymore, and the promise is said to be "floating"

// doFirstThing()
//   .then(result => {
//     // not returning the result
//     doSecondThing(result)
//   })
//   .then(result=> {
//     console.log("result: ", result);
//     // result is undefined, because nothing is returned from the prevous handler
//     // there is no way to know the return value of doSecondThing(), call anymore, or
//     // whether is succeeds at all
//   });

// This may be worse if we have race conditions - if the promise from the last handler is not
// returned, the next "then" handler will be called early, and any value it reads may be incomplete

// const resultArr = [];

// doFirstThing()
//   .then(result => {
//     // not returning
//     doSecondThing(result)
//       .then(newResult => resultArr.push(newResult));
//   })
//   .then(() => {
//     console.log("resultArr: ", resultArr);
//     // Always [], because doSecondThing() hasn't been completed yet
//   });

// Therefore, as a rule of thumb, whenever an operation encounters a promise, return it and defer
// its handling to the next "then" handler

const resultArr1 = [];

// doFirstThing()
//   .then(result => {
//     return doSecondThing(result)
//       .then(newResult => resultArr1.push(newResult));
//   })
//   .then(() => {
//     console.log("resultArr: ", resultArr1);
//   });

// and even better would be flat chaining

doFirstThing()
  .then(result => doSecondThing(result))
  .then(newResult => resultArr1.push(newResult))
  .then(() => console.log("resultArr: ", resultArr1))
