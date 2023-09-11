// If a promise rejection event is not handled by any handler, it bubbles to the top of the
// call stack, and the host needs to surface it.

// An "unhandledRejection" event is thrown  which has a "promise" property, indicating the
// promise that was rejected, and a "reason" property that provides the reason for the 
// rejection of promise.

// It makes it possible to offer fallback error handling per promises, as well as to debug the
// issue. These handlers are global per context, so all errors will go to the same event handlers,
// regardless of source.

// In Node JS

new Promise(function(resolve, reject) {
  reject("throwing rejection")
})

process.on("unhandledRejection", (reason, promise) => {
  console.log("promise: ", promise);
  console.log("reason: ", reason);
})