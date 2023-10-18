function averagePair(arr, targetAvg){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  let avg;
  
  if (arr.length < 2) return false;
  while (start < end) {
      avg = (arr[start] + arr[end])/2;
      if (avg === targetAvg) return true;
      if (avg < targetAvg) {
          start++;
      } else if (avg > targetAvg) {
          end--;
      }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false