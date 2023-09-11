// this implementation will work for async operations where "resolve" and "reject" are called
//  at a later point of time as by then, our handlers are already registered with
// ".then()" and ".catch()"

// But it will not work if we resolve a value instead of an async operation, as our handlers
// are not registered by the time our executor is called
function CustomPromise(executor) {

  var onResolve;
  var onReject;
  var isCalled = false; // indicates callback has been called, to avoid multiple calls

  this.then = function (thenHandler) {
    // the handler is stored in a local variable
    // so that it can be called when async operation is completed
    onResolve = thenHandler; 
    return this; // return this for chaining of promise
  }

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    return this;
  }

  function resolve(val) {
    // check if onResolve method has been registered by .then()
    // and any handler hasn't been called yet
    if (typeof onResolve === 'function' && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    if (typeof onReject === 'function' && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  executor(resolve, reject);

}

var promise1 = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // setTimeout(() => reject(1), 1000);
});

promise1
  .then(val => console.log("value: ", val))
  .catch(err => console.error("error: ", err));

// resolving without async operation will not work here
var promise2 = new CustomPromise((resolve, reject) => resolve(2));

// promise2
//   .then(val => console.log("value: ", val))
//   .catch(err => console.error("error: ", err));
