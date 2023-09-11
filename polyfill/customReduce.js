function customReduce(cb, initialValue) {
  var accumulator = initialValue;

  for (var i=0; i<this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i]
    }
  };

  return accumulator;
}

Array.prototype.customReduce = customReduce;

var arr = [1, 2, 3, 4, 5];
var res = arr.customReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(res);
