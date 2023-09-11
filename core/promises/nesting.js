const doFirstThing = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // setTimeout(() => reject("doFirstThing failure"), 1000);
});

const doSecondThing = (result) => new Promise((resolve, reject) =>{
  setTimeout(() => resolve(2 + result), 1000);
  // setTimeout(() => reject("Rejecting second promise"), 1000);
});

const doThirdThing = (result) => new Promise((resolve, reject) => {
  // setTimeout(() => resolve(3 + result), 1000);
  setTimeout(() => reject("doThirdThing failure"), 1000);
});

const doSomethingExtra = (result) => new Promise((resolve, reject) => {
  // setTimeout(() => resolve(50 + result), 1000);
  setTimeout(() => reject("something extra rejection"), 1000);
});

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

// doFirstThing()
//   .then(result => doSecondThing(result))
//   .then(newResult => resultArr1.push(newResult))
//   .then(() => console.log("resultArr: ", resultArr1))

// There are two ways of nesting, first one has one promise chain nested in the return value
// of another "then()" handler, while the second one uses an entirely flat chain.
// Simple promise chain are best kept flat without nesting, as nesting can lead to various mistakes.

// NESTING
// It is a control structure to limit the scope of "catch" statements
// A nested catch only catches failures in its scope and below, not errors higher up in the chain
// outside the nested scope. When used correctlt, this gives greater precision in error recovery

// doFirstThing()
//   .then(result => {
//     return doSecondThing(result)
//       .then((secondResult) => doSomethingExtra(secondResult))
//       .catch(err => console.log("Nested error: ", err))
//   }) // will ignore the failure and proceed as the inner one has its own catch
//   .then(() => doThirdThing(10))
//   .then(result => console.log("final result: ", result))
//   .catch(err => console.error("Outside error: ", err))

// The inner "catch" handler only catches errors from "doSecondThing" and "doSomethingExtra"
// after which the code resumes from doThirdThing()

// If doFirstThing() or doThirdThing() fails, its error is caught by outer "catch" only

// CHAINING AFTER CATCH

// It is possible to chain after a failure, which is useful to accomplish new actions even after an action failed in the chain

new Promise((resolve, reject) => {
  console.log("Initial");
  resolve();
})
  .then(() => {
    throw new Error("Failure");
    console.log("Do this");
  })
  .catch(err => console.error(err))
  .then(() => console.log("Do this, no matter what"));

// Outputt
// Initial
// Failure
// Do this, no matter what

// COMMON MISTAKES
// 1. Not chain things together properly. This could happer when we create a new promise but
// forget to return it. As a result, the chain is broken, or rather - we have two independent
// chains racing

// 2. Nest un-necessarily, enabling the first mistake. Nesting also limits the scope of inner error
// handlers, which could lead to uncaught errors

// 3. Forgetting to terminate chains with "catch"

// USING aysnc/await ADDRESSES MOST, IF NOT ALL OF THESE PROBLEMS