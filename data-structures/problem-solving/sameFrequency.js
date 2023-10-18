function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const num1Arr = num1.toString().split('');
  const num2Arr = num2.toString().split('');
  const obj1 = {};
  const obj2 = {};
  if (num1Arr.length !== num2Arr.length) return false;
  
  for (let i=0; i<num1Arr.length; i++) {
      obj1[num1Arr[i]] = obj1[num1Arr[i]] + 1 || 1;
  }
  
  for (let i=0; i<num2Arr.length; i++) {
      obj2[num2Arr[i]] = obj2[num2Arr[i]] + 1 || 1;
  }
  return !Object.keys(obj1).some(key => obj1[key] !== obj2[key])
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false