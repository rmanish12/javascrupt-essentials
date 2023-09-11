function customFind(cb) {
  var result;

  for (var i=0; i<this.length; i++) {
    if (cb(this[i], i, this)) {
      result = this[i];
      break;
    }
  }

  return result;
}

Array.prototype.customFind = customFind;

var arr = [1, 3, 5, 6, 8, 9];
var res = arr.customFind(item => item%3 === 0);

console.log(res);
