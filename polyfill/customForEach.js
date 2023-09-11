function customForEach(cb) {
  for (var i=0; i<this.length; i++) {
    cb(this[i], i, this);
  }
};

Array.prototype.customForEach = customForEach;

var arr = [1, 2, 3];
var res = arr.customForEach(item => console.log(item*2));
