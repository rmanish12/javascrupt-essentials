function customMap(cb) {
  var result = [];

  for (var i=0; i<this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

Array.prototype.customMap = customMap;

var arr = [1, 2, 3];
var res = arr.customMap(item => item*2);
console.log(res)