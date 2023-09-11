function customFilter(cb) {
  var result = [];

  for (var i=0; i<this.length; i++) {
    if (cb(this[i], i, this)) result.push(this[i])
  }

  return result;
}

Array.prototype.customFilter = customFilter;

var arr = [1, 3, 5, 6, 8, 9];
var res = arr.customFilter(item => item%3 === 0);

console.log(res);
