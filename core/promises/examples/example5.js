var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve("OK");
  }, 2000);
});

p.then().then(function(data) {
  console.log(data);
});

// OUTPUT
// "OK"

// there is no callback in the first then so value will be passed to second then