function areThereDuplicates(...arg) {
  // good luck. (supply any arguments you deem necessary.)
  const obj = {};
  for (let i=0; i<arg.length; i++) {
      obj[arg[i]] = obj[arg[i]] + 1 || 1
  }
  
  return !!Object.keys(obj).find(key => obj[key] > 1);
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true