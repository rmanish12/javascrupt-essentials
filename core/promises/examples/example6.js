var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
      resolve("OK");
  }, 2000);
}).
then();

var p2 = p.then(function(data) {
  return data + " Good";
})

p2.then(val => console.log(val));
