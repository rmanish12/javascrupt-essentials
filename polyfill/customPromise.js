// this promise implementation will gracefully handle both - sync as well as async operations

function CustomPromise(executor) {

  var onResolve;
  var onReject;
  var isCalled = false; // indicates callback has been called, to avoid multiple calls

  var value;
  var error;
  var isFulfilled = false;
  var isRejected = false;

  this.then = function (thenHandler) {
    // the handler is stored in a local variable
    // so that it can be called when async operation is completed
    onResolve = thenHandler; 

    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled=true;
    }
    return this; // return this for chaining of promise
  }

  this.catch = function (catchHandler) {
    onReject = catchHandler;

    if (!isCalled && isRejected) {
      onReject(err);
      isCalled = true;
    }

    return this;
  }

  function resolve(val) {
    // for sync operations, when executor is called, we mark and store if resolve/reject was called
    // using isFulfilled/isRejected variables
    isFulfilled=true;

    // we also store the value/error that was passed by the executor
    value=val;
    // check if onResolve method has been registered by .then()
    // and any handler hasn't been called yet
    if (typeof onResolve === 'function' && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected=true;
    error=err;
    if (typeof onReject === 'function' && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }

  executor(resolve, reject);

};

CustomPromise.resolve = function(val) {
  return new Promise(function(resolve, reject) {
    resolve(val);
  })
}

CustomPromise.reject = function(err) {
  return new Promise(function(resolve, reject) {
    reject(err);
  })
}

// ------------------- PROMISE.ALL --------------------
CustomPromise.all = function(promises) {
  return new CustomPromise(function(resolve, reject) {
    let count=0;
    let res=[];

    if (promises.length === 0) {
      resolve(res);
      return;
    }

    for (let i=0; i<promises.length; i++) {
      promises[i]
        .then(function (val) {
          res[i] = val;
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch(function (err) {
          reject(err);
        })
    }
  })
}

// ----------------- PROMISE.ALLSETTLED ------------
CustomPromise.allSettled = function(promises) {
  return new CustomPromise((resolve, reject) => {
    let count=0;
    let res=[];

    if (promises.length === 0) {
      resolve(res);
      return;
    }

    for (let i=0; i<promises.length; i++) {
      promises[i]
        .then(function(val) {
          done({ status: "fulfilled", value: val }, i);
        })
        .catch(function(err) {
          done({ status: "rejected", reason: err}, i)
        })
    }

    function done(val, i) {
      res[i] = val;
      count++;
      if (count === promises.length) {
        resolve(res);
      }
    }
  })
}

// ----------------- PROMISE.ANY ----------------------
CustomPromise.any = function (promises) {
  return new CustomPromise((resolve, reject) => {
    let successPromses = [];
    let errorPromises = [];

    if (promises.length === 0) {
      resolve([])
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          successPromses.push[res];
          if (successPromses.length === 1) {
            resolve(successPromses)
          }
        })
        .catch(err => {
          errorPromises.push(err);
          if (errorPromises.length === promises.length) {
            return reject(new AggregateError('All promises were rejected'))
          }
        })
    }
  })
}

var promise1 = new CustomPromise((resolve, reject) => {
  // setTimeout(() => resolve(1), 1000);
  setTimeout(() => reject(1), 1000);
});

// promise1
//   .then(val => console.log("value: ", val))
//   .catch(err => console.error("error: ", err));

var promise2 = new CustomPromise((resolve, reject) => resolve(2));

var promise3 = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000)
});

var promise4 = CustomPromise.resolve(4);

var promise5 = CustomPromise.reject(5);

// promise2
//   .then(val => console.log("value: ", val))
//   .catch(err => console.error("error: ", err));

// CustomPromise.all([promise1, promise2, promise3, promise4, promise5])
//   .then(values => console.log(values))
//   .catch(err => console.error("Error: ", err));

// CustomPromise.allSettled([promise1, promise2, promise3, promise4, promise5])
//   .then(values => console.log(values))
//   .catch(err => console.error("Error: ", err));

CustomPromise.any([promise1, promise5])
  .then(val => console.log(val))
  .catch(err => console.log("Error: ", err));
